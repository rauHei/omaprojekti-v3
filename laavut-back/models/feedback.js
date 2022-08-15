//import mongoose from 'mongoose'
const mongoose = require('mongoose')

const feedbackSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    state: {
        type: Number,
    },
    feedback: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'

    }
})

feedbackSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})
const Feedback = mongoose.model('Feedback', feedbackSchema)

module.exports = Feedback 