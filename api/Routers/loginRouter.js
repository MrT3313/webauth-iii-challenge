// IMPORTS
    const express = require('express')
    const bcrypt = require('bcrypt')

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
                    res.status(200).json( {message: `Welcome ${name}`} )
                }
            })
            .catch( err => {
                res.status(500).json( { error: 'Unable to Login'} )
            })
    })

module.exports = router