import mongoose, { mongo } from "mongoose";

const lectureSchema = new mongoose.Schema({
    lectureId:{type:String, required:true},
    lectureTitle:{type:String, required:true},
    lectureDuration:{type:Number, required:true},
    lectureUrl:{type:String, required:true},
    isPreviewFree:{type:Boolean, required:true},
    lectureOrder:{type:Number, required:true}
}, {_id:false})

const chapterSchema = new mongoose.Schema({
    chapterId:{type:String, required:true},
    chapterOrder:{type:Number, required:true},
    chapterTitle:{type:String, required:true},
    chapterContent:[lectureSchema]
}, {_id:false})

const courseSchema = new mongoose.Schema({
    courseTitle:{
        type:String,
        required:true
    },
    courseDescription:{
        type:String,
        required:true
    },
     courseThumbnail:{
        type:String,
        required:true
    },
     coursePrice:{
        type:Number,
        required:true
    },
     isPublished:{
        type:Boolean,
        default:true
    },
    discount:{
        type:Number,
        required:true,
        min:0,
        max:100
    },
    courseContent:[chapterSchema],
    courseRating:[{
        userID:{type:String},
        rating:{type:Number,min:1,max:5}
    }],
    educator:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    enrolledStudents:[
        {type:mongoose.Schema.Types.ObjectId,
            ref:'User'
         }
    ]
    
},{timestamps:true})

const Course = mongoose.model('Course', courseSchema)

export default Course;