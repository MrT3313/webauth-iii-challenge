const bcrypt = require('bcrypt')

function pwHash( req,res,next ) {
    console.log('MIDDLEWARE - pwHash')
    const newUser  = req.body
    
    const hash = bcrypt.hashSync(newUser.password, 14)
    newUser.password = hash
        console.log('newUser', newUser) 
    
    req.newUser = newUser
    next()
}

module.exports = pwHash