/*const http= require("http");
const url= require("url");
const server= http.createServer((req,res)=>{
    const {query,pathname}=url.parse(req.url,true);
    const response={
        success:true,
        message:"Api working..."
    };
    res.writeHead(200,{
        "Content-type":"application/json"

    });
    console.log("test",query, pathname);
    res.end(JSON.stringify(response));
});
server.listen(3030,"127.0.0.1",()=>{
    console.log("Listening to request on port 3030 "+process.env.URL );
});
console.log("after serve");*/
const express= require("express");
const morgan= require("morgan");
const productoRouter= require("./routes/productoRoutes");
const fertilizanteRouter=require("./routes/fertilizanteRoutes");
const siembraRouter=require("./routes/siembraRoutes");
var cors = require('cors')
const app= express();
//middlewares
app.use(express.json());// middleware for default
app.use(morgan("dev"));// third middleware 
//app.use(cors());// third middleware 
app.use((req, res, next) => {//own middleware
  req.requestTime = new Date().toISOString();
  next();
});
var whitelist = ['http://localhost:8080','http://127.0.0.1:8080']
var corsOptions = {
  origin: whitelist,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

//routes
app.use("/api/v1/productos/",cors(corsOptions), productoRouter);
app.use("/api/v1/fertilizantes/",cors(corsOptions), fertilizanteRouter);
app.use("/api/v1/siembras/",cors(corsOptions), siembraRouter);

module.exports=app;