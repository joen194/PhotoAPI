var express = require("express");
var bodyparser = require("body-parser");
var cloudinary = require('cloudinary');
var app = express();
app.use(bodyparser.json());


var jsonbestand;
var request = require("request");

cloudinary.config({ 
  cloud_name: 'ourdarklord', 
  api_key: '143677392515146', 
  api_secret: 'xprP4d2RNHNAy9tZKwh9XafEWWk' 
});


//******************************functie die de foto's verwijderd uit de cloudinary ******************************
cloudinary.api.delete_resources_by_tag('de pinboard id die ge ontvangt van een post ',
   function(result){console.log(result)});


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

var url = "https://photopinwall.firebaseio.com/users.json";
var naam;
request({url: url, json: true}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
        console.log(body) // Print the json response
        jsonbestand = body;
    }
})
app.get("/users",function(req,res){
$(document).ready(function () {
	$.each(Object(json), function(index, users) {
                   	mailadressen = users.mail;
                   	achternamen = users.last_name;
                   	names = users.name;
                   	console.log(names);
                   	console.log(achternamen);
                   	console.log(mailadressen);
					}); 
	});
});
app.listen(3000);
