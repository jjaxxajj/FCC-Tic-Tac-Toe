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
        if (!win(player)) {
            player = user;
            var id = $(`#${this.id}`);
            id.val(user).attr("disabled", true);
            var uIndex = arr.indexOf(this.id); // user index to splice picked cell from array.
            arr.splice(uIndex, 1);
        }

        if (!win(player)) {
            player = bot;
            var random = Math.floor(Math.random() * arr.length) + 1;
            setTimeout(function () {
                $(`#${arr[random]}`).val(bot).attr("disabled", true);
                if (arr[random] == undefined) {
                    random = Math.floor(Math.random() * arr.length - 1) + 1;
                    $(`#${arr[random]}`).val(bot).attr("disabled", true);
                }
                var bIndex = arr.indexOf(arr[random]);
                arr.splice(bIndex, 1);
            }, 500);
        }

        if (arr.length === 0 && (!win(player))) {
            gameOver();
            $("#tieGame").fadeIn(300);
            console.log("TIE");
        }
    }

    function pickSign() {
        user = $("input[name=playerValue]:checked").val();

        if (user == "X") {
            bot = "O";
        } else {
            bot = "X";
        }

        setUp.fadeOut(100);
        setTimeout(function () {
            board.fadeIn(500);
        }, 200);

    }

    function win(player) {
        // rows

        if (($("#a").val() === player && $("#b").val() === player && $("#c").val() === player) ||
            ($("#d").val() === player && $("#e").val() === player && $("#f").val() === player) ||
            ($("#g").val() === player && $("#h").val() === player && $("#i").val() === player) ||
            ($("#a").val() === player && $("#d").val() === player && $("#g").val() === player) ||
            ($("#b").val() === player && $("#e").val() === player && $("#h").val() === player) ||
            ($("#c").val() === player && $("#f").val() === player && $("#i").val() === player) ||
            ($("#a").val() === player && $("#e").val() === player && $("#i").val() === player) ||
            ($("#c").val() === player && $("#e").val() === player && $("#g").val() === player)) {
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
            $("#tieGame").fadeOut(200);
            resetBtn.fadeOut(200);
            $(".board").css("padding-bottom", "10px");

        }
    }

    function gameOver() {
        $("input[type='text']").attr("disabled", true);

        setTimeout(function () {
            $("#resetBtn").fadeIn(300);
            $(".board").css("padding-bottom", "80px");
        }, 300);

        resetBtn.click(reset);
    }
});
