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

        if (win(bot) === false) {
            id.val(user).attr("disabled", true);
            let uIndex = arr.indexOf(this.id); // user index to splice picked cell from array.
            arr.splice(uIndex, 1);
            player = bot;
        }

        if (win(user) === false) {
            setTimeout(function () {

                $(`#${arr[random]}`).val(bot).attr("disabled", true);
                if (arr[random] == undefined) {
                    random = Math.floor(Math.random() * arr.length - 1) + 1;
                    $(`#${arr[random]}`).val(bot).attr("disabled", true);
                }
                let bIndex = arr.indexOf(arr[random]);
                arr.splice(bIndex, 1);
            }, 500);
            player = user;
        }

        if (arr.length == 0 && win() === false) {
            gameOver();
            console.log("TIE");
            $("#tieGame").fadeToggle(100, "linear");
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

        if ($("#a").val() === player && $("#b").val() === player && $("#c").val() === player) {
            console.log(player + " WIN");
            gameOver();
            return true;
        } else if ($("#d").val() === player && $("#e").val() === player && $("#f").val() === player) {
            console.log(player + " WIN");
            gameOver();
            return true;
        } else if ($("#g").val() === player && $("#h").val() === player && $("#i").val() === player) {
            console.log(player + " WIN");
            gameOver();
            return true;

            // column

        } else if ($("#a").val() === player && $("#d").val() === player && $("#g").val() === player) {
            console.log(player + " WIN");
            gameOver();
            return true;
        } else if ($("#b").val() === player && $("#e").val() === player && $("#h").val() === player) {
            console.log(player + " WIN");
            gameOver();
            return true;
        } else if ($("#c").val() === player && $("#f").val() === player && $("#i").val() === player) {
            console.log(player + " WIN");
            gameOver();
            return true;

            // diagonal

        } else if ($("#a").val() === player && $("#e").val() === player && $("#i").val() === player) {
            console.log(player + " WIN");
            gameOver();
            return true;
        } else if ($("#c").val() === player && $("#e").val() === player && $("#g").val() === player) {
            console.log(player + " WIN");
            gameOver();
            return true;
        }
        return false;
    }

    function reset() {
        arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];

        for (var i = 0; i < arr.length; i++) {
            $("#" + arr[i]).val("");
            $("#" + arr[i]).attr("disabled", false);
            resetBtn.fadeOut(200);
        }
    }

    function gameOver() {
        $("input[type='text']").attr("disabled", true);

        setTimeout(function () {
            $("#resetBtn").fadeIn(400);
        }, 300);

        resetBtn.click(reset);
    }
});
