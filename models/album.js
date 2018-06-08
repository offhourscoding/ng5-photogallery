const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

const AlbumSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    pictures: [{
        data: Buffer,
        contentType: String,
    }]
});

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
    Album.findById(id, callback);
};

module.exports.getAll = (callback) => {
    Album.find()
        .select('-pictures')
        .exec(callback);
};