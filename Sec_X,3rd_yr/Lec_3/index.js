const express = require("express")
const app = express()
const path=require("path")
const PORT = 4444;


app.use(express.static(path.join(__dirname,"public")))

app.use("/", (req, res,next) => {
    console.log("Middleware");
    next()
})

// app.get("/",(req,res)=>{
//     // res.send("Response from the server")
//     res.sendFile(path.join(__dirname,"index.html"))
// })

// app.get("/style.css",(req,res)=>{
//     res.sendFile(path.join(__dirname,"style.css"))
// })

// app.get("/script.js",(req,res)=>{
//     res.sendFile(path.join(__dirname,"script.js"))

// })

app.listen(PORT, () => {
    console.log("http://localhost:" + PORT);
})