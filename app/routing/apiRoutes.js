var server = require("../../server.js");
var friendsArray = [];

server.app.get("/api/friends", function(request, response){
    response.json({{friends}});
});

server.app.post("/api/friends", function(request, response){
    //object constructor function
   function friendsSurvey(Name, Photo, Scores){
       this.name = Name;
       this.photo = Photo;
       this.scores = Scores;
   }
   
});