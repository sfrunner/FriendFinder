module.exports = function(app,path){
    app.get("/", function(request, response){
        //Had to replace DIRNAME with some changes as was pointing to routing file
        response.sendFile(path.join(__dirname.replace("routing",""),"public","home.html"));
    });

    app.get("/survey", function(request, response){
        response.sendFile(path.join(__dirname,"../public","survey.html"));
    });
}


