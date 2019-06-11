// EXPRESS
    const express = require('express')
    
// KNEX DB
    const DB_KNEX = require('../../data/dbConfig')

// MIDDLEWARE
    const pwHash = require('../middleware/pwHash')
    

// ROUTER
    const router = express.Router()

// ROUTES
// - POST - //
    /* Accepted Shape
        {
            "name": "STRING"
            "password": "STRING"
            "department": "STRING"
        }
    */

    router.post('/', pwHash, async(req,res) => {
        console.log('postRouter post/')
        
        const passedNewUser = req.body

        DB_KNEX('USERS')
            .insert(passedNewUser)
            .then( result => {
                console.log( result )
                res.status(200).json( result )
            })
            .catch( err => {
                res.status(500).json( { error: 'Unable to INSERT new User into USERS table'} )
            })
    })

// EXPORTS
module.exports = router