import express from "express"
import cors from "cors"
const app = express()

app.use(cors());
app.use(express.json());

app.post("/submit",(req,res)=>{
    const name = req.body.name;
    const age = req.body.age;
    console.log("name:", name);
    console.log("age:",age);
    res.json({ message: "Data received successfully" });
})



app.listen(3000,()=>{
    console.log("server is running")
})