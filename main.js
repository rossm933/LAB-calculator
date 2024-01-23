
function appendToResult(value) {
  let display = document.getElementById('display');
  if(display.textContent === "0") {
    display.textContent = value;
  } else {
    display.textContent += value;
  }
}
function calculateResult() {
  let display = document.getElementById('display');
  let expression = display.textContent;
  let answer = eval(expression);
  display.textContent = answer;
}

function deleteLastCharacter() {
display.innerText = display.innerText.slice(0, -1);
 }


function clearResult() {
 document.getElementById('display').innerHTML = "";
}
