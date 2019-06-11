Inside of LOGIN ROUTER

before returning res.status(200) --> const token = generateToken(user)

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username, 
    }

    const secret = 'this is a secret' --> store on env file
        module.exports = { 
            jwtSecret: process.env.JWT_SECRET || 'write your secret here'
        }

    const options = {
        expiresIn: '2h'
    }


    return jwt.sign(payload, secret, options)
}