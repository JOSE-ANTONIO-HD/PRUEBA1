const mongoose = require("mongoose");


const tabla_p = mongoose.Schema(
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

const Tabla_p = mongoose.model('Tabla_p', tabla_p);
module.exports = Tabla_p;