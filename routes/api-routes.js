var db = require("../models")

module.exports = function(app){
    app.get("/api/name", function(req,res){
        db.User.findAll({}).then(function(stuff){
            res.json(stuff)
        })
    })
}