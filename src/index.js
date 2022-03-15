const express = require('express');
const app = express();
const path = require('path');

// Setting PORT
app.set('port', process.env.PORT || 3000);

// Setting ejs
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));

//Middelewares

//Route
app.use(require('./routes/index'));

// Static File
app.use(express.static(path.join(__dirname,'public')));
// server
app.listen(app.get('port'), ()=> {
    console.log('Servidor Activo',app.get('port'));
  });



