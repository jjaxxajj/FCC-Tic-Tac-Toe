$(document).ready(function(){
    var user, bot;
    var player;
    var startBtn = $("#startBtn");
    var board = $(".board");
    var radioValue = $("input[name=playerValue]:checked");
    var setUp = $(".setUp");

    var random=Math.floor(Math.random() * 9) + 1;
    console.log(random);


    startBtn.click(pickSign);

    $("input[type=text]").click(play);

    function play(){
        var id = $(`#${this.id}`);
        
        if (player == user) {
            player = bot;
        } else {
            player = user;
        }

        id.val(player);
        id.attr("disabled", true);

        win();
    }

    function pickSign() {
        user = $("input[name=playerValue]:checked").val();

        console.log(user);
        if (user == "X") {
            bot = "O";
            user="X";
        } else {
            bot = "X";
            user="O";
        }
        setUp.fadeOut(100);
        setTimeout(function(){
            board.fadeIn(500);
        },200);
        
    }

    function win(player) {
        // rows
        
            if ($("#1").val() === "X" && $("#2").val() === "X" && $("#3").val() === "X") {
                console.log("X WIN");
                gameOver();
            } else if ($("#1").val() === "O" && $("#2").val() === "O" && $("#3").val() === "O") {
                console.log("O WIN");
                gameOver();
            } else if ($("#4").val() === "X" && $("#5").val() === "X" && $("#6").val() === "X") {
                console.log("X WIN");
                gameOver();
            } else if ($("#4").val() === "O" && $("#5").val() === "O" && $("#6").val() === "O") {
                console.log("O WIN");
                gameOver();
            } else if ($("#7").val() === "X" && $("#8").val() === "X" && $("#9").val() === "X") {
                console.log("X WIN");
                gameOver();
            } else if ($("#7").val() === "O" && $("#8").val() === "O" && $("#9").val() === "O") {
                console.log("O WIN");
                gameOver();

            // column

            } else if ($("#1").val() === "X" && $("#4").val() === "X" && $("#7").val() === "X") {
                console.log("X WIN");
                gameOver();
            } else if ($("#1").val() === "O" && $("#4").val() === "O" && $("#7").val() === "O") {
                console.log("O WIN");
                gameOver();
            } else if ($("#2").val() === "X" && $("#5").val() === "X" && $("#8").val() === "X") {
                console.log("X WIN");
                gameOver();
            } else if ($("#2").val() === "O" && $("#5").val() === "O" && $("#8").val() === "O") {
                console.log("O WIN");
                gameOver();
            } else if ($("#3").val() === "X" && $("#6").val() === "X" && $("#9").val() === "X") {
                console.log("X WIN");
                gameOver();
            } else if ($("#3").val() === "O" && $("#6").val() === "O" && $("#9").val() === "O") {
                console.log("O WIN");
                gameOver();
            

            // diagonal

            } else if ($("#1").val() === "X" && $("#5").val() === "X" && $("#9").val() === "X") {
                console.log("X WIN");
                gameOver();
            } else if ($("#1").val() === "O" && $("#5").val() === "O" && $("#9").val() === "O") {
                console.log("O WIN");
                gameOver();
            } else if ($("#3").val() === "X" && $("#5").val() === "X" && $("#7").val() === "X") {
                console.log("X WIN");
                gameOver();
            } else if ($("#3").val() === "O" && $("#5").val() === "O" && $("#7").val() === "O") {
                console.log("O WIN");
                gameOver();
            } 


        function gameOver() {
            $("input[type='text']").attr("disabled", true);
        }
    }

});