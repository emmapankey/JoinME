var db = require("../models");
var path = require("path");
// var testing = require("../routes/testing.js");


module.exports = function(app) {

    //get all projects
    app.get("/api/projects/:type", function(req, res) {
        db.Project.findAll({
            where: {
                Project_Type: req.params.type
            }
        }).then(function(results) {
            if (results.length !== 0) {
                res.render("searchProject", { project: results });
            } else {
                res.redirect("/api/projects")
            }
        })
    })


    app.get("/api/projects", function(req, res) {
        db.Project.findAll({}).then(function(results) {
            res.render("searchProject", { project: results })
        })
    })


    app.get("/project/:id", function(req, res) {


        db.Project.findOne({
            where: {
                id: req.params.id
            },
            include: [{
                model: db.Step,
                attributes: ["Step", "Step Description"]
            }]
        }).then(function(result) {
            res.json(result)
        });
    });











    //can create project as long as there is a user in user table 
    app.post("/projects", function(req, res) {

        console.log("Here is the user ID:" + req.body.theUserId);



        var project = Project.create({
            Project_name: req.body.Project_name,
            Project_type: req.body.Project_type,
            Project_descripton: req.body.Project_descripton,
            UserId: req.body.theUserId,
            steps: [{
                    Step: req.body.stepOne,
                    Step_Description: req.body.stepOneDescription
                },
                {
                    Step: req.body.stepTwo,
                    Step_Description: req.body.stepTwoDescription
                }, {
                    Step: req.body.stepThree,
                    Step_Description: req.body.stepThreeDescription,
                }, {
                    Step: req.body.stepFour,
                    Step_Description: req.body.stepFourDescription
                }, {
                    Step: req.body.stepFive,
                    Step_Description: req.body.stepFiveDescription
                }
            ]
        }, {
            include: [{
                model: db.Step,
            }]
        });

        res.send("Works");







    });

    app.delete("/api/projects/:id", function(req, res) {
        // Delete the Project with id from req.body.id
        db.Project.destroy({
            where: {
                id: req.body.id
            }
        }).then(function(results) {
            res.json(results);
            console.log("project deleted.")
        });
    });


};