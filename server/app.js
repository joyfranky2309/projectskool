const express = require("express");
const app= express()
const port =4000
app.get("/",(req,res)=>
{
    console.log("welcome")
    res.send("Hi mowa")
})
app.listen(port,()=>{
    console.log(`server running @${port}`)
})