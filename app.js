$(document).ready(function () {
    var startBtn = $("#startBtn");
    var resetBtn = $("#resetBtn");
    var board = $(".board");
    var setUp = $(".setUp");
    var radioValue = $("input[name=playerValue]:checked");

    var user, bot, player;
    var arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];

    startBtn.click(pickSign);
    $("input[type=text]").click(play);
    resetBtn.click(reset);


    // FUNCTIONS
    function play() {
        
        var id = $(`#${this.id}`);
        var random = Math.floor(Math.random() * arr.length) + 1;
        player = user;
        
        if (user == "X") {
            bot = "O";
        } else if (user == "O") {
            bot = "X";
        }
        
        let uIndex = arr.indexOf(this.id);

        id.val(user).attr("disabled", true);
        arr.splice(uIndex, 1);

        if (win() === false) {
            setTimeout(function () {

                $(`#${arr[random]}`).val(bot).attr("disabled", true);
                if (arr[random] == undefined) {
                    random = Math.floor(Math.random() * arr.length - 1) + 1;
                    $(`#${arr[random]}`).val(bot).attr("disabled", true);
                }
                let bIndex = arr.indexOf(arr[random]);
                arr.splice(bIndex, 1);
            }, 500);
        } 
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

        if ($("#a").val() === "X" && $("#b").val() === "X" && $("#c").val() === 'X') {
            console.log("X WIN");
            gameOver();
            return true;
        } else if ($("#a").val() === "O" && $("#b").val() === "O" && $("#c").val() === "O") {
            console.log("O WIN");
            gameOver();
            return true;
        } else if ($("#d").val() === "X" && $("#e").val() === "X" && $("#f").val() === "X") {
            console.log("X WIN");
            gameOver();
            return true;
        } else if ($("#d").val() === "O" && $("#e").val() === "O" && $("#f").val() === "O") {
            console.log("O WIN");
            gameOver();
            return true;
        } else if ($("#g").val() === "X" && $("#h").val() === "X" && $("#i").val() === "X") {
            console.log("X WIN");
            gameOver();
            return true;
        } else if ($("#g").val() === "O" && $("#h").val() === "O" && $("#i").val() === "O") {
            console.log("O WIN");
            gameOver();
            return true;

            // column

        } else if ($("#a").val() === "X" && $("#d").val() === "X" && $("#g").val() === "X") {
            console.log("X WIN");
            gameOver();
            return true;
        } else if ($("#a").val() === "O" && $("#d").val() === "O" && $("#g").val() === "O") {
            console.log("O WIN");
            gameOver();
            return true;
        } else if ($("#b").val() === "X" && $("#e").val() === "X" && $("#h").val() === "X") {
            console.log("X WIN");
            gameOver();
            return true;
        } else if ($("#b").val() === "O" && $("#e").val() === "O" && $("#h").val() === "O") {
            console.log("O WIN");
            gameOver();
            return true;
        } else if ($("#c").val() === "X" && $("#f").val() === "X" && $("#i").val() === "X") {
            console.log("X WIN");
            gameOver();
            return true;
        } else if ($("#c").val() === "O" && $("#f").val() === "O" && $("#i").val() === "O") {
            console.log("O WIN");
            gameOver();
            return true;


            // diagonal

        } else if ($("#a").val() === "X" && $("#e").val() === "X" && $("#i").val() === "X") {
            console.log("X WIN");
            gameOver();
            return true;
        } else if ($("#a").val() === "O" && $("#e").val() === "O" && $("#i").val() === "O") {
            console.log("O WIN");
            gameOver();
            return true;
        } else if ($("#c").val() === "X" && $("#e").val() === "X" && $("#g").val() === "X") {
            console.log("X WIN");
            gameOver();
            return true;
        } else if ($("#c").val() === "O" && $("#e").val() === "O" && $("#g").val() === "O") {
            console.log("O WIN");
            gameOver();
            return true;
        }

        function gameOver() {
            $("input[type='text']").attr("disabled", true);

            setTimeout(function(){
                $("#resetBtn").fadeIn(400);
            }, 300);

        }

        return false;
        
    }

    function reset(){
            arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];

            for (var i = 0; i < arr.length; i++) {
                $("#" + arr[i]).val("");
                $("#" + arr[i]).attr("disabled", false);
                resetBtn.fadeOut(200);
            }
    }
});
