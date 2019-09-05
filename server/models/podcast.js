const express = require("express");

const podcastSchema = new express.Schema({
    title : {type: String, required: true, default: "Untitled Podcast"},
    presenters : {type:Array, required:true, default:["Untitled Presenter"]},
    episodes: {type:Array},
    tags:{type:Array},
    thumbnail: {type:String},
    playCount: {type:Number, default:0},
    likes : {type:Number, default:0}
});

module.exports = express.model("Podcast", podcastSchema);