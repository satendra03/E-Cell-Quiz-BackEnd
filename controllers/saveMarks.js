import prisma from "../db/dbClient.js";

const saveMarks = async (req,resp) => {
    const { email, marks } = req.body;
    
    try {
        const user = await prisma.user.update({
            where: { email: email },
            data: { marks: marks },
        });
        console.log(" Marks updated successfully in the database : ", user)
        const data = {
            success: true,
            message: "Marks saved in the database successfully",
            data: user
        }
        resp.status(200).json(data)
    } catch (error) {
        console.log("Cannot update marks in the database.", error);
        const data2 = {
            success: false,
            message: "Cannot save marks in the database",
            data: error
        }

        resp.status(500).json(data2)
    }
}

export default saveMarks