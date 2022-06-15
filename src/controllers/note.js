var Note = require('../models/note');

var controller = {
    saveNote: (req, res) => {
        var params = req.body;
        var note = new Note();
        note.author = params.author;
        note.title = params.title;
        note.note = params.note;

        note.save((error, noteSaved) => {
            if(error || !noteSaved){
                return res.status(404).send({
                    status: 'Error',
                    message: 'No ha sido posible guardar la nota'
                })
            }

            return res.status(200).send({
                status: 'success',
                message: 'Nota guardada con éxito',
                noteSaved
            })
        })

    },

    getNotes: (req, res) => {
        var query = Note.find({});

        query.sort('-date').exec((error, notes) => {
            if(error){
                return res.status(404).send({
                    status: 'Error',
                    message: 'No ha sido posible obtener las notas'
                })
            }

            if(!notes){
                return res.status(400).send({
                    status: 'Error',
                    message: 'No existen notas que mostrar'
                })
            }

            return res.status(200).send({
                status: 'success',
                notes
            })
        })

    },

    deleteNote: (req, res) => {
        const id = req.params.id;
        Note.findOneAndDelete({_id: id}, (error, noteRemoved) =>{
            if(error || !noteRemoved){
                return res.status(404).send({
                    status: 'Error',
                    message: 'No ha sido posible eliminar la nota'
                })
            }
            return res.status(200).send({
                status: "success",
                message: "Nota eliminada con éxito",
                noteRemoved
            })

        })
    }
}

module.exports = controller; 