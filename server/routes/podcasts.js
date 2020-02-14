const express = require("express");
const {check, validationResult} = require('express-validator');
const Podcast = require("../models/podcast");

const router = express.Router();

router.get('/', (request, response) => {
    Podcast
    .find()
    .populate("episodes")
    .then(podcasts => response.status(200).send(podcasts))
    .catch(error => response.status(400).send(error));   
});

router.get("/:_id", (request, response) => {
    console.log(request.params._id);

    Podcast
    .findById(request.params._id)
    .populate("episodes")
    .then(podcast => {
        response.status(200).send(podcast);
    })
    
})

router.post("/", (request, response) => {

    const newPodcast = new Podcast(request.body)
    
    newPodcast
    .save()
    .then(savedPodcast => response.status(200).send(savedPodcast))
    .catch(error => response.status(400).send({error}))
});

router.put("/:_id", (request, response) => {
        
    if(request.params._id && request.body.attribute && request.body.value){
       
            Podcast
            .findByIdAndUpdate(request.params._id, {[request.body.attribute] : request.body.value})
            .then(result => response.status(200).send(result))
            .catch(error => response.status(400).send(error));
       
    }
    else response.status(400).send({error: "attribute and it's corresponding value is required!"})
});


   

module.exports = router;