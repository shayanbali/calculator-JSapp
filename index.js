let displayText = "";
let firstOpration = false
let firstNum = 0
let secondNum = 0
let lastOperator = ''
document.getElementById('txt-area').value = ""

function numButton(number) {
    displayText += number
    document.getElementById('txt-area').value = displayText
    
    // console.log(displayText)
    
}

function operation(operator) {
    let a = document.getElementById('txt-area').value
    document.getElementById('txt-area').value = ""
    displayText = ''
    if (firstOpration == false) {
        firstNum = parseInt(a, 10)
        firstOpration = true
        lastOperator = operator
        console.log(true)
    } else {
        secondNum = parseInt(a, 10)
        equalButton()
        lastOperator = operator
        if (lastOperator == '=') {
            document.getElementById('txt-area').value = firstNum
        }
    }
       
}

function equalButton() {
    if (lastOperator == '+') {
        firstNum += secondNum
    } else if (lastOperator == '-') {
        firstNum -= secondNum
    } else if (lastOperator == '*') {
        firstNum *= secondNum
    } else if (lastOperator == '/') {
        firstNum /= secondNum
    }
}

function clearButtons() {
    displayText = "";
    firstOpration = false
    firstNum = 0
    secondNum = 0
    lastOperator = ''
    document.getElementById('txt-area').value = ""
}