const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const multer = require('multer');

var filename = '';
const Album = require('../models/album');
// Multer Config //
const DIR = 'public/uploads';
// Needed when storing on disk
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/uploads');
    },
    filename: (req, file, cb) => {
        const parts = file.originalname.split('.');
        filename = parts[0] + '-' + Date.now() + '.' + parts[1]
        cb(null, filename);
    }
});
const upload = multer({ storage: storage, preservePath: true });


// TEST //
router.get('/test', (req, res, next) => {
    res.send('Hello, Friend!');
});

// GET //
router.get('/', (req, res, next) => {

});

router.get('/:id', (req, res, next) => {

});

// POST //
router.post('/', upload.single('picture'), (req, res, next) => {
    // Save image to disk
    if (!fs.exists('public/uploads/' + req.body.album)) {
        console.log('here');
        fs.mkdir('public/uploads/' + req.body.album, (err, data) => {
            fs.rename('public/uploads/' + filename, 'public/uploads/' + req.body.album + '/' + filename);
        });
    } else {
        fs.copyFile('public/uploads/' + filename, 'public/uploads/' + req.body.album, (err, data) => {
            console.log(data);
        });
    }
    return res.json({ success: true });

    // console.log('pic: ', req.file);
    // console.log('body:', req.body);
});

// PUT //
router.put('/:id', (req, res, next) => {

});

// DELETE //
router.delete('/:id', (req, res, next) => {

});

module.exports = router;