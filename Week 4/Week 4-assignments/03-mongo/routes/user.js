const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const z = require('zod');

// Define a schema for request body validation using zod
const UersSignupSchema = z.object({
    username: z.string().min(3),
    password: z.string().min(6),
});


// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const {username,password} = UersSignupSchema.parse(req.body);

    //checking if user is already exists
    const IsUserExits = await User.findOne({
        username,
       
     })
     if(!IsUserExits){
        await User.create({
            username,
            password,
        })
        res.json({
            message: 'User created successfully'
        })
     }else{
        res.json({
            message: 'User already exists'
        })
     }
});

router.get('/courses',async (req, res) => {
    // Implement listing all courses logic
    const allCourses = await Course.find({})
    if(allCourses.length > 0){
        res.json({
            AllCourses:allCourses
        })
    }else{
        res.json({
            message:"Not Found any coureses published"
        })
    }
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;
    const updated =  await User.updateOne({
        username
    },{
        "$push":{
            purchesedCourses: courseId
        }
    }
    )
    if(updated){
        res.json({
            message: "Purchase complete!"
        })
    }else{
        res.json({
            message: "due to some error transection failed"
        })
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    try {
        // Implement fetching purchased courses logic
        const user = await User.findOne({
            username: req.headers.username
        });

        if (user) {
            const courses = await Course.find({
                _id: {
                    "$in": user.purchesedCourses
                }
            });
        
            res.json({
                courses: courses
            })
        } else {
            res.status(404).json({
                message: 'User not found',
            });
        }
    } catch (error) {
        // Handle any errors that may occur during the database query
        res.status(500).json({
            msg: "Error fetching purchased courses: " + error,
        });
    }
});


module.exports = router