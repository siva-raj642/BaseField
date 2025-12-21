import express from "express"
import cors from "cors"
const app = express()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set EJS
app.set("view engine", "ejs");

app.post("/submit",(req,res)=>{
    
    const name = req.body.name;
    const age = req.body.age;
    console.log("name:", name);
    console.log("age:",age);
    res.json({ message: "Data received successfully" });
    res.render("result", { name, age });
})



app.listen(3000,()=>{
    console.log("server is running")
})