const express = require("express");
const router = express.Router();

const genre = require("../models/genre");


router.get("/", (req, res) => {
    genre
    .find()
    .then(genres => res.status(200).send(genres))
    .catch(error => res.status(400).send(error))
});

router.post("/", (req, res) => {
    if(!req.body.title){
        res.status(200).send("genre title is required!");
        return;
    }

    new genre({...req.body})
    .save()
    .then(savedGenre => res.status(200).send(savedGenre))
    .catch(error => res.status(400).send(error));
});

module.exports = router;