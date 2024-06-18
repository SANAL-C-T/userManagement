const mongoose =require("mongoose");

require("../model/config");

const userSchema=mongoose.Schema({

    First_name: {
        type: String,
    },
    Last_name: {
        type: String,
    },
    Email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Phone: {
        type: Number,
        required: true
    },
    Deleted: {
        type: Boolean,
        default:false
    },
    isAdmin:{
        type: Boolean,
        default:false
    }
    

});

const userData = mongoose.model("user", userSchema);

module.exports = userData;