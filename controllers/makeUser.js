import prisma from "../db/dbClient.js";

const makeUesr = async (req,resp) => {
    const { email, name } = req.body;

    try {
        const createdUser = await prisma.user.create({
            data: {
              email: email,
              name: name
            },
          });

        const data = {
            success: true,
            message: "user created in the database successfully",
            data: createdUser
        }

        resp.status(200).json(data)        

    } catch (error) {
        console.log("Cannot create the user in the database.", error);
        const data2 = {
            success: "false",
            message: "cannot create the user in the database",
            data: error
        };
        resp.status(500).json(data2)
    }
}

export default makeUesr;