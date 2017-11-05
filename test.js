

// var testArr = ["a", "f", "e", "d", "h"];

var testArr = ["a", "d", "e", "f", "h"];

function myFunc(testArr) {
    // testArr.sort(); 
    var newArr = [];
    var win = [];

    win = [
        ["a", "b", "c"],
        ["d", "e", "f"], // i should win with this based on testArr win[1]
        ["g", "h", "i"],
        ["a", "d", "g"],
        ["b", "e", "h"],
        ["c", "f", "i"],
        ["a", "e", "f"],
        ["c", "e", "g"]
    ];

    // make a function that returns true if all of arr is found in testArr
    testArr.forEach( (x)=> {
        // console.log(x);
        for(var i = 0; i < win.length; i++) {
            for(var j=0; j < win[i].length; j++) {
                if (x !== win[i][j]) {
                    newArr.push(win[i]);
                }
            }
        }
    });

    // var test2 = win.splice();
    // console.log(test2);
    // console.log(win);
    console.log(newArr);
    
}

myFunc(testArr);