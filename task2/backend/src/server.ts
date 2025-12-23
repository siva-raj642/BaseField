import express from "express"
import cors from "cors";

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post("/submit",(req,res)=>{
    const {name ,email,pass,cpass } = req.body;

    if (!name || !email || !pass || !cpass) {
    return res.status(400).json({ message: "All fields are required" });
  }
    if(name.length < 3){
        return res.status(400).json({message:"Name must be more than 3 letters"})
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        return res.status(400).json({ message: "Email is Invalid"})
    }
    if(pass!= cpass ){
        return res.status(400).json({message:"Password must match the confirm Pass "})
    }
    function containsUppercase(str:string) {
        return /[A-Z]/.test(str);
    }
    function hasNumber(myString:string) {
        return /\d/.test(myString);
    }
    if(pass.length < 9 && containsUppercase(pass) && hasNumber(pass) ){
        return res.status(400).json({ message : "Password  is invalid format"})
    }  
    return res.status(200).json({ message: "Form submitted successfully" });  
         
})

app.listen(3000,()=>{
    console.log("server is runnin")
})