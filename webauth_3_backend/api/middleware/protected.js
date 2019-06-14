const jwt = require('jsonwebtoken')

const secrets = require('../../secrets.js')


function protected(req, res, next) {
    const token = req.headers.authorization
    console.log('token', token)
    console.log('secrets.jwtSecret', secrets.jwtSecret)

    if (token) {
        jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
            if (err) {
                res.status(401).json({ you: "can't touch this!"})
            } else {
                console.log('successful pwVerification')
                req.decodedJwt = decodedToken; 
                next()
            }
        })
    } else {
        res.status(401).json( {you: "shall not pass"} )
    }
}

module.exports = protected