const express=require("express")
const app=express()
const PORT=4444;


app.use("/",(req,res)=>{
    // console.log("yeh hamra middleware hai!");
    // console.log(req);
    res.send("Yeh hamara response hai")

})

app.listen(PORT,()=>{
    console.log("http://localhost:"+PORT);
})

