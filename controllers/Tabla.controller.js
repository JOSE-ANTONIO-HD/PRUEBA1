const Models = require("../models/Tabla_p.models");

module.exports = {
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
      console.error(error);
      res.status(500).send({
        message: "Error al guardar los datos",
      });
    }
  },

  getTabla_p: async (req, res, next) => {
    try {
      const obtener = await Models.Tabla_p.find();
      res.status(200).json(obtener);
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "Error al obtener los datos",
      });
    }
  },

  getTabla_: async (req, res, next) => {
    try {
      const obtener = await Models.Tabla_p.findById(req.params.id);
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

  delTabla_p: async (req, res, next) => {
    try {
      const el = await Models.Tabla_p.findByIdAndDelete(req.params.id);
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
