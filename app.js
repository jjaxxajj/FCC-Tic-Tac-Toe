$(document).ready(function(){

    var user = 'X';
    var bot = 'O';
    var player = bot;
    var userArr = [];
    var botArr = [];
    var row=[], col=[], dia=[];


    row[0] = ["a", "b", "c"];
    row[1] = ["d", "e", "f"];
    row[2] = ["g", "h", "i"];
    col[0] = ["a", "d", "g"];
    col[1] = ["b", "e", "h"];
    col[2] = ["c", "f", "i"];
    dia[0] = ["a", "e", "f"];
    dia[2] = ["c", "e", "g"];

    var testArr = ["a", "f", "e", "d"];
    var newArr = [];
    if (testArr.toString() === (row[1].toString() || row[2].toString())) {
        console.log("WINNING")
    }


        console.log(newArr);

        if (newArr.length === 3) {
            console.log("FOUND A WIN!");
        }



    $("input[type=text]").click(boxClicked);

    function boxClicked(){

        var id = $(`#${this.id}`);
        
        if (player == user) {
            botArr.push(this.id);
            player = bot;
        } else {
            userArr.push(this.id);
            player = user;
        }

        userArr.sort();
        botArr.sort();

        console.log(botArr);
        console.log(userArr);
        var marked=id.val(player);
        id.attr("disabled", true);



    }

});