function addition() {
    var ourAnswer = document.getElementById("answer").value;
    if (isNaN(ourAnswer)) {
        document.getElementById("output").innerHTML = "wtf! bitch " + ourAnswer +" is not a number";
    } else {
        if (correctAns == ourAnswer) {
            document.getElementById("output").innerHTML = "wow man, correct! " + numOne + "+" + numTwo + "is equals to " + correctAns;
        } else {
            document.getElementById("output").innerHTML = "NOOB,"  + numOne + "+" + numTwo + "is equals to "+ correctAns +" not " + ourAnswer ;        }
    }

    
}

function newQuestion() {
    document.getElementById("output").innerHTML = ""
  document.getElementById("answer").value = ""
    numOne = Math.floor(Math.random()*10) + 1;
    numTwo = Math.floor(Math.random()*10) + 1;
    document.getElementById("demo").innerHTML = numOne + "+" + numTwo;
    correctAns = numOne + numTwo ;
}
