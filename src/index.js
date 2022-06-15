//1
const express = require('express')
//1
const path = require('path');
//1
const app = express()
//2
const mongoose = require('mongoose');

//3
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const noteRoutes = require('./routes/note');

//2
mongoose.Promise = global.Promise;
const urlDbb = "mongodb+srv://jorge:codenautas@cluster0.poftt.mongodb.net/?retryWrites=true&w=majority"
//1
const port = 3000;
app.use(express.static(path.join(__dirname, 'public')))

//3 Cargamos los archivos de ruta
app.use('/api', noteRoutes);

//1 Lanzamos la aplicación a través del puerto 3000

//2
mongoose.connect(urlDbb, {useNewUrlParser: true}, () =>{
    console.log('Conexión a la bdd realizada con éxito')
    app.listen(port, ()=>{
        console.log('App lanzada en el puerto ' + port)
    })
})

