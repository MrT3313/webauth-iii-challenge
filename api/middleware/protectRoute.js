
function protectRoute( req,res,next ) {
    console.log('MIDDLEWARE - protectedRoute')

    next()
}

module.exports = protectRoute