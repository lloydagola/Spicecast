const express = require("express");
const episode = require("../models/episode");
const podcast = require("../models/podcast");

const router = express.Router();

router.get("/",(req, res) => {
    episode.find().populate('podcast', 'title').then(allEpsiodes => {
        res.status(200).send(allEpsiodes)    

    })
    .catch(error => {
        console.log(error);
        
        res.status(400).send({error});
    })
});

router.post("/", (req, res) => {    
    if(!req.body.podcast){
        res.status(400).send("podcast is required...");
    }

    podcast.findById(req.body.podcast)
    .then(podcast => {
        new episode({...req.body}).save()
        .then(savedEpisode => {             
            podcast.episodes = [...podcast.episodes, savedEpisode._id];
            podcast.save()
            .then(savedPodcast => res.status(200).send(savedEpisode))
            .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error))
    })
    
});

module.exports = router;