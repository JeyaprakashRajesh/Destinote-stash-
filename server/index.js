import express from "express"
import cors from "cors"
import axios from "axios"
import {jwtDecode} from 'jwt-decode';
import { loginMiddleware, verifyMiddleware } from "./middlewares/middleware.js"
import { createToken } from "./jwt/jwt.js"
import { createUser, getDetails } from "./database/mongodb.js"

const app = express() 
app.use(express.json())
app.use(cors())
const PORT = 8000


try {
    app.listen(PORT, () => {
        console.log("Server Running on port", PORT)
    })
} catch (err) {
    console.log("error listening to port ", PORT, " : ", err)
}

app.post("/login", loginMiddleware, (req, res) => {
    try {
        const email = req.body.email
        const token = createToken(email)
        res.status(200).json({ message: "login Sucessful", token: token })
    } catch (err) {
        console.log("error in axios : ", err)
    }

});

app.post("/signup", async (req, res) => {
    try {
        const { userName, email, password } = req.body
        const status = await createUser(userName, email, password)
        if (status) {
            res.status(200).json({ message: "user created sucessfully" })
        } else {
            res.status(409).json({ message: "error creating user" })
        }
    } catch (err) {
        console.log("error in axios : ", err)
    }

})

app.get("/getDetails", verifyMiddleware, async (req, res) => { 
    try {
        const header = req.headers["authorization"];
        const token = header.split(" ")[1];
        const decoded = jwtDecode(token);  
        const email = decoded.email;
        const { status, user } = await getDetails(email);
        if (status) {
            res.status(200).json({
                email : user.email,
                favorites : user.favorites,
                home : user.home,
                userName : user.userName,
                work : user.work
             });
        } else {
            res.status(409).json({ message: "Unable to retrieve details" });
        }
    } catch (err) {
        console.log("Error in /getDetails route: ", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});