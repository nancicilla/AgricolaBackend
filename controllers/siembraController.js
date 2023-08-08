const Siembra= require("../models/Siembra")
const catchAsync = require("../utils/catchAsync");
exports.getAllSiembra= catchAsync(async(req,res)=>{
 const siembras= await Siembra.find();
 res.status(200).json({
    status:"success",
    results:siembras.length,
    data:{siembras}
 });

});
exports.addSiembra= catchAsync( async(req,res)=>{
const siembra=await Siembra.create(req.body);
res.status(200).json({
   status:"success",
   data:{
      siembra
   }

});
});
