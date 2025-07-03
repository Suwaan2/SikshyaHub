import { clerkClient, User } from '@clerk/express';
import { v2 as cloudinary } from 'cloudinary';
import Course from '../models/Course.js';
import { Purchase } from '../models/purchase.js';
// API controller function to update user role to educator
// This function updates the user's role to 'educator' in their public metadata
export const updateRoleToEducator = async (req, res) => {
    try {
        const userId = req.auth.userId;

        await clerkClient.users.updateUserMetadata(userId, {
            publicMetadata: {
                role: 'educator'
            }
        })
        res.json({ success: true, message: "User role updated to educator || You can publish the course now" });
    } catch (error) {
        res.json({
            success: false,
            error: "An error occurred while updating the user role",
            message: error.message
        });
    }
}

//Adding new course

export const addCourse = async (req, res) =>{
    try {
        const { courseData } = req.body
        const imageFile = req.file
        const educatorId = req.auth.userId

        if(!imageFile){
            return res.json({success:false, message:'Thumbnail Not attached'})
        }
        const parsedCourseData = await JSON.parse(courseData)
        parsedCourseData.educator = educatorId
        const newCourse = await Course.create(parsedCourseData)
        const imageUpload = await cloudinary.uploader.upload(imageFile.path)
        newCourse.courseThumbnail = imageUpload.secure_url
        await newCourse.save()

        res.json({success:true, message:'Course Added Sucessfully'})
    } catch (error) {
        res.json({success:false, message:error.message})
    }
}
//Get Educator Courses 

export const getEducatorCourses = async(req, res)=>{
    try {
        const educator = req.auth.userId

        const course = await Course.find({educator})
        res.json({success:true, course})
    } catch (error) {
        res.json({success:false, message:error.message})
    }
}

//Get Educator Dashboard 

export const educatorDashboardData = async()=>{
    try {
        const educator = req.auth.userId;
        const courses = await Course.find({educator})
        const totalCourses = courses.length;
        //Getting all the courses with ids
        const courseIds = courses.map(course => course._id)
        //Calculating the total earning 
        const purchase = await Purchase.find({
            courseId:{$in: courseIds},
            status: 'completed'
        });

        const totalEarning = purchase.reduce((sum, purchase)=> sum + purchase.amount, 0);

        //Collect unique enrolled student id with their course title

        const enrolledStudentData = [];
        for(const course of courses){
            const students = await User.find({
                _id: {$in: course.enrolledStudents}
            }, 'name imageUrl')
        students.forEach(student=>{
            enrolledStudentData.push({
                courseTitle: course.courseTitle,
                student
            })
        })    
        }
        res.json({success:true, dashboardData:{
            totalEarning, enrolledStudentData, totalCourses
        }})
    } catch (error) {
        res.json({success:false, message:error.message})
    }
}

//Getting Enrolled Student data with purchase data