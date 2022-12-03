const mongoose = require("mongoose"); 


const TracksScheme = mongoose.Schema({
    url:{
        type: String,
    }, 
    

  
},{
    timestamps: false, 
    versionKey: false, 
}); 

module.exports = mongoose.model("tracks", TracksScheme); 