require('dotenv').config()


//pelkkä välimiddeeware joka hakee env tiedostosta nämä teidot
const PORT = process.env.PORT

const MONGODB_URI = process.env.MONGODB_URI


module.exports = {
    MONGODB_URI,
    PORT
}