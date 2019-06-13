// EXPRESS
    const express = require('express')

// ROUTERS
    const registerRouter = require('./routers/registerRouter')
    const loginRouter = require('./routers/loginRouter')
    const usersRouter = require('./routers/usersRouter')
    

// SERVER
    const server = express()
    server.use(express.json())

// HOMEPAGE ROUTING
    server.get('/', async(req,res) => {
        res.json({ message: `webAuth3 Server Is Working`})
    })

// INDIVIDUAL ROUTES
    server.use('/api/register', registerRouter)
    server.use('/api/login', loginRouter)
    server.use('/api/users', usersRouter)

// EXPORTS
    module.exports = server
    