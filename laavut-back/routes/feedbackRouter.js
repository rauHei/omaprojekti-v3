
const express = require('express')
const feedB = require('../controllers/feedback')
const router = express.Router();
const auth = require('../utils/auth')


//kaikki kommentit..
router.get('/', feedB.getFeedbacks)
//yksi kommentti
router.get('/:id', feedB.getFeedbackById)
//uusi kommentti
router.post('/', auth, feedB.newFeedback)
//kommentin poisto
router.delete('/:id', auth, feedB.deleteFeedback)
//kommentin päivitys
router.put('/:id', auth, feedB.UpdateFeedback)



module.exports = router;
