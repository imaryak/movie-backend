const express  = require('express')
const app = express();
const router = require('./routes')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

app.set('view engine', 'pug')
app.set('views', './views')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/movies',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(router)


app.listen(3019, function (){
    console.log('App started')
})