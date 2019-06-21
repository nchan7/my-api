const express = require('express');
const db = require('./models');

const app = express();

app.use(express.urlencoded({extended: false}));

app.get("/planes", function(req, res) {
    db.plane.findAll().then(function(planes) {
        res.json(planes);
    })
});

app.get("/planes/:id", function(req, res) {
    db.plane.findOne({
        where: {id: parseInt(req.params.id)}
    }).then(function(plane){
        res.json(plane);
    });
});

app.post("/planes", function(req, res) {
    db.plane.create({
        name: req.body.name,
        nickname: req.body.nickname,
        manufacturer: req.body.manufacturer,
        cost: parseInt(req.body.cost)
    }).then(function(data) {
        res.json(data);
    });
});

app.put("/planes/:id", function(req, res) {
    db.plane.update({
        name: req.body.name,
        nickname: req.body.nickname,
        manufacturer: req.body.manufacturer,
        cost: parseInt(req.body.cost)
    }, {
        where: {id: parseInt(req.params.id)}
    }).then(function(count) {
        res.json(count);
    });
});

app.delete("/planes/:id", function(req, res) {
    db.plane.destroy({
        where: {id: parseInt(req.params.id)}
    }).then(function(count){
        res.json(count);
    });
});

// Make your model - name, fields, data types of fields...3-5 records
// Run the migrations
// Create one record route
// Read one record route
// Read all records route
// Update one record route
// Delete one record route
// No need for EJS
// Every route sends a JSON object

app.listen(3000, function() {
    console.log("You're listening to the sweet sounds of port 3000 in the morning.");
});

