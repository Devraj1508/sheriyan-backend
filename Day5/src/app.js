const express=require("express")
const app=express()
const notesmodel=require('./Models/notesmodels')

app.use(express.json());

// post
app.post("/notes",async(req,res)=>{
    const {title,description}=req.body

    const notes= await notesmodel.create({
        title,description

})

    res.status(201).json({
        "message":"message send sucessful",
        notes
    })
})


module.exports=app