const Fertilizante= require("../models/Fertilizante");
const catchAsync= require("../utils/catchAsync");
exports.getAllFertilizante =catchAsync(async(req,res)=>{
    const fertilizante=await Fertilizante.find();
    res.status(200).json({
        status: "success",
        timeOfRequest: req.requestTime,
        results: fertilizante.length,
        data: {
          fertilizante
        },
      });
});
exports.addFertilizante=catchAsync (async(req,res)=>{
 const fertilizante=await Fertilizante.create(req.body);
 res.status(200).json(
    {
        status:"success",
        data:{
            fertilizante
        }
    }
 );

});
exports.getFertilizanteById=catchAsync ( async(req,res)=>{
 const fertilizante=await Fertilizante.findById(req.params.id);
 if(fertilizante){
    return res.status(200).json({
        status:"success",
        data:{fertilizante}
    });
 }
 res.status(404).json({
    status:"not found"
 });
});
exports.updatefertilizante=(req,res)=>{
    Fertilizante.findByIdAndUpdate(req.body._id,req.body,{new:true},function(err,res){
         if(err){
           return res.status(404).json(
                {status:"not found"}
            );
         };
         res.status(200).json({
            status:"success",
            message:"producto Actualizado..."
         });
    });

}
exports.deleteFertilizanteById=(req,res)=>{
    Fertilizante.findByIdAndDelete(req.params.id,function(err,document){
        if(err){
            return res.status(404).json({
                status:"not found"
            })
        }
        res.status(200).json({
            status:"success",
            message:"Fertilizante deleted"
        });
    })
}