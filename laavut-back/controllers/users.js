const User = require('../models/user')
const Feedback = require('../models/feedback')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { findById } = require('../models/feedback')


//lisää käyttäjän! TOIMII 
const registerUser = async (req, res) => {
    const { name, username, password } = req.body;
    try {
        const existingUser = await User
            .findOne({ username: username })

        if (existingUser) {
            return res.status(400).json({
                error: 'username must be unique!'
            })
        }

        const saltRounds = 10
        const passwordHash2 = await bcrypt.hash(password, saltRounds)

        const user = new User({
            username: username,
            name: name,
            passwordHash: passwordHash2,

        })
        const savedUser = await user.save()
        console.log('HASH', passwordHash2);

        res.status(201)
            .json(savedUser)

    } catch (error) {
        console.log(error)
    }
}

//kirjaa käyttäjän sisään TOIMII
const LoginUser = async (req, res) => {

    const { username, password } = req.body

    try {
        const user = await User
            .findOne({ username: username })
            .populate('feedback', { name: 1, state: 1, feedback: 1, date: 1, id: 1 })

        if (!user) {
            return res.status(401).json({
                error: 'username'
            })

        }
        if (user) {
            let passwordCorrect = user === null
                ? false
                : await bcrypt.compare(password, user.passwordHash)

            console.log('PASWCOR', passwordCorrect);

            if (passwordCorrect === false) {
                return res.status(401).json({
                    error: 'invalid password'
                })
            }
            const userForToken = {
                username: user.username,
                id: user._id,
            }

            // token expires 24days
            const token = jwt.sign(
                userForToken,
                process.env.SECRET,
                { expiresIn: "24d" }
            )

            res
                .status(200)
                .send({
                    id: user.id,
                    token: token,
                    username: user.username,
                    passwordHash: user.passwordHash,
                    name: user.name,
                    pic: user.pic,
                    feedback: user.feedback
                })
        }
    } catch (error) {
        console.log('virhe', error);
    }
}


//hakee kaikki käyttäjät TOIMII
const allUsers = async (request, response) => {
    try {
        const users = await User
            .find({})
            .populate('feedback', { name: 1, state: 1, feedback: 1, date: 1, id: 1 })

        response
            .status(200)
            .json(users)

    } catch (error) {
        console.log(error)
    }
}

//päivittää käyttäjäprofilia TOIMII!!!
const updateUserProfile = async (req, res) => {

    if (!req?.params?.id) {
        return res.status(400).json({ 'message': 'Id is required' })
    }
    try {


        //koe1
        const { name, username, password } = req.body

        const user = await User
            .findOne({ username: username })
            .populate('feedback', { name: 1, state: 1, feedback: 1, date: 1, id: 1 })

        const saltRounds = 10
        const passwordHash2 = await bcrypt.hash(password, saltRounds)

        const userForToken = {
            username: username,
            id: req.params._id,
        }

        //token expires 24days
        const token = jwt.sign(
            userForToken,
            process.env.SECRET,
            { expiresIn: "24d" }
        )


        const UpdatedUser = {
            id: req.params.id,
            name: name,
            username: username,
            passwordHash: passwordHash2,
        };

        const result = await User.findByIdAndUpdate(req.params.id, UpdatedUser, { new: true })


        if (result) {

            res.status(200).send({
                id: UpdatedUser.id,
                username: UpdatedUser.username,
                passwordHash: UpdatedUser.passwordHash,
                name: UpdatedUser.name,
                pic: user.pic,
                feedback: user.feedback,
                token: token

            });

        } else {
            res.status(404).json({ message: "Feedback was not updated" });
        }
    } catch (error) {
        console.log("Jotain meni vikaan Momgoon päivityksen kanssa", error)
    }
}


//Lataa profiilikuvan käyttäjälle TOIMII!!
const UpdatePhoto = async (req, res) => {

    if (!req?.params?.id) {
        return res.status(400).json({ 'message': 'Id is required' })
    }

    try {

        const url = req.protocol + '://' + req.get('host')


        const user2 = {
            _id: req.params.id,
            pic: url + "/pics/" + req.file.filename,

        }

        const result = await User.findByIdAndUpdate(req.params.id, user2, { new: true })

        if (result) {
            res.status(200).json({ success: true, data: result });
        } else {
            res.status(404).json({ message: "Feedback was not updated" });
        }

    } catch (error) {
        console.log('Tiedoston lähettäminen,epäonnistui', error)
    }
};


// hakee käyttäjän joka on kirjautunut
const LoggedInUser = async (req, res) => {

    const user = await User
        .findOne(req.params.id)
        .populate('feedback', { name: 1, state: 1, feedback: 1, date: 1, id: 1 })

    if (user) {
        res.status(201).json(user)
    } else {
        res.status(404)
            .json({ error: 'User not found' })
    }
}


//poistaa käyttäjän id perusteella Tät!!
const LoggedOut = async (request, response) => {
    try {
        const user = await User.findOne({ username: req.body.username })

        let passwordCorrect = user === null
            ? false
            : bcrypt.compare(password, user.passwordHash)

        if (passwordCorrect) {
            response.status(204).end()
            console.log('user removed');
        } else {
            response.status(404)
                .json({ error: 'Something went wrong..' })
        }
    } catch (error) {
        console.log("Jotain meni vikaan..", error)
    }

}
//ei toimi!!! Testaa!
const getUSerById = async (req, res) => {

    if (!req?.params?.id) {
        return res.status(400).json({ 'message': 'Id is required' })
    }
    try {
        const user = await User
            .findById({ _id: req.params.id })
            .populate('feedback', { name: 1, state: 1, feedback: 1, date: 1, id: 1 })

        if (user) {
            res.status(200).json(user)
        } else {
            res.status(404).json({ message: "User was not found" });
        }

    } catch (error) {
        console.log(error)
    }
};

module.exports = {
    LoginUser,
    updateUserProfile,
    registerUser,
    LoggedOut,
    allUsers,
    LoggedInUser,
    getUSerById,
    UpdatePhoto
};