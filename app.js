const express=require("express");
const bodyParser=require("body-parser");
const cors=require("cors");

const app=express();

//Rutas
const AuthRoutes=require("./routers/Auth");
const UserRoutes=require("./routers/Usuarios");
const TablapRoutes=require("./routers/Tabla_p.routes");
const DatosRoutes=require("./routers/Datos.routes")
//Middlewares para el funcionamiento
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(cors());

//Uploads
app.use(express.static('uploads'));

//configurar las rutas
app.use("/api",AuthRoutes);
app.use("/api",UserRoutes);
app.use("/api",TablapRoutes);
app.use("/api",DatosRoutes);

module.exports=app;