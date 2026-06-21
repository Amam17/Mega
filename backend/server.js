import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());

app.get("/",(req,res)=>{

res.send("MegaNet Backend Running");

});

app.listen(3000,()=>{

console.log(
"Running on 3000"
);

});