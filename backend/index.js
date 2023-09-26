const express = require("express")
const { connection } = require("./Utils/db")
const { userRouter } = require("./routes/user.route")
const { formRouter } = require("./routes/userform.route")
require('dotenv').config()
const cors = require('cors')

const app = express()


app.use(cors())
app.use(express.json())
app.use("/", userRouter)
app.use("/home",formRouter)


app.listen(process.env.port,async() => {
    try{
        await connection
        console.log('database Connection Successful')
    }
    catch{
        console.log('database Connection failed')
    }
    console.log(`Server is running on the port ${process.env.port}`)
})