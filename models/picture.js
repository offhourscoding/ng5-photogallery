const mongoose = require('mongoose');
const gridfs = require('mongoose-gridfs');
const fs = require('fs');

// Link gridfs to mongoose
gridfs.mongo = mongoose.mongo;

// Tell gridfs the mongo connection and which collection to save the pictures
const { model: Pictures } = gridfs({
    collection: 'pictures',
    model: 'Picture',
    mongooseConnection: mongoose.connection
});

/**
 * getIds
 * Retrieve all picture ids for a given album
 * @param albumId(mongoId) Which album to search
 * @param callback(function)
 */
module.exports.getIds = (albumId, callback) => {
    Pictures.find({ aliases: albumId })
        .select('_id')
        .exec(callback);
};

/**
 * getById
 * Retrieve a picture
 * @param pictureId(mongoId) Which picture to return
 * @param callback(function)
 */
module.exports.getById = (pictureId, callback) => {
    const pictureStream = Pictures.readById(pictureId);

    pictureStream.on('error', (err) => {
        callback(err, null);
    });
    return pictureStream;
};

/**
 * getContentType
 * Retrive content type for a given picture
 * @param pictureId(mongoId) picture's id to query
 * @param callback(function)
 */
module.exports.getContentType = (pictureId, callback) => {
    Pictures.findById(pictureId, (err, metadata) => {
        if (err) {
            console.log('Metadata Error:', err);
            callback(err, 'image/jpeg');
        }
        callback(null, metadata.contentType);
    });
};
/**
 * deleteById
 * Remove picture from database
 * @param pictureId(mongoId) picture's id to remove
 * @param callback(function)
 */
module.exports.deleteById = (pictureId, callback) => {
    Pictures.unlinkById(pictureId, callback);
};

/**
 * add
 * Add picture to database
 * @param file(obj) picture to add
 * @param albumId(mongoId) Album to add picture to
 */
module.exports.add = (file, albumId, callback) => {
    const readStream = fs.createReadStream(file.path);
    // We are cheating by using the aliases field to store the album id
    const options = ({ filename: file.filename, contentType: file.mimetype, aliases: [albumId] });
    Pictures.write(options, readStream, callback);
};
