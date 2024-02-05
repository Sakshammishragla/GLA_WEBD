const express=require("express")
const app=express()
const path=require("path")
const PORT=4444;
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'hbs');

let namearr=["saksham","abhishek","suyash"]

app.use("/",(req,res,next)=>{
    console.log("yeh hamra middleware hai!");
    // res.send("yeh hamar response!")
    next()
})

app.get("/",(req,res)=>{
    res.send("Response through get method!")
})

// app.get("/random",(req,res)=>{
//     res.render("random",{
//         firstName:"Saksham",
//         LastName:"Mishra"
//     })
// })


app.get("/random2",(req,res)=>{
    res.render("array",{
        namearr
    })
})



app.listen(PORT,()=>{
    console.log("http://localhost:"+PORT);
})

