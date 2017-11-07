$(document).ready(function () {
    var user, bot;
    var player;
    var startBtn = $("#startBtn");
    var board = $(".board");
    var radioValue = $("input[name=playerValue]:checked");
    var setUp = $(".setUp");
    var arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];

    startBtn.click(pickSign);
    $("input[type=text]").click(play);


    // FUNCTIONS

    function play() {
        var id = $(`#${this.id}`);
        var random = Math.floor(Math.random() * arr.length) + 1;

        if (user == "X") {
            bot = "O";

            let uIndex = arr.indexOf(this.id);
            id.val(user).attr("disabled", true);
            arr.splice(uIndex, 1);


            setTimeout(function(){
                $(`#${arr[random]}`).val(bot).attr("disabled", true);
                if (arr[random]==undefined) {
                    random = Math.floor(Math.random() * arr.length-1) + 1;
                    $(`#${arr[random]}`).val(bot).attr("disabled", true);
                    
                }
                let bIndex = arr.indexOf(arr[random]);
                arr.splice(bIndex, 1);
            }, 500);

        } else if (user == "O") {
            bot = "X";
            $(`#${random}`).val(bot).attr("disabled", true);
            id.val(user);
            console.log($(`#${random}`).val("X").attr("disabled", true));
        }

        win();

    }

    function pickSign() {
        user = $("input[name=playerValue]:checked").val();

        if (user == "X") {
            bot = "O";
            user = "X";
        } else {
            bot = "X";
            user = "O";
        }

        setUp.fadeOut(100);
        setTimeout(function () {
            board.fadeIn(500);
        }, 200);

    }

    function win(player) {
        // rows

        if ($("#a").val() === "X" && $("#b").val() === "X" && $("#c").val() === "X") {
            console.log("X WIN");
            gameOver();
        } else if ($("#a").val() === "O" && $("#b").val() === "O" && $("#c").val() === "O") {
            console.log("O WIN");
            gameOver();
        } else if ($("#d").val() === "X" && $("#e").val() === "X" && $("#f").val() === "X") {
            console.log("X WIN");
            gameOver();
        } else if ($("#d").val() === "O" && $("#e").val() === "O" && $("#f").val() === "O") {
            console.log("O WIN");
            gameOver();
        } else if ($("#g").val() === "X" && $("#h").val() === "X" && $("#i").val() === "X") {
            console.log("X WIN");
            gameOver();
        } else if ($("#g").val() === "O" && $("#h").val() === "O" && $("#i").val() === "O") {
            console.log("O WIN");
            gameOver();

            // column

        } else if ($("#a").val() === "X" && $("#d").val() === "X" && $("#g").val() === "X") {
            console.log("X WIN");
            gameOver();
        } else if ($("#a").val() === "O" && $("#d").val() === "O" && $("#g").val() === "O") {
            console.log("O WIN");
            gameOver();
        } else if ($("#b").val() === "X" && $("#e").val() === "X" && $("#h").val() === "X") {
            console.log("X WIN");
            gameOver();
        } else if ($("#b").val() === "O" && $("#e").val() === "O" && $("#h").val() === "O") {
            console.log("O WIN");
            gameOver();
        } else if ($("#c").val() === "X" && $("#f").val() === "X" && $("#i").val() === "X") {
            console.log("X WIN");
            gameOver();
        } else if ($("#c").val() === "O" && $("#f").val() === "O" && $("#i").val() === "O") {
            console.log("O WIN");
            gameOver();


            // diagonal

        } else if ($("#a").val() === "X" && $("#e").val() === "X" && $("#i").val() === "X") {
            console.log("X WIN");
            gameOver();
        } else if ($("#a").val() === "O" && $("#e").val() === "O" && $("#i").val() === "O") {
            console.log("O WIN");
            gameOver();
        } else if ($("#c").val() === "X" && $("#e").val() === "X" && $("#g").val() === "X") {
            console.log("X WIN");
            gameOver();
        } else if ($("#c").val() === "O" && $("#e").val() === "O" && $("#g").val() === "O") {
            console.log("O WIN");
            gameOver();
        }

        function gameOver() {
            $("input[type='text']").attr("disabled", true);
        }
    }

});