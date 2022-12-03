const express = require("express"); 
const cors = require("cors"); 
require("dotenv").config(); 
const dbConnect = require("./config/mongo"); 
const app = express(); 

//meddleware 
app.use(cors()); //error de origen cruzado

const port = process.env.PORT || 3000; 

//router 

app.use("/api", require("./routers")); 

app.listen(port, ()=>{
	console.log(`http://localhost:${port}`); 
  
  // console.log("@{^_^}@"); 
}); 

dbConnect();