// EXPRESS
    const express = require('express')

// ROUTERS


// SERVER
    const server = express()

// HOMEPAGE ROUTING
    server.get('/', async(req,res) => {
        res.json({ message: `webAuth3 Server Is Working`})
    })

// INDIVIDUAL ROUTES

// EXPORTS
    module.exports = server
    