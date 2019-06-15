// IMPORTS
const express = require('express')

// KNEX DB
    const DB_KNEX = require('../../data/dbConfig')

// MIDDLEWARE
    const protected = require('../middleware/protected')
    

// ROUTER
    const router = express.Router();

// - GET - //
    router.get('/', protected, async(req,res) => {
        console.log('usersRouter get/')
        
        DB_KNEX('USERS')
        .then( users => {
            console.log('users', users )
            res.status(200).json( users )
            
        })
        .catch( err => {
            console.log('Unable to GET all users from USERS table')
            res.status(500).json( { error: 'Unable to GET all users from USERS table'} )
        })
    })
// - POST - //
// - PUT - //
// - DEL - //

// EXPORTS
    module.exports = router