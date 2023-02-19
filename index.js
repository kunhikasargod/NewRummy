let firstNum = 0
let secondNum = 0
let thirdNum = 0
let result =0

function firstValue () {
    firstNum = Math.floor(Math.random() * 9 + 22)
    document.getElementById('label1').innerHTML = firstNum
}
function secondValue () {
    secondNum = Math.floor(Math.random() * 9 + 22)
    document.getElementById('label2').innerHTML = secondNum
}
function thirdValue () {
    thirdNum = Math.floor(Math.random() * 9 + 22)
    document.getElementById('label3').innerHTML = thirdNum
}

function findSum () {
    result = firstNum + secondNum + thirdNum;
    document.getElementById('resultNum').innerHTML = result;
        if (result <= 89) {
            document.getElementById('message').innerHTML = `${result} is good, but not enough to win! Better luck next time!!`
        } else {
            document.getElementById('message').innerHTML = `Congrats! You the Lucky. ${result} is huge! You Won the Blackjack`
        }
}
    

function reset () {
    firstNum = 00
    document.getElementById('label1').innerHTML = firstNum
    secondNum = 00
    document.getElementById('label2').innerHTML = secondNum
    thirdNum = 00
    document.getElementById('label3').innerHTML = thirdNum
    result = 00
    document.getElementById('resultNum').innerHTML = result
    document.getElementById('message').innerHTML = "Good Luck!"
}







