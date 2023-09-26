const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    username:{type:String, required:true}
},{
    VersionKey:false,
})

const usermodel = mongoose.model("home", UserSchema)

module.exports = {
    usermodel
}