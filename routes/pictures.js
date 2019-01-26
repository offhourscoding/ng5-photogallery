const express = require('express');
const router = express.Router();
const fs = require('fs');
const multer = require('multer');
const mongoose = require('mongoose');
const Picture = require('../models/picture');

var filename = '';
const Album = require('../models/album');

// Multer Config //
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

//// GETs ////

/**
 * Get photo ID within a spesific album
 * Used for non gridfs logic
 */
router.get('/:album_id/:photo_id', (req, res, next) => {
    Album.getPicture(req.params.album_id, (err, pictures) => {
        if (err) {
            return res.json({ success: false, error: err });
        }
        console.log('Photo ID:', req.params.photo_id);
        // Get all pictures and parse out needed picture
        // Note: MongoDB does not allow to query nested arrays
        pictures.pictures.findIndex((element, index, array) => {
            if (req.params.photo_id.toString() === element._id.toString()) {
                const base64Image = new Buffer(element.data, 'base64');
                res.contentType(element.contentType);
                res.send(base64Image);
            }
        });
    });
});

/**
 * Get picture based off picture ID
 * We return the stream straight to the browser
 */
router.get('/:picture_id', (req, res, next) => {
    const pictureId = mongoose.Types.ObjectId(req.params.picture_id);

    Picture.getContentType(pictureId, (err, contentType) => {
        res.contentType(contentType);

        // Response object is a stream, so we pass the data returned 
        // from gridfs straight back to the browser
        Picture.getById(pictureId).pipe(res);
    });
});

//// POSTs ////
/**
 * Upload single picture and save it to the database not using gridFS
 */
// router.post('/', upload.single('picture'), (req, res, next) => {
//     // Save image to DB
//     Album.get(req.body.album, (err, album) => {
//         if (err) return res.json({ success: false, error: err });
//         const pic = { data: fs.readFileSync(req.file.path), contentType: req.file.mimetype };
//         album.pictures.push(pic);
//         console.log('Album:', album);
//         Album.edit(album, (err, data) => {
//             if (err) return res.json({ success: false, error: err });
//             fs.unlink(req.file.path, (err) => {
//                 if (err) {
//                     console.log('Could not delete file from disk');
//                 }
//                 return res.json({ success: true, data: data });
//             });
//         });
//     });
// });

/**
 * Upload picture and add it to our gridFS model
 */
router.post('/', upload.single('picture'), (req, res, next) => {
    Picture.add(req.file, req.body.album, (err, file) => {
        if (err) {
            console.log('Error:', err);
            return res.json({ success: false, error: err });
        }
        // Remove picture from disk
        fs.unlink(req.file.path, (err) => {
            if (err) {
                console.log('Cleanup Error:', err);
                return res.json({ success: false, error: err });
            }
            return res.json({ success: true });
        });
    });
});

//// DELETE ////

/**
 * Delete picture based of picture ID
 */
router.delete('/:picture_id', (req, res, next) => {
    const pictureId = mongoose.Types.ObjectId(req.params.picture_id);
    Picture.deleteById(pictureId, (err) => {
        if (err) {
            return res.json({ success: false, error: err });
        }
        return res.json({ success: true });
    });
});

module.exports = router;
