function dicesRoll(num,dice) {
    if(num === 0){
        document.querySelector(dice+" .c11").style.backgroundColor = "white";
        document.querySelector(dice+" .c12").style.backgroundColor = "white";
        document.querySelector(dice+" .c13").style.backgroundColor = "white";
        document.querySelector(dice+" .c21").style.backgroundColor = "white";
        document.querySelector(dice+" .c22").style.backgroundColor = "white";
        document.querySelector(dice+" .c23").style.backgroundColor = "white";
        document.querySelector(dice+" .c31").style.backgroundColor = "white";
        document.querySelector(dice+" .c32").style.backgroundColor = "white";
        document.querySelector(dice+" .c33").style.backgroundColor = "white";
    }
    if(num === 1){
        document.querySelector(dice+" .c11").style.backgroundColor = "red";
        document.querySelector(dice+" .c12").style.backgroundColor = "red";
        document.querySelector(dice+" .c13").style.backgroundColor = "red";
        document.querySelector(dice+" .c21").style.backgroundColor = "red";
        document.querySelector(dice+" .c22").style.backgroundColor = "white";
        document.querySelector(dice+" .c23").style.backgroundColor = "red";
        document.querySelector(dice+" .c31").style.backgroundColor = "red";
        document.querySelector(dice+" .c32").style.backgroundColor = "red";
        document.querySelector(dice+" .c33").style.backgroundColor = "red";
    }
    else if(num === 2){
        document.querySelector(dice+" .c11").style.backgroundColor = "red";
        document.querySelector(dice+" .c12").style.backgroundColor = "white";
        document.querySelector(dice+" .c13").style.backgroundColor = "red";
        document.querySelector(dice+" .c21").style.backgroundColor = "red";
        document.querySelector(dice+" .c22").style.backgroundColor = "red";
        document.querySelector(dice+" .c23").style.backgroundColor = "red";
        document.querySelector(dice+" .c31").style.backgroundColor = "red";
        document.querySelector(dice+" .c32").style.backgroundColor = "white";
        document.querySelector(dice+" .c33").style.backgroundColor = "red";
    }
    else if(num === 3){
        document.querySelector(dice+" .c11").style.backgroundColor = "red";
        document.querySelector(dice+" .c12").style.backgroundColor = "white";
        document.querySelector(dice+" .c13").style.backgroundColor = "red";
        document.querySelector(dice+" .c21").style.backgroundColor = "red";
        document.querySelector(dice+" .c22").style.backgroundColor = "white";
        document.querySelector(dice+" .c23").style.backgroundColor = "red";
        document.querySelector(dice+" .c31").style.backgroundColor = "red";
        document.querySelector(dice+" .c32").style.backgroundColor = "white";
        document.querySelector(dice+" .c33").style.backgroundColor = "red";
    }
    else if(num === 4){
        document.querySelector(dice+" .c11").style.backgroundColor = "white";
        document.querySelector(dice+" .c12").style.backgroundColor = "red";
        document.querySelector(dice+" .c13").style.backgroundColor = "white";
        document.querySelector(dice+" .c21").style.backgroundColor = "red";
        document.querySelector(dice+" .c22").style.backgroundColor = "red";
        document.querySelector(dice+" .c23").style.backgroundColor = "red";
        document.querySelector(dice+" .c31").style.backgroundColor = "white";
        document.querySelector(dice+" .c32").style.backgroundColor = "red";
        document.querySelector(dice+" .c33").style.backgroundColor = "white";
    }

    else if(num == 5){
        document.querySelector(dice+" .c11").style.backgroundColor = "white";
        document.querySelector(dice+" .c12").style.backgroundColor = "red";
        document.querySelector(dice+" .c13").style.backgroundColor = "white";
        document.querySelector(dice+" .c21").style.backgroundColor = "red";
        document.querySelector(dice+" .c22").style.backgroundColor = "white";
        document.querySelector(dice+" .c23").style.backgroundColor = "red";
        document.querySelector(dice+" .c31").style.backgroundColor = "white";
        document.querySelector(dice+" .c32").style.backgroundColor = "red";
        document.querySelector(dice+" .c33").style.backgroundColor = "white";
    }

    else if(num == 6){
        document.querySelector(dice+" .c11").style.backgroundColor = "white";
        document.querySelector(dice+" .c12").style.backgroundColor = "white";
        document.querySelector(dice+" .c13").style.backgroundColor = "white";
        document.querySelector(dice+" .c21").style.backgroundColor = "red";
        document.querySelector(dice+" .c22").style.backgroundColor = "red";
        document.querySelector(dice+" .c23").style.backgroundColor = "red";
        document.querySelector(dice+" .c31").style.backgroundColor = "white";
        document.querySelector(dice+" .c32").style.backgroundColor = "white";
        document.querySelector(dice+" .c33").style.backgroundColor = "white";
    }
}
var score1 = 0;
var score2 = 0;
var count = 0;
function generate() {
    document.querySelector(".Dice1").classList.remove("wins");
    document.querySelector(".Dice2").classList.remove("wins");
    var num1 = Math.floor(Math.random() * 6) + 1;
    var num2 = Math.floor(Math.random() * 6) + 1;
    dicesRoll(num1, ".Dice1");
    dicesRoll(num2, ".Dice2");

    if(num1 > num2){
        score1 += 1;
        document.querySelector(".Score1").innerHTML = score1;
        document.querySelector(".Dice1").classList.add("wins");
        document.querySelector(".Dice2").classList.remove("wins");
    }
    else if(num2 > num1){
        score2 += 1;
        document.querySelector(".Score2").innerHTML = score2;
        document.querySelector(".Dice2").classList.add("wins");
        document.querySelector(".Dice1").classList.remove("wins");
    }
    else{
        document.querySelector(".Dice1").classList.add("wins");
        document.querySelector(".Dice2").classList.add("wins");
    }

    if (count === 9) {
        if (score1 > score2) {
            document.querySelector(".Count").innerHTML = "Player1 won the Game!!!";
            document.querySelector(".Count").style.color = "rgba(112, 237, 139, 0.64)";
        }
        else if (score2 > score1) {
            document.querySelector(".Count").innerHTML = "Player2 won the Game!!!";
            document.querySelector(".Count").style.color = "rgba(106, 113, 237, 0.992)";
        }
        else {
            document.querySelector(".Count").innerHTML = "It's a Tie!";
            document.querySelector(".Count").style.color = "white";
        }
        document.querySelector(".reset").classList.add("hidden");
        document.querySelector(".roll").classList.add("hidden");
        setTimeout(() => {
            document.querySelector(".restart").style.visibility = "visible";
        }, 500);
    }
    else {
        count += 1;
        document.querySelector(".Count").innerHTML = count + " / 10";
    }
    
}

function reset() {
    document.querySelector(".Dice1").classList.add("hidden");
    document.querySelector(".Dice2").classList.add("hidden");
    document.querySelector(".Count").classList.add("hidden");

    setTimeout(() => {
        score1 = 0;
        score2 = 0;
        count = 0;

        document.querySelector(".Score1").innerHTML = score1;
        document.querySelector(".Score2").innerHTML = score2;
        dicesRoll(0, ".Dice1");
        dicesRoll(0, ".Dice2");
        document.querySelector(".Dice1").classList.remove("wins");
        document.querySelector(".Dice2").classList.remove("wins");
        document.querySelector(".Count").innerHTML = "0 / 10";
        document.querySelector(".Count").style.color = "white";

        document.querySelector(".reset").classList.remove("hidden");
        document.querySelector(".roll").classList.remove("hidden");
        document.querySelector(".restart").style.visibility = "hidden";
        document.querySelector(".reset").style.visibility = "visible";
        document.querySelector(".roll").style.visibility = "visible";

        document.querySelector(".Dice1").classList.remove("hidden");
        document.querySelector(".Dice2").classList.remove("hidden");
        document.querySelector(".Count").classList.remove("hidden");
    }, 500);
}
