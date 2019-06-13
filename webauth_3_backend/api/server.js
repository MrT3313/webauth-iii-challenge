// EXPRESS
    const express = require('express')

// ROUTERS
    const loginRouter = require('./routers/loginRouter')
    const usersRouter = require('./routers/usersRouter')
    

// SERVER
    const server = express()

// HOMEPAGE ROUTING
    server.get('/', async(req,res) => {
        res.json({ message: `webAuth3 Server Is Working`})
    })

// INDIVIDUAL ROUTES
    server.use('/api/login', loginRouter)
    server.use('/api/users', usersRouter)

// EXPORTS
    module.exports = server
    