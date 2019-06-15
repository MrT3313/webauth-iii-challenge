// IMPORTS\
    const express = require('express')
    const bcrypt = require('bcrypt')
    const jwt = require('jsonwebtoken')
    const secrets = require('../../secrets')
    
    
// KNEX DB
    DB_KNEX = require('../../data/dbConfig.js')

// ROUTER
    const router = express.Router();

// - GET - //
// - POST - //
    router.post('/', async(req,res) => {
        console.log('loginRouter post/')
        const { userName, password } = req.body
            console.log('userName, password', userName, password)

        DB_KNEX('USERS')
            .where('userName', userName)
                .first()
                .then( user => {
                    console.log('user', user )
                    
                    const pwVerificatoin = bcrypt.compareSync(password, user.password)
                    if (user && pwVerificatoin) {
                        console.log('USER IS A MATCH')

                        console.log('secrets', secrets)
                        console.log('secrets.jwtSecret', secrets.jwtSecret)

                        const token = jwt.sign(
                            {
                                userID: user.userID,
                                userName: user.userName
                            },
                            secrets.jwtSecret,
                            {
                                expiresIn: "1d"
                            }
                        )

                        res.status(200).json({
                            message: `Welcome ${userName}`, 
                            user: user.id,
                            token,
                        })
                    } else {
                        res.status(401).json( { error: 'Unable to Login'} )
                    }
                })
                .catch( err => {
                    res.status(500).json( { error: 'Unable to Login'} )
                })

    })

// - PUT - //
// - DEL - //
    
module.exports = router