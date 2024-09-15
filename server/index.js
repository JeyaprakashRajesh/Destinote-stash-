import express from "express"
import cors from "cors"
import axios from "axios"

import { loginMiddleware } from "./middlewares/middleware"

const app = express()
app.use(express.json())
app.use(cors(   ))
const PORT = 8000


try {
    app.listen(PORT, () => {
        console.log("Server Running on port", PORT)
    })
}catch(err)  {
    console.log("error listening to port ", PORT, " : ", err)
}

 app.post("/login" , loginMiddleware , (req,res) => {

 }) 