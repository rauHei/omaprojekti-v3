const logger = require('./logger')


const requestLogger = (request, response, next) => {
    logger.info('Method:', request.method)
    logger.info('Path:  ', request.path)
    logger.info('Body:  ', request.body)
    logger.info('---')
    next()
}

//error handler middleware
const errorHandler = async (error, request, response, next) => {
    logger.errorM(error.message)

    if (error.name === 'CastError') {
        return await response.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
        return await response.status(400).json({ error: error.message })
    } else if (error.name === 'JsonWebTokenError') {
        return await response.status(401).json({
            error: 'invalid token'
        })
    } else if (error.name === 'TokenExpiredError') {
        return response.status(401).json({
            error: 'token expired'
        })
    }
    next(error)
}

const unknownEndpoint = async (request, response) => {
    await response.status(402).send({ error: 'unknown endpoint' })
}

module.exports = {
    requestLogger,
    unknownEndpoint,
    errorHandler
}