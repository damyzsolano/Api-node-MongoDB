var express = require('express')
global.app = express()
global.config= require('./config.js').cofig

const mongoose = require('mongoose')

var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect('mongodb://127.0.0.1:27017/' + config.bd,{useNewurlParser:true,useUnifiedTopology:true},(error,response) => {
    if(error){
        console.log(error)
    }
    else{
        console.log('exito')
    }
})

require('./routes/routes.js')

app.listen(config.puerto,function(){
    console.log('Servidor Funcionando por el puerto '+ config.puerto)
})
