module.exports = function(app,path){
var friendsArray = [];
var newFriendFinalValue = 0;
var pastUserScore = 0;
var lowestValue;
var recommendedFriend;

app.get("/api/friends", function(req, res){
    res.json(friendsArray);
});


app.post("/api/friends", function(req, res){
    newFriend = req.body;
    console.log(newFriend);
    
    //Sum up Values
    for(var a = 0; a < newFriend.value.length; a++){
        console.log(req.body.value[a].value);
        newFriendFinalValue += parseInt(newFriend.value[a].value);
    }
   if(friendsArray.length >= 1){
    for(var i = 0; i < friendsArray.length; i++){
        for(var b = 0; b < friendsArray[i].value.length; b++){
            pastUserScore += parseInt(friendsArray[i].value[b].value);
        }
        var differenceValue = Math.abs(newFriendFinalValue - pastUserScore);
        if(differenceValue <= lowestValue || lowestValue == null){
            lowestValue = differenceValue;
            recommendedFriend = friendsArray[i];
        }
        pastUserScore = 0;
}
    console.log(recommendedFriend.name);
    console.log(newFriendFinalValue);
    console.log(lowestValue);
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