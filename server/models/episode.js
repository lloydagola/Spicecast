const mongoose = require("mongoose");

const episodeSchema = new mongoose.Schema({
    title : {required:true, default: "Untitled", type:String},
    podcast : {required:true, type: mongoose.Schema.Types.ObjectId, ref:'Podcast'},
    path:{required:true, default: "http://localhost:3000/audio/bubbles.mp3", type:String}
})

module.exports = mongoose.model("Episode", episodeSchema);