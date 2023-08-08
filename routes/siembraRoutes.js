const express= require("express");
const siembraController= require("../controllers/siembraController");
const siembraRouter= express.Router();
siembraRouter.route("/").get(siembraController.getAllSiembra)
.post(siembraController.addSiembra);
module.exports=siembraRouter;