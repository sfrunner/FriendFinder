module.exports = function(app,path){

app.get("/", function(request, response){
    response.sendFile(path.join(__dirname.replace("routing",""),"public","home.html"));
    console.log(__dirname);
});

app.get("/survey", function(request, response){
    response.sendFile(path.join(__dirname,"../public","survey.html"));
});

}


