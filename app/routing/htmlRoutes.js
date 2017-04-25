var server = require("../../server.js");

server.app.get("/", function(request, response){
    response.sendFile(server.path.join(__dirname + '../public/home.html'));
});

server.app.get("/survey", function(request, response){
    response.sendFile(server.path.join(__dirname + '../public/survey.html'));
});


