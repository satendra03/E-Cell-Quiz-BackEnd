import prisma from "../db/dbClient.js";

const checkUser = async (req, resp) => {
    const { email } = req.body;

    try {
        const existingUser = await prisma.user.findUnique({
            where: { email: email },
        });

        const data = {
            success: true,
            message: "searched for user in the database",
            data: existingUser
        }
        
        resp.status(200).json(data)        

    } catch (error) {
        console.log("Cannot check for the user in the database.", error);
        const data2 = {
            success: "false",
            message: "cannot check for the user in the database",
            data: error
        };
        resp.status(500).json(data2)
    }

}

export default checkUser