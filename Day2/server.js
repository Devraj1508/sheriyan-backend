const express=require("express")
const app=express();//server instance create karna

app.get('/',function(req,res){
    res.send("welcome")
})
app.get('/about',function(req,res){
    res.send("this is my page")
})
app.listen(3000);//server start karna