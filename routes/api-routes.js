var db = require("../models")

module.exports = function(app){
    app.post("/api/survey",function(req,res){
        db.Survey.create({
            smoke: req.body.smoke,
            drinks: req.body.drinks,
            weight: req.body.weight,
            calories: req.body.calories,
            exercise: req.body.exercise,
            mood: req.body.mood,
            race: req.body.race,
            gender: req.body.gender,
            height: req.body.height
        }).then(function(fjdk){
            res.json(fjdk)
        })
    })

    

}

