const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const fs = require('fs')
const cors = require("cors");
const path = require('path')

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

app.post('/react', (req, res) => {
    print(req.body)
    res.send('')
})