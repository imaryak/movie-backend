const Movies = require('../models/movies')

const controller = async (req,res) => {
    const {body} = req;
    const movie = await Movies.create({
        name: body.name,
        description: body.description,
        DateOfRelease: body.DateOfRelease,
        direct: body.direct
    }) 
    res.send(movie);
}
module.exports = controller
