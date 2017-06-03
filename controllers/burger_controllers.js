var db = require("../models/");


module.exports = function(app) {

	app.get("/", function(req, res) {
		db.Burger.findAll({}).then(function(data) {
			var hbsObject = {
				Burgers: data
			};
			console.log(hbsObject);
			res.render("index", hbsObject);
		});
	});

	app.post("/burgers", function(req, res) {
		console.log(req.body);
		db.Burger.create({
			burger_name: req.body.burger_name,
		}).then(function(data) {
				res.redirect("/");
			});
	});
	app.put("/burgers/:id", function(req, res) {
		db.Burger.update({
			devoured: req.body.devoured
		}, {
			where: {
				id: req.params.id
			}
		}).then(function(data) {
			res.redirect("/");
		});
	});

};
