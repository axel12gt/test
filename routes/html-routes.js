
module.exports = function(app){
    app.get("/", function(req, res){
        res.render("index")
    })
    
    app.get("/about", function(req,res){
        res.render("about")
    })

    app.get("/login", function(req,res){
        res.render("login")
    })
}