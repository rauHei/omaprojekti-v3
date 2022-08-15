const jwt = require('jsonwebtoken')

//tämä luo käyttäjälle tokenin..joka vanhenee 30pv kuluttua..

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });
};

module.exports = { generateToken };