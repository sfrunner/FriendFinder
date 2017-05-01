$(document).ready(function(){
    var questionValueArray = ["","","","","","","","","",""];
    var finalValue = 0;
    $(".btn-info").on("click", function(event){
        var i = parseInt(event.target.classList[2].replace("question",""));
        questionValueArray[i-1] = {
            questionNumber: i,
            value: event.target.innerHTML
        };
    });

    $("#submit-btn").on("click", function(event){
        if(questionValueArray.indexOf("") !== -1){
            console.log("Please Answer All Questions!");
            modal("Please Make Sure All Questions Are Answered!");
        }
        else{
            //Post call
            var newFriendData = {
                name: $("#name").val().trim(),
                photoURL: $("#photo-url").val().trim(),
                value: questionValueArray,
            }
           $.post("/api/friends", newFriendData).done(function(data){
                var modalText;
                if(data === "Not enough friends in list"){
                    modalText = "<h2>You are the first user. Sorry we do not have enough data to compile a best match</h2>";
                }
                else{
                    modalText = "<h1>Your Best Match</h1><br><h2>"+ data.name + "</h2><br><img id='resultImg' src='" + data.photoURL + "' alt='" + data.name + "'>";
                }
                modal(modalText);
            });
            finalValue = 0;
            $("#name").val("");
            $("#photo-url").val("");
        }
    });
    //Close Modal Event Listener
    $(document).on("click",".close", function(){
        $("#myModal").remove();
    });

    //Univeral function for Modal
    function modal(modalText){
        var myModal = $("<div>");
        var modalContent = $("<div>");
        var closeBTN = $("<span>");
        var modalText;
        myModal.attr("id","myModal");
        myModal.attr("class","modal");
        modalContent.attr("class", "modal-content");
        closeBTN.attr("class","close");
        closeBTN.html("&times;");
        modalContent.prepend(closeBTN);
        modalContent.append(modalText);
        myModal.append(modalContent);
        $(".container-fluid").prepend(myModal);
    }
});