// Datos.controller.js
// Datos.controller.js
const Datos = require("../models/Datos.models");

module.exports = {
  postDatos: async (req, res, next) => {
    try {
      const { nombre, direccion, correo, estado, telefono, producto, cantidad, precio_unitario, proveedor } = req.body;

      const guardarDatos = new Datos({
        nombre,
        direccion,
        correo,
        estado,
        telefono,
        producto,
        cantidad, 
        precio_unitario,
        proveedor,
        fecha: new Date() // Agrega la fecha actual al guardar los datos
      });

      const guardar = await guardarDatos.save();
      res.status(200).json(guardar);
    } catch (error) {
      console.error(error);
      throw error;
      next();
    }
  },

  getDatos: async (req, res, next) => {
    try {
      const obtener = await Datos.find();
      res.status(200).json(obtener);
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "Error al obtener los datos",
      });
    }
  },

  getDato: async (req, res, next) => {
    try {
      const obtener = await Datos.findById(req.params.id);
      if (!obtener) {
        res.status(404).send({
          message: "Datos no encontrados",
        });
      } else {
        res.status(200).json(obtener);
      }
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "Error al obtener los datos",
      });
    }
  },

  putDatos: async (req, res, next) => {
    try {
      const { nombre, direccion, correo, estado, telefono, producto, cantidad, precio_unitario, proveedor } = req.body;
      const actualizarDatos = {
        nombre,
        direccion,
        correo,
        estado,
        telefono,
        producto,
        cantidad, 
        precio_unitario, 
        proveedor,
        fecha: new Date() // Agrega la fecha actual al actualizar los datos
      };
      const actualizar = await Datos.findByIdAndUpdate(req.params.id, actualizarDatos);
      if (!actualizar) {
        res.status(404).send({
          message: "Datos no encontrados",
        });
      } else {
        res.status(200).json(actualizar);
      }
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "Error al actualizar los datos",
      });
    }
  },

  delDatos: async (req, res, next) => {
    try {
      const el = await Datos.findByIdAndDelete(req.params.id);
      if (!el) {
        res.status(404).send({
          message: "Datos no encontrados",
        });
      } else {
        res.status(200).send({
          message: "Datos eliminados correctamente"
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "Error al eliminar los datos",
      });
    }
  },
};
