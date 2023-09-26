const mongoose = require("mongoose")


const userformSchema = mongoose.Schema({
    email:{type:String, required:true},
    phone:{type:String, required:true},
    dob:{type:String, required:true}
},{
    versionKey:false
})

const userformmodel = mongoose.model("formdata", userformSchema)

module.exports = {
    userformmodel
}