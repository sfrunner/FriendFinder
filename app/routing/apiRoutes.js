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
        console.log("Someone has connected to Survey!");
        //Sum up  newFriend Values
        for(var a = 0; a < newFriend.value.length; a++){
            console.log(req.body.value[a].value);
            newFriendFinalValue += parseInt(newFriend.value[a].value);
        }

        //If Length of Friend Array criteria as cannot find difference of first user only
        if(friendsArray.length >= 1){
            //Summing up Past Users
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
            res.send(recommendedFriend);
        }
        //Not enough users to find compatible user
        else{
            console.log("Not enough users to provide answer");
            res.send("Not enough friends in list");
        }

        //Push to Friends Array and Reset Values for Next User Submission
        friendsArray.push(req.body);
        lowestValue = null;
        newFriendFinalValue = 0;
        recommendedFriend = "";
    });
}