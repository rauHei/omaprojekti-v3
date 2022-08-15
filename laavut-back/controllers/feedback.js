const asyncHandler = require('express-async-handler')
const Feedback = require('../models/feedback')
const User = require('../models/user')


//hakee kaikki kommentit ja niiden käyttäjät
const getFeedbacks = asyncHandler(async (req, res, next) => {

    const feedback = await Feedback.find({})
        .populate('user', { username: 1, name: 1, pic: 1 })

    if (feedback) {
        res.status(200)
            .json(feedback)

    } else {
        res.status(404)
            .json({ message: "Feedbacks not found" });
    }


})

//hakee tietyn kommentin
const getFeedbackById = asyncHandler(async (req, res) => {
    const Feedback2 = await Feedback.findById(req.params.id)

    if (Feedback2) {
        res.status(200).json(Feedback2)
    } else {
        res.status(404).json({ message: "Feedback not found" });
    }
});

//postaa uuden feedbackin

const newFeedback = asyncHandler(async (req, res) => {

    const user = await User.findById(req.body.userId)

    const newfeedback = new Feedback({
        name: req.body.name,
        state: req.body.state,
        feedback: req.body.feedback,
        date: req.body.date,
        user: user._id
    })

    const savedFeedback = await newfeedback.save()
    user.feedback = user.feedback.concat(savedFeedback._id)
    await user.save()

    res.status(201).json(savedFeedback)
})


//poistaa feedbackin !! 
const deleteFeedback = asyncHandler(async (req, res) => {
    if (!req?.params?.id) {
        return res.status(400).json({ 'message': 'Id is required' })
    }
    const deletedOne = await Feedback.findByIdAndDelete(req.params.id)

    if (deletedOne) {
        return res.json({ message: "Successfully deleted one document." })

    } else {
        return res.status(404).end()
    }
})


//Päivittää kommentin tiedot!!
const UpdateFeedback = asyncHandler(async (req, res) => {
    if (!req?.params?.id) {
        return res.status(400).json({ 'message': 'Id is required' })
    }
    const { name, state, feedback, date } = req.body

    const feedBC = {
        _id: req.params._id,
        name: name,
        state: state,
        feedback: feedback,
        date: date,
    };

    const result = await Feedback.findByIdAndUpdate(req.params.id, feedBC, { new: true })

    if (result) {
        res.status(201).json(result);
    } else {
        res.status(404).json({ message: "Feedback was not updated" });
    }

})

module.exports = {
    UpdateFeedback,
    deleteFeedback,
    newFeedback,
    getFeedbackById,
    getFeedbacks
}