
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

    app.get("/survey", function(req,res){
        res.render("survey")
    })

    app.get("/signup", function(req,res){
        res.render("signup")
    })

    app.get("/userlanding", function(req,res){
        res.render("userlanding")
    })
}