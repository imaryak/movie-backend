const mongoose = require('mongoose');
const direct = require('./direct');

const MovieSchema = new mongoose.Schema({
    name : {type: 'string', required: true},
    description : 'string',
    DateOfRelease : 'number',
    direct : {type:'ObjectId',ref:direct, required: true} 
})

const movie = mongoose.model('movie',MovieSchema);
module.exports = movie