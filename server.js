var express = require("express")
var exphbs = require("express-handlebars")

var app = express()

var PORT = process.env.PORT || 8080


app.use(express.urlencoded({ extended: true}))
app.use(express.json())
app.use(express.static("public"))
app.use(express.static("public/imgs"))
app.use(express.static("public/js"))

app.engine("handlebars", exphbs({ defaultLayout: "main"}))
app.set("view engine", "handlebars")

require("./routes/html-routes.js")(app)

app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT)
})