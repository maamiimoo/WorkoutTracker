let db = require("../models");

module.exports = function(app){
    app.get("/api/workouts", function(req, res){
        db.workout.find({})
        .then(function(results){
            res.json(results);
        })
        .catch(function(err){
            res.json(err);
        });
    });

    app.post("/api/workouts", function(req, res){
        db.workout.create(req.body)
        .then(function(req, res){
            res.json(results);
        })
        .catch(function(err){
            res.json(err);
        });
    });

    app.get("/api/workouts/range", function(req, res){
        db.workout.find({})
        .then(function(req,res){
            res.json(results);
        })
        .catch(function(err){
            res.json(err);
        });
    });
}