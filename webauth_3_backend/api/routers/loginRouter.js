// IMPORTS
    const express = require('express')

// KNEX DB
    const DB_KNEX = require('../../data/dbConfig')

// ROUTER
    const router = express.Router();

// - GET - //
    router.get('/', async(req,res) => {
        console.log('loginRouter get/')
        
    })
// - POST - //
// - PUT - //
// - DEL - //

// EXPORTS
    module.exports = router