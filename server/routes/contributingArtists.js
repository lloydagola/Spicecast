const express = require('express');
const contributingArtist = require('../models/contributingArtist');
const router = express.Router();

router.get('/', (req, res) => {
    contributingArtist
    .find()
    .populate("albums", ["title", "thumbnail"])
    .then(contributingArtist => res.status(200).send(contributingArtist))
    .catch(error => res.status(400).send({error}));
});

router.get('/:_id', (req, res) => {
    const _id = req.params._id;

    if (_id){
        contributingArtist
        .findById(_id)
        .then(artist => {
            res.status(200).send(artist)
        })
        .catch(error => res.status(400).send(error));
    }
});

router.post('/', (req, res) => {
    if(!req.body.title){
        res.status(400).send("title required")
    }
    else{
        const artist = new contributingArtist({
            title : req.body.title
        })

        artist.save()
        .then(contributingArtist => {
            res.status(200).send(contributingArtist)
        })
        .catch(error => res.status(400).send({error}));
    }
});

router.put('/:_id', (req, res) => {

    if(!req.params._id || !req.body.attribute || !req.body.value){
        res.status(400).send({error: "ID, attribute and value are all required!"})
    }
    else{
        contributingArtist
        .findByIdAndUpdate(req.params._id, {[req.body.attribute] : req.body.value})
        .then(artist => res.status(200).send(artist))
        .catch(error => res.status(400).send(error))
    }
});

router.put("/:_id/albums", (req, res) => {
    const _id = req.params._id;
    if(_id && req.body.album){
        contributingArtist
        .findByIdAndUpdate(_id, {$addToSet :{album:req.body.album}})
        .then(artist => {
            req.status(200).send(artist)
        })
        .catch(error => req.status(400).send(error))
    }
});

router.delete('/', (req, res) => {
    contributingArtist.deleteMany()
    .then(() => res.status(200).send("deleted all"))
    .catch(error => res.status(400).send(error));
});

module.exports = router;

