const express = require("express")
const app = express()
const path = require("path")
const PORT = 4444;
const hbs = require('hbs');


let namearr = ["akash", "rai", "suyash", "rajiv"]
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.get("/random", (req, res) => {
    res.render('random', {
        firstname: "saksham",
        lastname: "mishra"
    })
})

app.get("/array", (req, res) => {
    res.render("array", {
        namearr
    })
})


app.listen(PORT, () => {
    console.log("http://localhost:" + PORT);
})