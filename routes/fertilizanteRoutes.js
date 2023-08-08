const express = require("express");
const fertilizanteController = require("./../controllers/fertilizanteController");
//const authController = require("./../controllers/authController");
const fertilizanteRouter = express.Router();
//routes
fertilizanteRouter
  .route("/")
  //.all(authController.protect)
  .get(fertilizanteController.getAllFertilizante)
  .post(fertilizanteController.addFertilizante)
  //.put(fertilizanteController.updateFertilizante);
fertilizanteRouter
  .route("/:id")
  //.all(authController.protect)
  .get(fertilizanteController.getFertilizanteById).delete(fertilizanteController.deleteFertilizanteById);

module.exports = fertilizanteRouter;
