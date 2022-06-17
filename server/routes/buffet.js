const express = require('express');
const router = express.Router();
const multer = require("multer");
const jsmediatags = require("jsmediatags");
const contributingArtist = require("../models/contributingArtist");
const album = require("../models/album");
const track = require("../models/track");

/* GET home page. */
router.get('/pen15', function(req, res, next) {
    console.log("pen15...");
    res.status(200).send("pen15");
  });

router.post("/test/:artist/:album", (req, res) => {

    const track_path = `./public/music/${req.params.artist}/${req.params.album}/`;
    
    const storage =   multer.diskStorage({
        destination: (req, file, callback) => callback(null, track_path),
        filename: (req, file, callback) => callback(null, file.originalname)
    });
      
    const upload = multer({ storage : storage}).array('file',2);
    
    upload(req,res,function(err) {
        if(err) return res.end("Error uploading file.");  

        let _contributingArtist, _album, _track, _song;

        req.files.map(
            file => readTrackTags(track_path+file.originalname)
                    .then(song => {
                        if (!song) throw new Error("couldn't read song...");
                        
                        _song = song;
                        return contributingArtist.findOne({title:_song.artist});
                    })
                    .then(artist => {
                        if(!artist) return new contributingArtist({title : _song.artist}).save();

                        return artist;                        
                    })
                    .then(artist => {
                        if(!artist) throw new Error("artist doesn't exist and couldn't create one");
                        
                        _contributingArtist = artist;
                        return album.findOne({title:_song.album});                        
                    })
                    .then(album => {
                        if(!album) return new album({title:_song.album, contributingArtists : [_contributingArtist._id]}).save()

                        return album;
                    })
                    .then(album => {
                        if(!album) throw new Error("album doesn't exist and couldn't create one");

                        _album = album;

                        return track.findOne({title: _song.title})
                    })
                    .then(track => {
                        if (!track) return new track({
                                title:_song.title,
                                track:parseInt(_song.track),
                                contributingArtists: [_contributingArtist._id],
                                album : _album._id,
                                path : _song.path
                            })

                        return track;
                    })
                    .then(track => {
                        if (!track) throw new Error("track doesn't exist and couldn't create one") ;

                        console.log('track saved', track);
                        
                    })
                    .catch(error =>console.log('error', error))
        ); 
        
        res.end("Files uploaded");
    });
    
});
router.post("/:artist/:album", (req, res) => {

    if(!req.params.artist || !req.params.album) return res.status(400).send("Artist and album are both required!")

    const newArtist = new contributingArtist({title: req.params.artist});
    newArtist
    .save()
    .then(savedArtist => console.log("artist saved,", savedArtist))
    .catch(error => res.status(400).send(error));

    const newAlbum = new album({title: req.params.album, contributingArtists : [newArtist._id]});
    newArtist
    .save()
    .then(savedAlbum => console.log("album saved,",savedAlbum));
    
    upload(req,res,function(err) {
        if(err) {
            return res.end("Error uploading file.");
        }

        track.insertMany(req.files)
        console.log('req.file',req.files);
        
        res.end("File is uploaded");
    });
    
});

const readTrackTags = path => new Promise((resolve, reject) => 
        jsmediatags.read(path, { 
            onSuccess: tag => {
                console.log("success", tag);
                
               const song = {
                    artist:tag.tags.artist,
                    title:tag.tags.title,
                    album:tag.tags.album,
                    year:tag.tags.year,
                    track:tag.tags.track,
                    genre:tag.tags.genre,
                    path
                };
                resolve(song);        
            },
            onError: error => reject(error)
        })
);


module.exports = router;