const express = require("express");
const host = require("../models/host");

const router = express.Router();

router.get("/", (req, res) => {
    host
    .find({})
    .then(hosts => res.status(200).send(hosts))
    .catch(error => res.status(400).send(error))
});

router.post("/", (req, res) => {
    if(!req.body.title){
        res.status(400).send("title is required!");
        return;
    }

    console.log("badia", req.body);

    new host({...req.body})
    .save()
    .then(host => req.status(200).send(host))
    .catch(error => res.status(400).send(error))
});

router.put("/:_id", (req, res) => {
    host
    .findByIdAndUpdate(req.params._id, {[req.body.attribute] : req.body.value})
    .then(updatedHost => res.status(200).send(updatedHost))
    .catch(error => res.status(400).send(error));
});

router.delete("/", (req, res) => {
    host
    .deleteMany()
    .then(() => res.status(200).send("deleted all hosts..."))
    .catch(error => res.status(400).send(error))

});

router.delete("/:id", (req, res) => {
    host
    .findByIdAndDelete(req.params.id)
    .then(() => res.status(400).send("host deleted..."))
    .catch(error => res.status(400).send(error))
});

module.exports = router;