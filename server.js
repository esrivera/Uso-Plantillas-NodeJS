const express = require('express');
const path = require('path');
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');

//Routes
app.get('/',function(req,res){
    var drinks = [
        { name: "Bloody Mary", drunkness: 3 },
        { name: "Martini", drunkness: 5 },
        { name: "Scotch", drunkness: 10 },
      ];
      var tagline = "Plantillas con NODEJS";
      res.render("pages/index", {
        drinks: drinks,
        tagline: tagline,
      });
});

app.get('/about',function(req,res){
    res.render('pages/about');
});

//start Server
console.log("Starting Web Server...");
app.listen(4000);
console.log("Web Server Started");