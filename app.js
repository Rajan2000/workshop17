const express=require("express");


const app=express()
app.listen(3500 , ()=>{
    console.log("listening at 3500 port")
})


app.get("/data",(req,res)=>{
    res.json({message:"get is working"})
})
app.post("/data",(req,res)=>{
    res.json({message:"post is working"})
})
app.put("/data",(req,res)=>{
    res.json({message:"put is working"})
})
app.delete("/data",(req,res)=>{
    res.json({message:"delete is working"})
})
app.options("/data",(req,res)=>{
    res.json({message:"options is working"})
})