const express = require('express');


const router = express.Router();
const user = require("../controllers/users");
const auth = require('../utils/auth');
const multerConfig = require('../utils/multer-config');

//kirjautumisreitit
router.post('/register', user.registerUser);
router.post('/login', user.LoginUser)


//hakee kaikki käyttäjät
router.get('/register', user.allUsers)
//päivittää käyttäjäprofilia, vaatii et on kirjautunut onnistuneesti
router.put('/register/:id', auth, user.updateUserProfile)
//hakee tietyn käyttäjän id perusteella vaatii kirjautumisen
router.get('/register/:id', auth, user.getUSerById)
//Vaihtaa profiilikuvan käyttäjälle,multerin kanssa ei toimi put komento vaan vain post komento, myöskin kirjautuneille käyttäjille
router.post('/register/:id', auth, multerConfig.single('image'), user.UpdatePhoto)


//ei toimi vielä..
router.get('/login', user.LoggedInUser)


module.exports = router;


