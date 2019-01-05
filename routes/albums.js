const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const multer = require('multer');

const Album = require('../models/album');
const DIR = 'public/uploads';
const upload = multer({ desc: DIR });

// Seperate file for picture operations
// router.use('/:id/pictures', require('./pictures'));

// TEST //
router.get('/test', (req, res, next) => {
    res.send('Hello, Friend!');
});

// GET //
router.get('/', (req, res, next) => {
    Album.getAll((err, data) => {
        if (err) {
            return res.json({ error: err });
        }
        res.json({ albums: data });
    });
});

router.get('/:id', (req, res, next) => {
    Album.get(req.params.id, (err, data) => {
        if (err) {
            return res.json({ success: false, error: err });
        }

        dir = path.join(__basedir, 'public', 'uploads', data._id.toString());
        fs.readdir(dir, (err, items) => {
            if (err) {
                console.log('ERROR: ', err);
            }
            res.json({ success: true, album: data, pictures: items });
        });


    });
});

// POST //
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

// router.post('/:id/pictures', upload.single('picture'), (req, res) => {

// });

// PUT //
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

// DELETE //
router.delete('/:id', (req, res, next) => {
    Album.remove(req.params.id, (err, data) => {
        if (err) {
            return res.json({ success: false, error: err });
        }
        res.json({ success: true, data: data });
    });
});

module.exports = router;