// Tabla_p.models.js
const mongoose = require("mongoose");

const tabla_p = mongoose.Schema(
    {
        nombre: String,
        direccion: String,
        correo: String,
        estado: String,
        telefono: Number,
        producto: String,
        cantidad: Number, 
        precio_unitario: Number,
        proveedor: Number,
        fecha: { type: Date, default: Date.now }, // Campo para la fecha de creación o actualización
    }
);

const Tabla_p = mongoose.model('Tabla_p', tabla_p);
module.exports = Tabla_p;
