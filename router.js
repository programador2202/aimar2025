const express =require('express');
const router = express.Router();
const conexion=require('./database/db');

//req -> es una solicitud
//res -> es una respuesta
router.get('/',(req,res) =>{
  //retornamos una Coleccion de datos
  //consulta exitosa ->"result"
  //erro es null ->"Error"
  conexion.query("SELECT * FROM vehiculos",(error,result)=>{
if(error){
  throw error;
}else{
  res.send(result);
}
  });

});

module.exports =router;