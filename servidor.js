const express = require('express')
const { dirname } = require('path')
const app = express()

app.use(express.static(__dirname + '/'))
app.get('/', function(req, res){
    res.render("index.html")
})

app.listen(1000,()=>{
    console.log('server iniciando.....')
})