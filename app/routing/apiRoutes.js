module.exports = function(app,path){
var friendsArray = [];

app.get("/api/friends", function(req, res){
    res.json(friendsArray);
});

app.post("/api/friends", function(req, res){
    newFriend = req.body;
    friendsArray.push(req.body);
   
});
}