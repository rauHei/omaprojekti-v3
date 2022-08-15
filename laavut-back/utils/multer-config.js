const multer = require('multer');

// kuvan lataus middleware ja sen asetukset


const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './pics/');
    },
    filename: (req, file, callback) => {
        const name = file.originalname;
        callback(null, Date.now() + "." + name);
    }
});

module.exports = multer({ storage: storage })