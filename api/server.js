// EXPRESS
    const express = require('express')

// ROUTERS
    const registerRouter = require('./Routers/registerRouter.js')


// SERVER
    const server = express()
    server.use(express.json())

// HOMEPAGE ROUTING
    server.get('/', (req,res) => {
        res.json({message: 'WEB AUTH 3 IS WORKING!!'})
    })

// INDIVIDUAL ROUTS
    server.use('/api/register', registerRouter)

// EXPORTS
    module.exports = server