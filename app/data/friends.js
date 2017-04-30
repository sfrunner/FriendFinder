$(document).ready(function(){
    $("#myModal").hide();
    var questionValueArray = ["","","","","","","","","",""];
    var finalValue = 0;
    $(".btn-info").on("click", function(event){
        var i = parseInt(event.target.classList[2].replace("question",""));
        questionValueArray[i-1] = {
                    questionNumber: i,
                    value: event.target.innerHTML
        };
        console.log(questionValueArray.value);
    });
    $("#submit-btn").on("click", function(event){
        if(questionValueArray.indexOf("") !== -1){
            console.log("Cannot Submit");
        }
        else{
            //Post call
            console.log(finalValue);
            var newFriendData = {
                name: $("#name").val().trim(),
                photoURL: $("#photo-url").val().trim(),
                values: questionValueArray,
            }
            console.log(newFriendData);
           $.post("/api/friends", newFriendData).done(function(data){
					console.log(data);
                    var myModal = $("<div>");
                    var modalContent = $("<div>");
                    var closeBTN = $("<span>");
                    var modalText;
                    myModal.attr("id","myModal");
                    myModal.attr("class","modal");
                    modalContent.attr("class", "modal-content");
                    closeBTN.attr("class","close");
                    closeBTN.html("&times;");
                    if(data === "Not enough friends in list"){
                        modalText = "<h2>You are the first user. Sorry we do not have enough data to compile a best match</h2>";
                    }
                    else{
                        modalText = "<h1>Your Best Match</h1><br><h2>"+ data.name + "</h2><br><img id='resultImg' src='" + data.photoURL + "' alt='" + data.name + "'>";
                    }
                    modalContent.prepend(closeBTN);
                    modalContent.append(modalText);
                    myModal.append(modalContent);
                    $(".container-fluid").prepend(myModal);
         });
        finalValue = 0;
        }
    });
    $(document).on("click",".close", function(){
        $("#myModal").remove();
    });
});