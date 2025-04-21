const express = require('express');

const router=express.Router();
const conexion=require('./database/db')
//require/req= solicitud| res=respuesta
router.get('/', (req,res)=>{
  //retornamos una coleccion de datos.Consulta exitosa "results", fallo "error"
  conexion.query("SELECT * FROM VEHICULOS",(error, results)=>{
    if(error){
      throw error;
    }else{
      //Enviamos "json" los datos al navegador
      //res.send(results);
      res.render('index',{registros:results});
    }
  });
});
//enrutador para el registro
router.get('/create',(req,res)=>{//create url
  res.render("create"); //create archivo
})

router.get('/delete/:id',(req,res)=>{
  const idvehiculo=req.params.id;
  conexion.query("DELETE FROM VEHICULOS WHERE id=?",[idvehiculo],(error,results)=>{
    if(error){
      throw(error);
    }else{
      res.redirect('/');
    }
  })
})

//Para editar, debemos identidicar el registro
router.get('/edit/:id', (req,res)=>{
  conexion.query("SELECT * FROM VEHICULOS WHERE id=?",[req.params.id],(error,results)=>{
    if(error){
      throw(error);
    }else{
      res.render('edit',{vehiculo:results[0]});
    }
  })
})

//acceder a toda la logica
const crud=require('./controllers/crud');
router.post('/save', crud.save);
router.post('/update', crud.update);
module.exports =router;