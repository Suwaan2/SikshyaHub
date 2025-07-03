import express from 'express';
import { getEducatorCourses, updateRoleToEducator } from '../controllers/educatorController.js';
import upload from '../configs/multer.js';
import { portectEducator } from '../middlewares/authMiddleware.js';

const educatorRouter = express.Router();

//Add Educator Role
educatorRouter.get('/update-role', updateRoleToEducator);
educatorRouter.post('/add-course', upload.single('image'), portectEducator)
educatorRouter.get('/courses', portectEducator, getEducatorCourses)
export default educatorRouter;