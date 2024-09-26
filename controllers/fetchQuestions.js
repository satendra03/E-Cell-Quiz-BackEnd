import prisma from "../db/dbClient.js";

const fetchQuestions = async (req, resp) => {
    try {
        // Fetch all questions from the database
        const questions = await prisma.questions.findMany();

        const data = {
            success: true,
            message: "questions fetched from database",
            data: questions
        }

        // Return the questions in the response
        resp.status(200).json(data);
        
    } catch (error) {
        console.error("Error fetching questions:", error);
        
        // Handle any potential errors
        resp.status(500).json({ 
            message: "Internal Server Error", error: error.message, 
            success: false
        });
    }
}

export default fetchQuestions;