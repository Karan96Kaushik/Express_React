const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const fs = require('fs')
const path = require('path')
var bookmark_list = require('./bookmark_list.json')

var cors = require("cors");

print = console.log

app.listen(4545);

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }))
app.use(bodyParser.json({ limit: '50mb' }))

app.use(express.static(path.join(__dirname, 'build')));

print('Server started')

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