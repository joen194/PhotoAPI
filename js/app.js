var app = angular.module("myapp", []);

var json;
var names = [];
var achternamen = [];
var mailadressen = [];

app.controller("BodyCtrl",function($scope, $http){

        $http.get("http://localhost:3000")
            .success(function(posts){
                console.log("in success");
                json = posts;
                
                   $.each(Object(json), function(index, users) {
                   	mailadressen = users.mail;
                   	achternamen = users.last_name;
                   	names = users.name;
                   	console.log(names);
                   	console.log(achternamen);
                   	console.log(mailadressen);
					}); 

                var count = Object.keys(json).length;
                console.log(count);
            })
});