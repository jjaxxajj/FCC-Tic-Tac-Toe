$(document).ready(function(){

    var user = 'X';
    var bot = 'O';
    var player = bot;

    $("input[type=text").click(boxClicked);

    function boxClicked(){
        var id = $(`#${this.id}`);
        currPlayer();
        var marked=id.val(player);
        id.attr("disabled", true);

    }

    function currPlayer(){
        if (player==user) {
            player = bot;
        } else {
            player = user;
        }
    }
});