const Models = require("../models/Tabla_p.models");



module.exports =  {

  //Endpoint Enviar Datos
  postTabla_p: async (req, res, next) => {
    try {
      const { nombre, direccion, correo, estado, telefono, producto, cantidad, precio_unitario, proveedor } = req.body;

      const guardarTabla_p = new Models.Tabla_p({
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

      const guardar = await guardarTabla_p.save();
      res.status(200).json(guardar);

    } catch (error) {
      res.status(500).send({
        message: "Error al enviar",
      });
      next(error);
    }
  },

  //EndPoint BuscarAll
  getTabla_p: async (req, res, next) => {
    try {

      const obtener = await Models.Tabla_p.find();
      res.status(200).json(obtener);
    } catch (error) {
      res.status(500).send({
        message: "Error al obtener los datos",
      });
      next(error);
    }
  },

  getTabla_: async (req, res, next) => {
    try {

      const obtener = await Models.Tabla_p.findById(req.params.id);
      res.status(200).json(obtener);
    } catch (error) {
      res.status(500).send({
        message: "Error al obtener los datos",
      });
      next(error);
    }
  },

  //EndPoint Actualizar
  putTabla_p: async (req, res, next) => {
    try {
      const { nombre, direccion, correo, estado, telefono, producto, cantidad, precio_unitario } = req.body;

      const actualizarTabla_p = {
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

      const actualizar = await Models.Tabla_p.findByIdAndUpdate(req.params.id, actualizarTabla_p);
      res.status(200).json(actualizar);

    } catch (error) {
      res.status(500).send({
        message: "Error al actualizar",
      });
      next(error);
    }
  },

  //EndPoint eliminar
  delTabla_p: async (req, res, next) => {
    try {
      const el = await Models.Tabla_p.findByIdAndDelete(req.params.id);
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
