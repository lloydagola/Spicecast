const mongoose = require("mongoose");

const albumSchema = new mongoose.Schema({
    title : {type: String, required: true},
    contributingArtists : [{type:mongoose.Schema.Types.ObjectId, ref:'ContributingArtists', required:true}],
    tracks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Track'}],
    genre:{type:Array, default:["pop"]},
    tags:{type:Array},
    year: {type:Number, required: true},
    thumbnail: {type:String, required:true, default:"images/no-image.jpg"},
});

albumSchema.methods.findSimilar = function(callback){
    return this.model("Album").find({genre:this.genres}, callback)
}

albumSchema.methods.getTracks = function(callback){       
    return this.tracks;
}

module.exports = mongoose.model("Album", albumSchema);