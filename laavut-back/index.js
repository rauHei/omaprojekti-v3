// const app = require('./app') // varsinainen Express-sovellus
//import app from './app.js';
const app = require('./app')
const http = require('http')
//import http from 'http'
const config = require('./utils/config')
//import PORT from './utils/config.js';
const logger = require('./utils/logger')
//import { info } from './utils/logger.js';

const server = http.createServer(app)

const PORT = config.PORT || 3007
server.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`)
})

