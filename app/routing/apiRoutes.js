module.exports = function(app,path){
    var friendsArray = [];
    // the friendsArray should stay out on this level of the scope, but the rest of these variables should 
    // probably just be moved into your post handler. Added benefit of that is that you don't need to worry
    // about resetting their values at the end of the handler. The less state you have to maintain the better 👌
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
                // how your code is currently structured, the first time this line is run will result in the `lowestValue == null` returning
                // true because it's comparing undefined to null using type coercion checking. This is pretty nifty, but it's not a point
                // that every JS developer will understand.
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