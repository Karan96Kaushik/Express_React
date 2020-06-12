const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const fs = require('fs')
const cors = require("cors");
const path = require('path')
const axios = require("axios")
const { PythonShell } = require("python-shell")


print = console.log

const { Sequelize, Model, DataTypes, Op } = require('sequelize');

const sequelize = new Sequelize(
	'postgres',
	'postgres',
	'0Bama-mama',
	{
		dialect: 'postgresql',
		host: 'creepyfuck.tech',
		port: 5432,
		logging: false
	}
);

var gogo = sequelize.import('./models/gogo')

gogo.sync()

try {
	var bookmark_list = require('./bookmark_list.json')
} catch (error) {
	var bookmark_list = [];
	fs.writeFile('./bookmark_list.json', JSON.stringify(bookmark_list), () => { });
}

print = console.log

app.listen(4545);

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }))
app.use(bodyParser.json({ limit: '50mb' }))

app.use(express.static(path.join(__dirname, 'build')));

print('Server Started')

var count = 0

var last_save_state = {}

app.post('/react/getbookmarks', (req, res) => {
	console.log('Get', req.body)
	res.json(bookmark_list)
})

app.post('/react/addbookmarks', (req, res) => {
	if (req.body.link != '' && req.body.name != '') {
		bookmark_list.unshift(req.body)
		res.json(bookmark_list);
	} else if (req.body.link == '' && req.body.name != '') {
		bookmark_list.map((obj, index) => {
			if (obj.name == req.body.name) {
				bookmark_list.splice(index, 1);
				fs.writeFile('./bookmark_list.json', JSON.stringify(bookmark_list), () => { });
				res.json(bookmark_list);
			}
		})
	}
})

app.post('/react/content', (req, res) => {
	last_save_state[req.body.account] = req.body.raw_state
	res.send()
})

app.post('/react/getcontent', (req, res) => {
	console.log(req.body)
	var account = req.body.account
	var content = {}

	if (last_save_state[account]) {
		content.raw_state = last_save_state[account]
	}
	res.send(content)
})

app.get('/react', (req, res) => {

	res.sendFile(path.join(__dirname, 'build/index.html'))

})

app.get('/gogo_ep', (req, res) => {
	// console.log(req.body)

	data = {
		anime: req.body.anime,
		anime_url: req.body.anime_url,
		episode: req.body.name,
		link: req.body.link
	}

	gogo.create(data).then((ret) => {
		print(ret.dataValues)
		count++
		print(count)
		res.send("Done")
	}, (err) => {
		print(err)
		print(count)
		res.send("Err")
	})


})

app.get('/gogo_episodes', (req, res) => {
	var link = req.body.link

	print(link)

	axios.get(link)
		.then(function (response) {
			// console.log(response);
			console.log(response.status);

			let options = {
				mode: 'text',
				// pythonPath: './gogoanime_get_link.py',
				pythonOptions: ['-u'], // get print results in real-time
				// scriptPath: 'gogoanime_get_link.py',
				args: [response.data, 'value2', 'value3']
			};

			PythonShell.run('gogoanime_get_eps.py', options, function (err, results) {
				if (err) throw err;
				res.json(JSON.parse(results[0]))
			});

		})
		.catch(function (error) {
			console.log(error);
		})
		.finally(function () {
			// always executed
		});

})

app.get('/gogo_episode_link', (req, res) => {

	var link = req.query.url

	print(link)

	axios.get(link).then(function (response) {
		// console.log(response);
		console.log(response.status);

		let options = {
			mode: 'text',
			// pythonPath: './gogoanime_get_link.py',
			pythonOptions: ['-u'], // get print results in real-time
			// scriptPath: 'gogoanime_get_link.py',
			args: [response.data, 'value2', 'value3']
		};

		PythonShell.run('gogoanime_get_vid.py', options, function (err, results) {
			if (err) throw err;
			var El = JSON.parse(results[0])

			// console.log(El.name, El.link)
			res.json(El)
			
		});

	})
		.catch(function (error) {
			console.log(error);
			res.send({})
		})

})