var digit = getRandomInt(0, 100),
    last,
    try1 = 10,
    win = false;

document.getElementById("run").addEventListener("click", run);
document.getElementById("reset").addEventListener("click", reset);

function chekResult(userValue){
    var str = "";
    if (userValue == digit) {
        str =  "you guessed it. Congratulations!";
        win = true;
    } else if (!last){
        str =  userValue + " the first mistake";
    } else if (last > Math.abs(userValue - digit) ){
        str =  userValue + " warmer";
    } else{
        str =  userValue + " colder";
    };
    last = Math.abs(userValue - digit);
    //try1--;
    return str;

};
function showResult(str){
    var ul = document.getElementById("result"),
        li = document.createElement("li"),
        text = document.createTextNode(str);
    li.appendChild(text);
    ul.appendChild(li);
    document.querySelector("h1 span").innerHTML = try1;
};
function clear(){
    try1 = 10;
    win = false;
    last = undefined;
    document.querySelector("h1 span").innerHTML = try1;
    document.getElementById("result").innerHTML = "";
};
function run(){
    var value = +document.getElementById("input-digit").value,
        str;
    if (win){
        return;
    }
    try1--;
    if (try1 < 0 ) return;
    if ( try1 > 0){
        str = chekResult(value);
    } else {


        str = "Attempts have ended. Random number is " + digit;
    };
    showResult(str);
};
function reset(){
    digit = getRandomInt(0, 100);
    clear();
};
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max + 1);
    return Math.floor(Math.random() * (max - min)) + min;
}
