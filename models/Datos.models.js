const mongoose = require("mongoose");


const datos = mongoose.Schema(
    {
        nombre: String,
        direccion: String,
        correo: String,
        estado: String,
        telefono: Number,
        producto:String,
        cantidad:Number, 
        precio_unitario:Number,
        proveedor:Number, 
        
    }
);



const Datos = mongoose.model('datos', datos);
module.exports = Datos;

