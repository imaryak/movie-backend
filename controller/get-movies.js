const Movie = require('../models/movies')


const controller = async(req,res)=>{
    const movies = await Movie.find().populate('direct');
    res.render('movies',{movies: movies})
}

module.exports = controller