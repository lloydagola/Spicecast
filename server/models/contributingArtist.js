const mongoose = require("mongoose");

const contributingArtistSchema = new mongoose.Schema({
    title:{type:String, default: "Untitled Artist", required:true},
    albums: [{type:mongoose.Schema.Types.ObjectId, ref:"Album"}],
    thumbnail: {type:String, default:"images/user.png", required:true}
})

module.exports = mongoose.model('ContributingArtists', contributingArtistSchema);