const mongoose = require("mongoose")


const videoSchema = new mongoose.Schema({
    video:{
        type:Striing,
        required:true
    }
})

module.exports.videoSchema = videoSchema