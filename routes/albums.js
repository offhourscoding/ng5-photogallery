const express = require('express');
const router = express.Router();

const Album = require('../models/album');
const Picture = require('../models/picture');

/**
 * Test Route
 */
router.get('/test', (req, res, next) => {
    res.send('Hello, Friend!');
});

//// GETs ////

/**
 * Get names and descriptions of all photo galleries
 */
router.get('/', (req, res, next) => {
    Album.getAll((err, data) => {
        if (err) {
            return res.json({ error: err });
        }
        res.json({ albums: data });
    });
});

/**
 * Get name, description, and photo IDs of a spesific album
 */
router.get('/:id', (req, res, next) => {
    Album.get(req.params.id, (err, data) => {
        if (err) {
            return res.json({ success: false, error: err });
        }
        Picture.getIds(data._id, (err, pictures) => {
            if (err) {
                return res.json({ success: false, error: err });
            }
            // Add the photo IDs to the returned data from mongo
            // This is why we use lean in our query statement
            data.pictures = [];
            if (pictures) {
                for (let i = 0; i < pictures.length; i++) {
                    data.pictures.push(pictures[i]._id);
                }
            }
            return res.json({ success: true, album: data });
        });
    });
});

//// POSTs ////

/**
 * Create new photo album
 */
router.post('/', (req, res, next) => {
    const newAlbum = new Album({
        name: req.body.name,
        description: req.body.description
    });

    Album.add(newAlbum, (err, data) => {
        if (err) {
            return res.json({ error: err });
        }

        res.json({ album: data });
    });
});


//// PUT ////

/**
 * Update photo album based off album ID
 */
router.put('/:id', (req, res, next) => {
    Album.get(req.params.id, (err, album) => {
        if (err || !album) {
            return res.json({ success: false, error: err });
        }

        if (req.body.name) {
            album.name = req.body.name;
        }
        if (req.body.description) {
            album.description = req.body.description;
        }

        Album.edit(album, (err, data) => {
            if (err) {
                return res.json({ success: false, error: err });
            }
            res.json({ success: true, album: data });
        });
    });
});

//// DELETE ////

/**
 * Delete photo album based off album ID
 */
router.delete('/:id', (req, res, next) => {
    const albumId = req.params.id;

    // First, remove all photos in album
    Picture.getIds(albumId, (err, pictures) => {
        if (err) {
            return res.json({ success: false, error: err });
        }
        for (let i = 0; i < pictures.length; i++) {
            Picture.deleteById(pictures[i]._id, (err) => {
                if (err) {
                    return res.json({ success: false, error: err });
                }
            });
        }

        // Second, remove the album itself.
        Album.remove(req.params.id, (err, data) => {
            if (err) {
                return res.json({ success: false, error: err });
            }
            res.json({ success: true, data: data });
        });
    });
});

module.exports = router;
