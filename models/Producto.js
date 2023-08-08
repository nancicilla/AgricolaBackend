const mongoose = require("mongoose");
const Schema= mongoose;
const productoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    unique: true,
  },
  imagen: {
    type: String,
    required: false,
  },
  descripcion:{
    type:String,
    required: [true, " discount rate is required"],
  },
  productopadre:
  { type: Schema.ObjectId, ref: "Producto" },

});

const Producto = mongoose.model("Producto", productoSchema);
module.exports = Producto;
