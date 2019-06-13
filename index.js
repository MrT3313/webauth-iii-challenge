// ENVIRONMENT VARIABLES
    require('dotenv').config()

const server = require('./api/server.js')



const PORT = process.env.PORT || 7000;

server.listen(PORT, () => {
    console.log(`\n=== WEB DB 3 -- API Listening on http://localhost:${PORT} ===\n`)
})

server.post('/', async(req,res) => {
    console.log('loginRouter post/')
    
})