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

const domain = process.env.FRONTEND_URL; // frontend domain
// const domain = "http://localhost:3000"; // frontend domain (make sure no trailing slash)

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
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>ECELL E-Quest Quiz Backend</title>
            <style>
                body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    background: linear-gradient(135deg, #f0f4f8, #d9e2ec);
                    color: #333;
                    margin: 0;
                    padding: 2rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    min-height: 100vh;
                    text-align: center;
                }
                h1 {
                    color: #0077cc;
                    font-size: 2.5rem;
                    margin-bottom: 0.5rem;
                }
                h2 {
                    color: #555;
                    font-weight: normal;
                    margin-bottom: 2rem;
                }
                p {
                    max-width: 600px;
                    font-size: 1.1rem;
                    line-height: 1.6;
                    margin-bottom: 2rem;
                }
                .credits {
                    font-size: 0.95rem;
                    color: #777;
                }
                .highlight {
                    background-color: #e0f2ff;
                    padding: 0.3rem 0.6rem;
                    border-radius: 5px;
                    font-family: monospace;
                }
                footer {
                    margin-top: 3rem;
                    font-size: 0.9rem;
                    color: #666;
                }
            </style>
        </head>
        <body>
            <h1>🚀 ECELL E-Quest Backend</h1>
            <h2>Quiz Server API - Live and Operational</h2>
            <p>
                Welcome to the official backend server of the <strong>ECELL E-Quest Quiz Platform</strong>.<br>
                This backend is responsible for handling quiz logic, managing users, scoring, and providing questions.
            </p>
            <p>
                Base URL: <span class="highlight">https://e-cell-quiz-backend.onrender.com/</span><br>
                Frontend Domain: <span class="highlight">${domain}</span>
            </p>
            <p class="credits">
                💡 Developed by <strong>Satendra Kumar Parteti</strong> and <strong> Akshat Singh Thakur</strong><br>
                🛠 Hosted on <strong>Render</strong>
            </p>
            <footer>
                &copy; ${new Date().getFullYear()} ECELL JEC · All rights reserved.
            </footer>
        </body>
        </html>
    `);
});


// get questions
app.get("/get-questions", fetchQuestions);

// save marks
app.post("/save-marks", saveMarks);

// check user 
app.post("/check-user", checkUser);

// making user profile in database
app.post("/make-user-profile", makeUser);
