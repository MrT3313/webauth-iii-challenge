// EXPRESS
    const express = require('express')

// KNEX DB
    const DB_KNEX = require('../../data/dbConfig')

// ROUTER
    const router = express.Router()

// - GET - //
    router.get('/', async(req,res) => {
        console.log('registerRouter get/')
        res.status(200).json( {message: "This is a GET/ in registerRouter"} )
    })
// - POST - //
    /* Accepted Shape
        {
            "userName": "STRING",
            "password": "STRING"
        } 
    */ 
    router.post("/", async(req,res) => {
        console.log('registerRouter POST/')
        console.log('req.body', req.body)

        DB_KNEX("USERS")
            .insert(req.body)
            .then( results => {
                console.log('results', results )
                res.status(200).json( results )            
            })
            .catch( err => {
                res.status(500).json( { error: 'UNABLE TO WORK'} )
            })
    })

// - PUT - //
// - DEL - //
    
// EXPORTS
    module.exports = router
    
    