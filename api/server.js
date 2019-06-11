// EXPRESS
    const express = require('express')

// SERVER
    const server = express()
    server.use(express.json())

// HOMEPAGE ROUTING
    server.get('/', (req,res) => {
        res.json({message: 'WEB AUTH 3 IS WORKING!!'})
    })

// EXPORTS
    module.exports = server