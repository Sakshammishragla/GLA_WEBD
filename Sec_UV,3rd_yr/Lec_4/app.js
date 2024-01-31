const express=require("express")
const app=express()
const path=require("path")
const PORT=4444;


// console.log(app);

app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}))

app.use("/",(req,res,next)=>{
    console.log("yeh hamra middleware hai!");
    // console.log(req);
    // res.send("Yeh hamara response hai")
    next()
})

// app.get("/",(req,res)=>{
//     res.sendFile(path.join(__dirname,'index.html'))
// })

// app.get("/style.css",(req,res)=>{
//     res.sendFile(path.join(__dirname,'style.css'))
// })

// app.get("/script.js",(req,res)=>{
//     res.sendFile(path.join(__dirname,'script.js'))
// })


// app.get('/path/abhishek',(req,res)=>{
//     res.send("Abhishek ka data")
// })

// app.get('/path2/:name/:class',(req,res)=>{
//     console.log(req.params);
//     res.send(req.params)
// })

app.get('/path3',(req,res)=>{
    console.log(req.query);
})

app.post("/addtask",(req,res)=>{
    console.log(req.body);
    res.send("Task added")
})

app.listen(PORT,()=>{
    console.log("http://localhost:"+PORT);
})

