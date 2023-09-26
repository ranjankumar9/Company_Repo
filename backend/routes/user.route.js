const express = require("express")
const { usermodel } = require("../model/user.model")

const userRouter = express.Router()


userRouter.post("/", async(req,res) => {
    try {
        const {username} = req.body
        const user = new usermodel({username})
        await user.save()
        res.send({Msg:"Username Registered Successfully"})
    } catch (err) {
        res.send({Msg:"Invalid Username"})
    }
})

module.exports = {
    userRouter
}