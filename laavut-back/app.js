const express = require('express')
const config = require('./utils/config')
const cors = require('cors')
const feedbackRouter = require('./routes/feedbackRouter')
const userRouter = require('./routes/userRouter')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')
const path = require('path')



const app = express()


//logger.info('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI)
    .then(() => {
        logger.info('connected to MongoDB')
    })
    .catch((error) => {
        logger.errorM('error connection to MongoDB:', error.message)
    })


app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(middleware.requestLogger)

//reittien käyttöönotto:

//ladatut kuvat menevät tänne
app.use('/pics', express.static(path.join(__dirname, 'pics')));
//kommentit
app.use('/api/feedback', feedbackRouter)
//käyttäjät
app.use('/api/users', userRouter)
//jotta kaikki muut sivut toimivat myös
app.get("*", (req, res) => {
    res.sendFile(
        path.join(__dirname, "./build/index.html")
    );
})


app.use(middleware.errorHandler)
app.use(middleware.unknownEndpoint)

module.exports = app
