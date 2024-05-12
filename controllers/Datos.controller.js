//import Models from "../models/Datos.models";
const Models = require("../models/Datos.models");


module.exports =  {

  //Endpoint Enviar Datos
  postDatos: async (req, res, next) => {
    try {
      const { nombre, direccion, correo, estado, telefono, producto, cantidad, precio_unitario, proveedor } = req.body;

      const guardarDatos = new Models.Datos({
        nombre,
        direccion,
        correo,
        estado,
        telefono,
        producto,
        cantidad, 
        precio_unitario,
        proveedor, 
      });

      const guardar = await guardarDatos.save();
      res.status(200).json(guardar);

    } catch (error) {
      res.status(500).send({
        message: "Error al enviar",
      });
      next(error);
    }
  },

  //EndPoint BuscarAll
  getDatos: async (req, res, next) => {
    try {

      const obtener = await Models.Datos.find();
      res.status(200).json(obtener);
    } catch (error) {
      res.status(500).send({
        message: "Error al obtener los datos",
      });
      next(error);
    }
  },

  getDato: async (req, res, next) => {
    try {

      const obtener = await Models.Datos.findById(req.params.id);
      res.status(200).json(obtener);
    } catch (error) {
      res.status(500).send({
        message: "Error al obtener los datos",
      });
      next(error);
    }
  },

  //EndPoint Actualizar
  putDatos: async (req, res, next) => {
    try {
      const { nombre, direccion, correo, estado, telefono, producto, cantidad, precio_unitario } = req.body;

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
      };

      const actualizar = await Models.Datos.findByIdAndUpdate(req.params.id, actualizarDatos);
      res.status(200).json(actualizar);

    } catch (error) {
      res.status(500).send({
        message: "Error al actualizar",
      });
      next(error);
    }
  },

  //EndPoint eliminar
  delDatos: async (req, res, next) => {
    try {
      const el = await Models.Datos.findByIdAndDelete(req.params.id);
      res.status(200).send({
        message: "Datos eliminados correctamente"
      });
      //res.status(200).json(el);
    } catch (error) {
      res.status(500).send({
        message: "Error al eliminar dato",
      });
      next(error);
    }
  },
}
