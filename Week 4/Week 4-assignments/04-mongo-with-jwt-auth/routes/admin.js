const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, User, Course } = require("../db");
const router = Router();
const z = require('zod');
const JWT_KEY = "ThorIsHero";
const jwt = require('jsonwebtoken')
const adminSignupSchema = z.object({
    username: z.string().min(3),
    password: z.string().min(6),
});

const coursesAddSchema = z.object({
    title: z.string().min(1).max(50),
    description: z.string().min(5).max(500),
    price: z.number().positive(),
    imageLink: z.string().url(),
    AdminId: z.string()
});
// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const {username,password} = adminSignupSchema.parse(req.body);
    
    //checking if user is already exists
     const IsAdminExits = await Admin.findOne({
        username,
       
     })
     if(!IsAdminExits){
        await Admin.create({
            username,
            password,
        })
        res.json({
            message: 'Admin created successfully'
        })
     }else{
        res.json({
            message: 'Admin already exists'
        })
     }
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const { username, password } =req.body
    const verifySigninUser = await Admin.find({
        username,
        password
    })

    if(verifySigninUser){
       const token = jwt.sign({username},JWT_KEY)
        res.json({
            token
        })
    }else {
        res.status(411).json({
            message: "Incorrect email and pass"
        })
    }
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const {title,description,price,imageLink,AdminId} = coursesAddSchema.parse(req.body)

    const courseCreated = await Course.create({
        title,
        description,
        price,
        imageLink,
        AdminId,
    })
    
    if(courseCreated){
        res.json({
            message:" Course Created Successfully", courseId: courseCreated._id
        })
    }else{
        res.json({
            message:" Error Course is not Created "
        })
    }
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    try {
        // Implement fetching admin data logic
        // Getting adminID from AdminDB using the provided username in request headers
        const username = req.headers.username;

        // Using findOne with a query to find the admin by username
        const adminData = await Admin.findOne({ username });

        if (adminData) {
            const AdminID = adminData._id;

            // Use AdminID directly as a query parameter
            const response = await Course.find({ AdminId: AdminID });

            if (response.length > 0) {
                res.json({
                    Courses: response,
                });
            } else {
                res.json({
                    message: "No courses by this admin",
                });
            }
        } else {
            res.status(404).json({
                message: 'Admin not found',
            });
        }
    } catch (error) {
        // Handle any errors that may occur during the database query
        res.status(500).json({
            msg: "Error fetching admin data: " + error,
        });
    }
});

module.exports = router;