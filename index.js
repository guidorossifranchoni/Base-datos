var express =require("express");
var cors = require("cors");
var corsOptions = {origin:"*",optionSucessStatus:200};
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(cors(corsOptions));


var pacientes =[{
  "id":"1",
    "edad": 20,
    "imagen":"https://www.dentidesk.com/wp-content/uploads/2017/08/evolucion-paciente.png",
    "nombre": "Andrea",
    "apellido":"Oiene",
    "peso":80,
    "patologiaPrevia":"Hemiparecia",
    "sexo":"Femenino",
    "fechaIngreso":"11/12/2020",
    "numeroSesionesRealizadas":2,
  },
  {
    "id":"2",
    "nombre": "Juan",
    "edad": 27,
    "imagen":"https://www.dentidesk.com/wp-content/uploads/2017/08/evolucion-paciente.png",
    "apellido":"Flores",
    "peso":70,
    "patologiaPrevia":"Hemiparecia",
    "sexo":"Masculino",
    "fechaIngreso":"15/10/2020",
    "numeroSesionesRealizadas":2,
  },
  {
    "id":"3",
    "nombre": "Guido",
    "edad": 70,
    "imagen":"https://www.dentidesk.com/wp-content/uploads/2017/08/evolucion-paciente.png",
    "apellido":"Rossi",
    "peso":50,
    "patologiaPrevia":"Hemiparecia",
    "sexo":"Masculino",
    "fechaIngreso":"11/02/2020",
    "numeroSesionesRealizadas":2,
},
{
    "id":"4",
    "nombre": "Helena",
    "edad": 47,
    "imagen":"https://www.dentidesk.com/wp-content/uploads/2017/08/evolucion-paciente.png",
    "apellido":"Diaz",
    "peso":80,
    "patologiaPrevia":"Hemiparecia",
    "sexo":"Femenino",
    "fechaIngreso":"05/08/2020",
    "numeroSesionesRealizadas":0,
}];
var sesiones =[{
  "id":"1",
  "fecha":"11/08/2020",
  "tiempo":45,
  "cadenciaPromedio":32,
  "fuerzapd": [2,1,3,2],
  "fuerzapi": [1,2,3,4],
  "fases":    [1,2,3,4],
  "asistencia": 90,
  "fuerzaPromMotor": 20,
  "fuerzaPromPaciente": 2,
},
{
  "id":"1",
  "fecha":"15/08/2020",
  "tiempo":45,
  "cadenciaPromedio":32,
  "fuerzapd": [2,1,3,2],
  "fuerzapi": [1,2,3,4],
  "fases":    [1,2,3,4],
  "asistencia": 90,
  "fuerzaPromMotor": 20,
  "fuerzaPromPaciente": 2,
},
{
  "id":"2",
  "fecha":"11/09/2020",
  "tiempo":45,
  "cadenciaPromedio":32,
  "fuerzapd": [2,1,3,2],
  "fuerzapi": [1,2,3,4],
  "fases":    [1,2,3,4],
  "asistencia": 90,
  "fuerzaPromMotor": 20,
  "fuerzaPromPaciente": 2,
},
{
  "id":"2",
  "fecha":"01/09/2020",
  "tiempo":45,
  "cadenciaPromedio":32,
  "fuerzapd": [2,1,3,2],
  "fuerzapi": [1,2,3,4],
  "fases":    [1,2,3,4],
  "asistencia": 90,
  "fuerzaPromMotor": 20,
  "fuerzaPromPaciente": 2,
},
{
  "id":"3",
  "fecha":"18/10/2020",
  "tiempo":45,
  "cadenciaPromedio":32,
  "fuerzapd": [2,1,3,2],
  "fuerzapi": [1,2,3,4],
  "fases":    [1,2,3,4],
  "asistencia": 90,
  "fuerzaPromMotor": 20,
  "fuerzaPromPaciente": 2,
},
{
  "id":"3",
  "fecha":"18/10/2020",
  "tiempo":45,
  "cadenciaPromedio":32,
  "fuerzapd": [2,1,3,2],
  "fuerzapi": [1,2,3,4],
  "fases":    [1,2,3,4],
  "asistencia": 90,
  "fuerzaPromMotor": 20,
  "fuerzaPromPaciente": 2,
},
{
  "id":"4",
  "fecha":"22/05/2020",
  "tiempo":45,
  "cadenciaPromedio":32,
  "fuerzapd": [2,1,3,2],
  "fuerzapi": [1,2,3,4],
  "fases":    [1,2,3,4],
  "asistencia": 90,
  "fuerzaPromMotor": 20,
  "fuerzaPromPaciente": 2,
},
{
  "id":"4",
  "fecha":"22/07/2020",
  "tiempo":45,
  "cadenciaPromedio":32,
  "fuerzapd": [2,1,3,2],
  "fuerzapi": [1,2,3,4],
  "fases":    [1,2,3,4],
  "asistencia": 90,
  "fuerzaPromMotor": 20,
  "fuerzaPromPaciente": 2,
},];


var id =20;


app.get("/paciente",function(req,res){
   setTimeout(function(){
 res.send(pacientes);    

        return;
    },2000);
   
   
    
});    


app.get("/paciente/:id",function(req,res){
  console.log(req.params.id);
    if(req.params.id>0){
      var paciente={};
       pacientes.forEach(item=>{
    
        if(item.id==req.params.id){
        
          pacientes= item;
         
        }
      });
      res.send(paciente);
      return; 
     
    }else{
        res.send({'type': 'error'});
        return; 
    }
});
app.get("sesion/id:",function(req,res){
  console.log(req.params.id);
    if(req.params.id>0){
      var paciente={};
       pacientes.forEach(item=>{
    
        if(item.id==req.params.id){
        
          pacientes= item;
         
        }
      });
      res.send(paciente);
      return; 
     
    }else{
        res.send({'type': 'error'});
        return; 
    }
  
  });


app.delete("/paciente/:id",function(req,res){
  console.log(req.params.id);
    setTimeout(function(){
        
       console.log(req.params.id);
        if(req.params.id!= undefined){
	
			for(var i =0;i<pacientes.length;i++){
					if(req.params.id== pacientes[i].id){
						paciente.splice(i,1);
        	var data = {"type":"ok"};
							res.send(data);    
							return;
					}
				}
			
			

        }
        res.send({'type': 'error'});
    },2000);
    
});
app.post("/login",function(req,res){
  setTimeout(function(){
      console.log("Llego al servidor "+JSON.stringify(req.body));
      
     
      if(req.body.nombre!=undefined && req.body.id!=undefined){
          if(req.body.nombre==="nombre"&&req.body.id==="1234"){
              console.log("Sale del servidor "+"{'type': 'User'}")
              res.send({'type': 'User'});    
          }else if(req.body.nombre==="admin"&&req.body.id==="1234"){
              console.log("Sale del servidor "+"{'type': 'Admin'}")
              res.send({'type': 'Admin'});    
          }else{
              console.log("Sale del servidor "+"{'type': 'error'}")
              res.send({'type': 'error'});
          }
          return;
      }
      console.log("Sale del servidor "+"{'type': 'error'}")
      res.send({'type': 'error'});
  },2000);
  
});
