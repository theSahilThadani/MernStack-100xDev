const JWT_KEY ="ThorIsHero";
const jwt = require('jsonwebtoken')
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const Headers = req.headers.authorization
    const token = Headers.split(" ")// ["Bearer", "token"]
    const JWT = token[1];
    try {
        decodeUser = jwt.verify(JWT,JWT_KEY);
        if(decodeUser){
            next();
        }
        else{
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

module.exports = userMiddleware;