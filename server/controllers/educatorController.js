import { clerkClient } from '@clerk/express';
import { v2 as cloudinary } from 'cloudinary';
import Course from '../models/Course';
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