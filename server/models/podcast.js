const express = require("express");
const mongoose = require("mongoose");

const podcastSchema = new mongoose.Schema({
    title : {type: String, required: true},
    hosts : {type:Array, required:true, default:["Untitled Presenter"]},
    guests: {type:Array},
    episodes: {type:Array, required:true, default:[]},
    genre:{type:String, default:"TalkShow"},
    tags:{type:Array},
    thumbnail: {type:String, required:true, default:"./public/images/no-image.png"},
    playCount: {type:Number, default:0},
    likes : {type:Number, default:0}
});

podcastSchema.methods.findSimilar = function(callback){
    return this.model("Podcast").find({genre:this.genres}, callback)
}

podcastSchema.methods.getEpisodes = function(callback){       
    return this.episodes;
}

module.exports = mongoose.model("Podcast", podcastSchema);