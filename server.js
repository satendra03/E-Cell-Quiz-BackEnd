// modules imports 
import express from "express";
import dotenv from "dotenv";
import fetchQuestions from "./controllers/fetchQuestions.js";
import cors from "cors";
import saveMarks from "./controllers/saveMarks.js";
import checkUser from "./controllers/checkUser.js";
import makeUser from "./controllers/makeUser.js";

// modules initialization
const app = express();
dotenv.config();


// fetching environment variables values    
const port = process.env.PORT || 7070;

// const domain = process.env.FRONTEND_URL; // frontend domain
const domain = "http://localhost:3000"; // frontend domain (make sure no trailing slash)

// handling cross origin resource sharing
const corsOptions = {
    origin: domain,
    credentials: true,
    methods: 'GET, POST, PUT, DELETE', // Allowed methods
    allowedHeaders: ['Content-Type'], // Allowed headers
};

// Use CORS middleware with the defined options
app.use(cors(corsOptions));
app.use(express.json());

// assigning backend server a port
app.listen(port, () => {
    console.log(`Server started successfully at port: ${port}`);
});

// API's
// demo api
app.get('/', (req, res) => {
    res.json({ message: 'Hello from ECELL E-Quest quiz server.' });
});

// get questions
app.get("/get-questions", fetchQuestions);

// save marks
app.post("/save-marks", saveMarks);

// check user 
app.post("/check-user", checkUser);

// making user profile in database
app.post("/make-user-profile", makeUser);
