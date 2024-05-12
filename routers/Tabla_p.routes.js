const routerx = require("express-promise-router");
const Tablactr = require("../controllers/Tabla.controller");

const router = routerx();

router.post("/saveData", Tablactr.postTabla_p);
router.get("/buscar", Tablactr.getTabla_p);
router.get("/buscar/:id", Tablactr.getTabla_);

router.patch("/actualizar/:id", Tablactr.putTabla_p);
router.delete("/delete/:id", Tablactr.delTabla_p);


module.exports = router;

//export default router;
