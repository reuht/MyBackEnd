const mongoose = require("mongoose"); 


const userScheme = mongoose.Schema({

    name: {
        type: String, 
    },
    age: {
        type: Number, 
    },
    email: {
        type: String,
        unique: true,
    }, 
    pass: {
        type: String,
    },
    roles:{
        type:["user", "admin"],
        default: "user", 
    }
},{
    timestamps: false, 
    versionKey: false, 
}); 

module.exports = mongoose.model("users", userScheme); 