import cors from 'cors';
import express from 'express';
import 'dotenv/config';
import connectDb from './configs/mongodb.js';

//Initialize Express app and connect to MongoDB
const app = express();

//Connect to Database
await connectDb();
//Port configuration
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON requests
app.use(cors());

//Route for the home page
app.get('/', (req, res) => {    
    res.send('Welcome to the Express server!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});