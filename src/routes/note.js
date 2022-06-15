const express = require('express');

const Note = require('../controllers/note');

var router = express.Router();

router.post('/save', Note.saveNote);
router.get('/getnotes', Note.getNotes);
router.delete('/delete/:id', Note.deleteNote);

module.exports = router;
