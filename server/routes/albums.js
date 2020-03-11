const express = require("express");
const {check, validationResult} = require('express-validator');
const albums = require("../models/album");

const router = express.Router();

router.get('/', (req, res) => {
    albums
    .find()
    .populate("tracks")
    .populate("contributingArtists",["title", "thumbnail"])
    .then(podcasts => res.status(200).send(podcasts))
    .catch(error => res.status(400).send(error));   
});

router.get("/:_id", (req, res) => {
    console.log(req.params._id);

    albums
    .findById(req.params._id)
    .populate("tracks")
    .populate("contributingArtists",["title", "thumbnail"])
    .then(albums => {
        res.status(200).send(albums);
    })
    
})

router.post("/", (req, res) => {

    if(!req.body.title || !req.body.contributingArtists || !req.body.year){
        res.status(400).send({error: "title, contributingArtists and year are all required"})
        return;
    }

    const newPodcast = new albums(req.body)
    
    newPodcast
    .save()
    .then(savedPodcast => res.status(200).send(savedPodcast))
    .catch(error => res.status(400).send({error}))
});

router.put("/:_id", (req, res) => {
        
    if(req.params._id && req.body.attribute && req.body.value){
       
            albums
            .findByIdAndUpdate(req.params._id, {[req.body.attribute] : req.body.value})
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error));
       
    }
    else res.status(400).send({error: "id, attribute and it's corresponding value is required!"})
});

router.delete("/", (req, res) => {
    albums
    .deleteMany()
    .then(() => res.status(200).send())
    .catch(error => this.status(400).send())
});




   

module.exports = router;