// Middleware for handling auth
const {Admin} =  require('../db')
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers.username
    const password = req.headers.password
    try {
        const admin = await Admin.findOne({
            username,
            password,
        })
        if(admin){
            next()
        }
        else{
            res.status(403).json({
                msg: "Admin doesnt exist "
            })
        }
    }catch(e){
        res.status(500).json({
            msg: "Error checking admin credentials: " + e,
        });
    }
    
}

module.exports = adminMiddleware;