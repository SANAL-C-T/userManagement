const userData = require("../model/userModal")


const signup = async (req, res) => {
    const { name, email, phone, password } = req.body;

    const storeData = new userData({
        Name: req.body.name,
        Email: req.body.email,
        Password: req.body.password,
        Phone: req.body.phone
    })
    await storeData.save()

}



module.exports = { signup }