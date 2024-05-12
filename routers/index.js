const routerx = require("express-promise-router");
const DatosR = require("./Datos.routes");
const Tabla_psR = require("./Tabla_p.routes");



const router = routerx();

router.use("/datos", DatosR);
router.use("/proveedor", Tabla_psR);


module.exports = router;