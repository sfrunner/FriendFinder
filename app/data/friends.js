$(document).ready(function(){
    var questionValueArray = ["","","","","","","","","",""];
    var finalValue = 0;
    $(".btn-info").on("click", function(event){
        var i = parseInt(event.target.classList[2].replace("question",""));
        questionValueArray[i-1] = {
                    questionNumber: i,
                    value: event.target.innerHTML
        };
        console.log(questionValueArray);
        console.log(questionValueArray.length);
    });
    $("#submit-btn").on("click", function(event){
        if(questionValueArray.indexOf("") !== -1){
            console.log("Cannot Submit");
        }
        else{
            //Post call
            $.each(questionValueArray, function(n,val){
                finalValue += parseInt(val.value);
            });
            console.log(finalValue);
            var newFriendData = {
                name: $("#name").val().trim(),
                photoURL: $("#photo-url").val().trim(),
                finalScore: finalValue
            }
            console.log(newFriendData);
           $.post("/api/friends", newFriendData).done(function(data){
					console.log(danewFriendDatata);
					console.log("Submitted your reservation request");
			});
        }
    });
});