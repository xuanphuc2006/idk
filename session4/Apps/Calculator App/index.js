const normalBtns = document.getElementsByClassName("calculate_btn")

function handleClick(event){
    const value = event.target.textContent
    const calculationInput  = document.querySelector(".calc-operation")
    calculationInput.textContent += value
}

function cleareverything( ){
    const calculationInput  = document.querySelector(".calc-operation")
    const Resultdiv  = document.querySelector(".calc-typed")
    calculationInput.textContent = " "
    Resultdiv.textContent = " "
}
function calculatefunction(){
    const calculationInput  = document.querySelector(".calc-operation")
    const calculationstring = calculationInput.textContent
    const newstring = calculationstring.replace("x","*")

    const result = eval(newstring)
    const Resultdiv  = document.querySelector(".calc-typed")
    Resultdiv.textContent = result
}

for (let i = 0; i< normalBtns.length; i++){
   const button = normalBtns[i]
    button.onclick = handleClick
}

const clearbtn = document.getElementById("clear_btn")
clearbtn.onclick = cleareverything

const submitBtn = document.getElementById("submit_btn")
submitBtn.onclick = calculatefunction