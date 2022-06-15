const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var NoteSchema = new Schema({
    author: String,
    title: String,
    note: String,
    date: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Note', NoteSchema)