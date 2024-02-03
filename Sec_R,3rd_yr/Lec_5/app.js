const express = require("express")
const app = express()
const path = require("path")
const PORT = 4444;
const hbs = require("hbs")

let blogarr = []
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'hbs')


app.post("/addblog", (req, res) => {
    const { author, category, blog } = req.body

    const obj = {
        author: author,
        category: category,
        blog: blog
    }

    blogarr.push(obj)
    res.send("Blog added successfully!")

})

app.get("/getblogs", (req, res) => {
     res.render('allblogs',{
       
     })
})

app.listen(PORT, () => {
    console.log("http://localhost:" + PORT);
})