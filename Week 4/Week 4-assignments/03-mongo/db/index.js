const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://SahilThadani:Sahil2336@cluster0.wqrxhks.mongodb.net/100xCourse');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username:String,
    password:String,

});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username:String,
    password:String,
    purchesedCourses: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title:String,
    description:String,
    imageLink:String,
    price:Number,
    AdminId:String,
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}