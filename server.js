const mongoose=require("mongoose");
const app = require("./app");
const port = process.env.PORT;

mongoose.connect(process.env.DATABASE,{}).then((con)=>{
//  console.log("Connected",con.connections);
  /*const p=new Product({
    productName:"product 1",
    price:10
  });
  p.save().
  then(()=>{
    console.log("guardado");
  });*/
  console.log("se conecto correctamente a moogose");
});
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
