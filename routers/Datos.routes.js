const routerx = require("express-promise-router");
const Datosctr = require("../controllers/Datos.controller");

const router = routerx();

router.post("/saveData", Datosctr.postDatos);
router.get("/buscar", Datosctr.getDatos);
router.get("/buscar/:id", Datosctr.getDato);

router.patch("/actualizar/:id", Datosctr.putDatos);
router.delete("/delete/:id", Datosctr.delDatos);

module.exports = router;
