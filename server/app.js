const express = require("express");
const app= express()
const mongoose = require("mongoose");
const port =4000
const User=require("../server/Schemalu/UserSchema")
const Project=require("../server/Schemalu/ProjectSchema")
mongoose.connect("mongodb://localhost:27017/projectSkool",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("MongoDB connect ayindi")
})
.catch((err)=>{
    console.log(err)
})
app.get("/",(req,res)=>
{
    console.log("welcome")
    res.send("Hi mowa")
})
app.listen(port,()=>{
    console.log(`server running @${port}`)
})