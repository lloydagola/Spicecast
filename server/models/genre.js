const mongoose = require("mongoose");

const GenreSchema = new mongoose.Schema({
    title : {type:String, required: "true"}
});

module.exports = mongoose.model("Genre", GenreSchema);