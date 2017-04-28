module.exports = function(app,path){

app.get("/", function(request, response){
    response.sendFile(path.join(__dirname + '../public/home.html'));
});

app.get("/survey", function(request, response){
    console.log("cool");
    response.sendFile(path.join(__dirname,"../public","survey.html"));
    
});

}


