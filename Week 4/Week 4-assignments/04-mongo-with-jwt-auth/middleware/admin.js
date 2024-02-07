const JWT_KEY ="ThorIsHero";
const jwt = require('jsonwebtoken')

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const Headers = req.headers.authorization
    const token = Headers.split(" ")// ["Bearer", "token"]
    const JWT = token[1];
    try {
        decodeUsername = jwt.verify(JWT,JWT_KEY)
        if(decodeUsername){
            next();
        }else{
            res.status(403).json({
                msg: "You are not authenticated"
            })
        }
    } catch (error) {
        res.json({
            msg: "Incorrect inputs " +error
        })
    }
}

module.exports = adminMiddleware;