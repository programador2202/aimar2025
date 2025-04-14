
//primer paso -> definimos express
const express = require('express');
const app = express();

//motor de plantillas
app.set('view engine','ejs');

//Segundo -> app creamos un servidor 
app.listen(5000,() => {
  console.log("Servidor Ejecutandose en http://localhost:5000")
});