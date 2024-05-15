// Datos.models.js
const mongoose = require("mongoose");

const datosSchema = mongoose.Schema({
    nombre: String,
    direccion: String,
    correo: String,
    estado: String,
    telefono: Number,
    producto: String,
    cantidad: Number, 
    precio_unitario: Number,
    proveedor: Number, 
});

const Datos = mongoose.model('Datos', datosSchema);
module.exports = Datos;
