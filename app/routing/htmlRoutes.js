module.exports = function(app,path){
    app.get("/", function(request, response){
        //Had to replace DIRNAME with some changes as was pointing to routing file
        // __dirname is the full path to the directory you're currently in - if this repo was in the root directory __dirname would be `/app/routing`
        // instead of replacing it with an empty string, you can use another path method - `resolve`. resolve can take any number of path segments (relative and absolute) and resolve
        // them into an absolute url.
        // response.sendFile(path.join(__dirname.replace("routing",""),"public","home.html"));
        // so you could have done something like the following:
        response.sendFile(path.resolve(__dirname, "../public/home.html"));

        // Also, check out the following link for the subtle difference between resolve and join --> http://stackoverflow.com/questions/35048686/difference-between-path-resolve-and-path-join-invocation

    });

    app.get("/survey", function(request, response){
        response.sendFile(path.join(__dirname,"../public","survey.html"));
    });
}


