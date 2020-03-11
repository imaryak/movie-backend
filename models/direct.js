const mongoose = require('mongoose')

const DirectSchema = new mongoose.Schema({
    name: {type: 'string', required: true},
    about: 'string',
    email: {type: 'string', required: true},
    avatarurl: 'string',
})

const Direct = mongoose.model('direct', DirectSchema);
module.exports = Direct;