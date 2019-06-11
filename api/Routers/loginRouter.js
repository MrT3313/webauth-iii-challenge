// IMPORTS
    const express = require('express')
    const bcrypt = require('bcrypt')

    const jwt = require('jsonwebtoken')
    

// KNEX DB
    const DB_KNEX = require('../../data/dbConfig')

// ROUTER
    const router = express.Router()

// ROUTER
    // - POST - //
    router.post('/', async(req,res) => {
        console.log('loginRouter post/')
        const { name, password } = req.body

        DB_KNEX('USERS')
            .where('name', name)
            .first()
            .then( user => {
                console.log('USER', user )
                
                const pwVerification = bcrypt.compareSync(password, user.password)
                    console.log(pwVerification)
                    
                if (user && pwVerification) {
                    // Prepare JWT
                    jwt.sign({
                        userID: user.id,

                    }, 'super secret string', (err, token) => {
                        if (err) {
                            res.status(401).json( {message: 'Could not generate token'} )
                        } else {
                            res.status(200).json( {
                                message: `Welcome ${name}`,
                                authToken: token
                            } )
                        }
                    })

                }
            })
            .catch( err => {
                res.status(500).json( { error: 'Unable to Login'} )
            })
    })

module.exports = router