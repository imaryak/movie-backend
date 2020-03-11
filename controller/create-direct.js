const Direct = require('../models/direct')

const controller = async (req,res) => {
    const {body} = req;
    const direct = await Direct.create({
        name: body.name,
        about: body.about,
        email: body.email,
        avatarurl: body.avatarurl
    }) 
    res.send(direct);
}
module.exports = controller