const mongoose = require("mongoose");

const fertilizanteSchema = new mongoose.Schema({
  nombreComercial: {
    type: String,
    required: true,
    unique: true,
  },
  fabricante: {
    type: String,
    required: [true, "price is required"],
  },
  descripcion:{
    type: Number,
    required: [true, " discount rate is required"],
  }
 

});

const Fertilizante = mongoose.model("Fertilizante", fertilizanteSchema);
module.exports = Fertilizante;
