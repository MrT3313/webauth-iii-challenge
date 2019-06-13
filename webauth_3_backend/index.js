// ENVIRONMENT VARIABLES
require('dotenv').config()

const server = require('./api/server.js')

const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
    console.log(`=== webAuth3 Server Listening on http://localHost:${PORT} ===`)
})
