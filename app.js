$(document).ready(function(){
    var user = 'X';
    var bot = 'O';
    var player = bot;
    $("input[type=text]").click(boxClicked);

    function boxClicked(){
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

});

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
        }
    function gameOver() {
        $("input[type='text']").attr("disabled", true);
    }
}