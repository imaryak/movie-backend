const express = require('express') 
const router = express.Router()
const getMovies = require('./controller/get-movies')
const createDirect = require('./controller/create-direct')
const createMovie = require('./controller/create-movie')


router.get('/', function(req,res){
    res.send('Hello World')
})

router.get('/movies',getMovies);
router.post('/director',createDirect);
router.get('/createMovies',createMovie);


module.exports = router