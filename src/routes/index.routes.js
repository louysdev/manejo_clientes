const {Router} = require("express");
const router = Router();

const { renderAbout, renderIndex }  = require("../controllers/index.controller");

router.get("/", renderIndex);

router.get("/acercade", renderAbout);

module.exports = router;