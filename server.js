const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const fs = require('fs')
const path = require('path')
var cors = require("cors");

print = console.log

app.listen(4545);

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }))
app.use(bodyParser.json({ limit: '50mb' }))

app.use(express.static(path.join(__dirname, 'build')));

print('Server started')

var count = 0

var last_save_state = undefined


app.post('/content', (req, res) => {
    console.log(req.body)

    last_save_state = req.body.raw_state
    
    res.send()
    
})

app.get('/content', (req, res) => {
    console.log(req.body)
    
    content = {}

    if(last_save_state){
        content.raw_state = last_save_state
    }
    res.send(content)
    
})


app.get('/', (req, res) => {
    
    res.sendFile(path.join(__dirname, 'build/index.html'))
    
})