const secrets = require('../../config/secrets.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

function protectRoute( req,res,next ) {
    console.log('MIDDLEWARE - protectedRoute')
    console.log(secrets)
    console.log('secrets.jwtSecret', secrets.jwtSecret)


    console.log('req.headers', req.headers)

    const token = req.headers.authorization;
        console.log('token', token)

    if (token) {
        jwt.verify(token, secrets.jwtSecret, (err, payload) => {
            console.log('payload', payload)
            console.log('payload', payload.id)
            if (err) {
                res.status(403).json( {message: "you are not authorized"} )
            } else {
                req.userID = payload.userID
                next()
            }
        })
    } else {
        res.status(400).json( {message: "No credentials provides"} )
    }
}

module.exports = protectRoute