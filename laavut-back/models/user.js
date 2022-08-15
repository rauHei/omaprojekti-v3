const mongoose = require('mongoose')
const bcrypt = require('bcrypt')


//Käyttäjä schema


const userSchema = new mongoose.Schema({
    username: String,
    name: String,
    passwordHash: String,
    pic: {
        type: String,
        default:
            "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    feedback: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Feedback'
        }
    ],
})


userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()

        delete returnedObject._id
        delete returnedObject.__v
        // the password should not be revealed
        delete returnedObject.passwordHash
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User
