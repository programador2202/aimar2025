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
  //res.send(result);

//  res.render('edit',{dev:'Aimar Alexander Contreras', skill: 'Javascrip', friends: ['Erick','Franco','Juan'] });

res.render('index',{registros:result});
}

  });

});

//enrutador  para el registro
router.get('/create',(req,res) =>{
  res.render("create");
});


//acceder a toda la logica
const crud=require('./controllers/crud');
router.post('/save',crud.save);

module.exports =router;