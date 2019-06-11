// EXPRESS
    const express = require('express')

// ROUTERS
    const registerRouter = require('./Routers/registerRouter.js')
    const usersRouter = require('./Routers/usersRouter.js')
    

// SERVER
    const server = express()
    server.use(express.json())

// HOMEPAGE ROUTING
    server.get('/', (req,res) => {
        res.json({message: 'WEB AUTH 3 IS WORKING!!'})
    })

// INDIVIDUAL ROUTS
    server.use('/api/register', registerRouter)
    server.use('/api/users', usersRouter)

// EXPORTS
    module.exports = server