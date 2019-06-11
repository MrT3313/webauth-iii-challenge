// EXPRESS
    const express = require('express')
    
// KNEX DB
    const DB_KNEX = require('../../data/dbConfig')

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

    router.post('/', async(req,res) => {
        console.log('postRouter post/')
        
        const passedNewUser = req.body

        DB_KNEX('USERS')
            .then( res => {
                console.log( res )
                res.status(200).json( res )
            })
            .catch( err => {
                res.status(500).json( { error: 'Unable to INSERT new User into USERS table'} )
            })
    })

// EXPORTS
module.exports = router