const express = require("express")
const { userformmodel } = require("../model/userform.model")

const formRouter = express.Router()


formRouter.post("/form", async(req,res) => {
    try {
        const {email,phone,dob} = req.body
        const userf = new userformmodel({email,phone,dob})
        await userf.save()
        res.send({Msg:"userform Submitted Successfully"})
        
    } catch (err) {
        res.send({Msg:"please check form details"})
    }
})

formRouter.get("/form/get", async(req,res) => {
    try {
        const userData = await userformmodel.find();

        res.send({form_data:userData,Msg:"userform data getting Successfully"})
        
    } catch (err) {
        res.send({Msg:"getting data failed"})
    }
})

formRouter.patch("/form/update/:id", async(req,res) => {
    try {
        const { id } = req.params;
        const payload = req.body
        await userformmodel.findByIdAndUpdate({ _id: id }, payload);
        res.send({Msg:"Form modifying Successfully"})
    } catch (err) {
        res.send({Msg:"Form Modifying failed"})
    }
})
module.exports = {
    formRouter
}