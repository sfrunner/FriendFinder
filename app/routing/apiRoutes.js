module.exports = function(app,path){
var friendsArray = [];
var lowestValue;
var recommendedFriend;

app.get("/api/friends", function(req, res){
    res.json(friendsArray);
});

app.post("/api/friends", function(req, res){
    newFriend = req.body;
   if(friendsArray.length >= 1){
    for(var i = 0; i < friendsArray.length; i++){
        var pastUserScore = parseInt(friendsArray[i].finalScore);
        var differenceValue = Math.abs(parseInt(newFriend.finalScore) - pastUserScore);
        if(differenceValue <= lowestValue || lowestValue == null){
            lowestValue = differenceValue;
            recommendedFriend = friendsArray[i];
            friendsArray[i].recommendFriendForRecentUser = "yes";
        }
}
    console.log(recommendedFriend.name);
    res.send("good job");
   }
   else{
       console.log("Not enough users to provide answer");
   }
   friendsArray.push(req.body);
   lowestValue = null;
   recommendedFriend = "";
});
}