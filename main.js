console.log('Hello World!');

let timeone = document.getElementById('time-one');
let section =document.querySelector('section');
let  tio = document.getElementById('tio');
let  tiop = document.getElementById('tiop');
let  ti = document.getElementById('ti');
let win =document.querySelector('.win');
let thend =document.querySelector('.the-end');

function countdowr() {
timeone.innerHTML-=1;
  if (timeone.innerHTML==="0") {
    clearInterval(counter);
section.style.display='none';
thend.style.display='block';
tio.innerHTML=localStorage.getItem('nex')
t.innerHTML=localStorage.getItem('nex2')
  }
  if (timeone.innerHTML==="10") {
    timeone.style.color='red'
  }
   if (localStorage.getItem('nex')<9) {
    win.innerHTML='👎اسف, حاول مجددا'
  } 
  if(localStorage.getItem('nex')>9) {
    win.innerHTML='👏 احسنت'
  }
  
}
let counter=setInterval(countdowr,2000)

function generateRandomOperation() {
  const num1 = Math.floor(Math.random() * 11);
  const num2 = Math.floor(Math.random() * 11);
  const operations = ['+', '-', '*'];
  const operation = operations[Math.floor(Math.random() * operations.length)];
  return { num1, num2, operation };
}

function calculateResult(num1, num2, operation) {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num2 !== 0 ? num1 / num2 : null;
    default:
      return null;
  }
}

function newOperation() {
  const { num1, num2, operation } = generateRandomOperation();
  const correctAnswer = calculateResult(num1, num2, operation);
  if (correctAnswer === null) {
    return newOperation(); // Avoid division by zero
  }
  document.getElementById('operation').innerText = `${num1} ${operation} ${num2}`;
  document.getElementById('operation').dataset.correctAnswer = correctAnswer;
}

function checkAnswer() {
  
  const userAnswer = parseFloat(document.getElementById('answer').innerHTML);
  const correctAnswer = parseFloat(document.getElementById('operation').dataset.correctAnswer);
  const resultDiv = document.getElementById('result');
  
const tiop = document.getElementById('tiop');
  if (userAnswer === correctAnswer) {
    resultDiv.innerText = "!إجابة صحيحة";
    resultDiv.style.color='green';
    for (let i = 0; i < 1; i++) {
tiop.innerHTML++
localStorage.setItem('nex', tiop.innerHTML)
    }
    newOperation();
  
    
    }else {
    
    resultDiv.innerText = ".إجابة خاطئة، حاول مرة أخرى";
    resultDiv.style.color='red'
    ti.innerHTML++
    localStorage.setItem('nex2', ti.innerHTML)
  
  }
  
  document.getElementById('answer').innerHTML = '';
  
}

document.addEventListener('DOMContentLoaded', (event) => {
  newOperation();
});

function number(value) {
  // Tab to edit
   document.getElementById('answer').innerHTML+=value
   
  // // localStorage.setItem('num',value)
}
let textContent=document.getElementById('answer')

function removeNumber() {
  
  textContent.innerHTML=''
}


        function reloadPage() {
            location.reload();
        }
