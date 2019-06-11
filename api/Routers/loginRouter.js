// EXPRESS
    const express = require('express')

// KNEX DB
    const DB_KNEX = require('../../data/dbConfig')

// ROUTER
    const router = express.Router()

// ROUTER
    // - POST - //
    router.post('/', async(req,res) => {
        console.log('postRouter post/')
        const { name, password } = req.body

        DB_KNEX('USERS')
            .where('name', name)
            .first()
            .then( res => {
                console.log('res', res )
                
            })
            .catch( err => {
            
            })

    })
    