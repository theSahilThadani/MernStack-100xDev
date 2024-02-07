const { User } = require("../db");
async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username = req.headers.username
    const password = req.headers.password
    
    try {
        const user = await User.findOne({
            username,
            password,
        })
        if(user){
            
            next()
        }
        else{
            res.status(403).json({
                msg: "User doesnt exist "
            })
        }
    }catch(e){
        res.status(500).json({
            msg: "Error checking User credentials: " + e,
        });
    }
}

module.exports = userMiddleware;