// EXPRESS
    const express = require('express')
    
// KNEX DB
    const DB_KNEX = require('../../data/dbConfig')

    // MIDDLEWARE
    const protectRoute = require('../middleware/protectRoute.js')

// ROUTER
const router = express.Router()

// ROUTER
    // - GET - //
    router.get('/', protectRoute, async(req,res) => {
        console.log('usersRouter get/')
        
        DB_KNEX('USERS')
        .then( users => {
            console.log('users', users )
            res.status(200).json(users)
        })
        .catch( err => {
            res.status(500).json( { error: '"Unable to GET users from the USERS table'} )
        })
    })

    module.exports = router