import cors from 'cors';
import express from 'express';
import 'dotenv/config';
import connectDb from './configs/mongodb.js';
import { clerkWebhooks } from './controllers/webHook.js';
import educatorRouter from './routes/educatorRoute.js';
import { clerkMiddleware } from '@clerk/express';
import connectCloudinary from './configs/cloudinary.js';

//Initialize Express app and connect to MongoDB
const app = express();

//Connect to Database
await connectDb();
await connectCloudinary();
//Port configuration
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON requests
app.use(cors());
app.use(clerkMiddleware());

//Route for the home page
app.get('/', (req, res) => {    
    res.send('Welcome to the Express server!');
});
app.post('/clerk', express.json(), clerkWebhooks);
app.use('/api/educator', express.json(), educatorRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});