const mongoose = require("mongoose");
const Schema= mongoose;
const siembraSchema = new mongoose.Schema({
    producto:  { type: Schema.ObjectId, ref: "Producto" },
  fertilizante:{ type: Schema.ObjectId, ref: "Fertilizante" },
  fecha: {
    type: String,
    required: true
  },
  descripcion:{
    type: Number,
    required: [true, " discount rate is required"],
  }
 

});

const Siembra = mongoose.model("Siembra", siembraSchema);
module.exports = Siembra;
