const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

const AlbumSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
}, { usePushEach: true });

// AlbumSchema.toObject();

const Album = module.exports = mongoose.model('album', AlbumSchema);

module.exports.add = (newAlbum, callback) => {
    newAlbum.save(callback);
};

module.exports.edit = (album, callback) => {
    album.save(callback);
};

module.exports.remove = (id, callback) => {
    Album.findByIdAndRemove(id, callback);
};

module.exports.get = (id, callback) => {
    // We use lean so Mongo returns an JSON object instead of a mongo object
    // This is needed because we modify the return object in routes/albums.js
    Album.findById(id).lean().exec(callback);
};

module.exports.getAll = (callback) => {
    Album.find(callback)
};

module.exports.getPicture = (id, callback) => {
    // Non GridFS Way
    Album.findById(id)
        .select('pictures')
        .exec(callback);
};
