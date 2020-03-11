const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hostSchema = new Schema({
    title    : {type: String, required:true},
    thumbnail: {type:String, required:true, default:"images/user.png"},
    podcasts: [{type:Schema.Types.ObjectId, ref:"Podcast"}]
});

module.exports = mongoose.model("Host", hostSchema);