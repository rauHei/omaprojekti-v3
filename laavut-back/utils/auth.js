const jwt = require('jsonwebtoken');


//tää middleware tarkastaa onko kirjautunut käyttäjä ja onko salaustoken..
const auth = async (req, res, next) => {

    const authorization = req.get('authorization');
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        const token = authorization.substring(7)
        const decodedToken = jwt.verify(token, process.env.SECRET);
        const id = decodedToken.id;
        if (!token || !id) {
            return res.status(401).json({ error: 'token missing or invalid' })

        } else {

            next();
        }
    } else {
        res.status(401).json({
            error: new Error('Not authorixed!')
        });
    }

};
module.exports = auth;