$(document).ready(function(){
    var user, bot;
    var player;
    var startBtn = $("#startBtn");
    var board = $(".board");
    var radioValue = $("input[name=playerValue]:checked");
    var setUp = $(".setUp");
    
    startBtn.click(pickSign);
    $("input[type=text]").click(play);


    // FUNCTIONS

    function play(){
        var id = $(`#${this.id}`);
        var random = Math.floor(Math.random() * 9) + 1;
        var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        if (user == "X") {
            bot = "O";
            id.val(user).attr("disabled", true);
            $(`#${random}`).val(bot).attr("disabled", true);
            console.log($(`#${random}`).val("O").attr("disabled", true));
        } else if (user=="O") {
            bot = "X";
            $(`#${random}`).val(bot).attr("disabled", true);
            id.val(user);
            console.log($(`#${random}`).val("X").attr("disabled", true));
        }

        /*  if (player == user) {
                       console.log("User turn");
                       player = bot;
                   } else {
                       $(`#${random}`).val(bot);
                       console.log("bot turn");
                       
                       player = user;
                   }
        
        id.val(player);
        id.attr("disabled", true); */

        win();


    }

    function pause() {
        
    }

    function pickSign() {
        user = $("input[name=playerValue]:checked").val();

        // if user is X, user goes first. if bot is X, bot goes first


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