const mongoose = require("mongoose");

const TrackSchema = new mongoose.Schema({
    title : {required:true, default: "Untitled", type:String},
    genres: [{type:mongoose.Schema.Types.ObjectId, required:true, default:[]}],
    track: {type:Number, default:1},
    contributingArtists: [{required:true, type:mongoose.Schema.Types.ObjectId, ref:"ContributingArtists"}],
    album : {required:true, type: mongoose.Schema.Types.ObjectId, ref:'Album'},
    path:{required:true, default: "http://localhost:4000/audio/bubbles.mp3", type:String},
    playCount: {type:Number, default:0},
    likes : {type:Number, default:0}
});

module.exports = mongoose.model("Track", TrackSchema);