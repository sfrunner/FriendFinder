module.exports = function(app,path){
var friendsArray = [];
var newFriendFinalValue = 0;
var lowestValue;
var recommendedFriend;

app.get("/api/friends", function(req, res){
    res.json(friendsArray);
});


app.post("/api/friends", function(req, res){
    newFriend = req.body;
    
    //Sum up Values
    for(var a = 0; a < req.body.values; a++){
        newFriendFinalValue += parseInt(req.body.value[i]);
    }
   if(friendsArray.length >= 1){
    for(var i = 0; i < friendsArray.length; i++){
        var pastUserScore = parseInt(friendsArray[i].finalScore);
        var differenceValue = Math.abs(newFriendFinalValue - pastUserScore);
        if(differenceValue <= lowestValue || lowestValue == null){
            lowestValue = differenceValue;
            recommendedFriend = friendsArray[i];
        }
}
    console.log(recommendedFriend.name);
    res.send(recommendedFriend);
   }
   else{
       console.log("Not enough users to provide answer");
       res.send("Not enough friends in list");
   }
   friendsArray.push(req.body);
   lowestValue = null;
   newFriendFinalValue = 0;
   recommendedFriend = "";
});
}