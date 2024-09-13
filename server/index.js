const express = require("express")

const app = express()
app.use(express.json)
const PORT = 8000


try {
    app.listen(PORT, () => {
        console.log("Server Running on port", PORT)
    })
}catch(err)  {
    console.log("error listening to port ", PORT, " : ", err)
}