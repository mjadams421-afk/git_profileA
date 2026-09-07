
//setting varriables for the button and response
const select = document.getElementById('select');
const response = document.getElementById('response');
const footer = document.getElementsByTagName('footer')[0];

//adding functions and variables
 let answer = '';
 let random = Math.floor(Math.random() * 255) + 1;
function action() {
 let name = window.prompt('What is your name?');
 let reason = window.prompt('What is the reason for your visit?');
 if(name && reason) {
  answer += `Hello my name is ${name} and I am visiting because ${reason}.`;
 } else { answer += `Please enter your name and reason for visit.`; }
 footer.style.backgroundColor = `rgb(${random}, ${random}, ${random})`;
 response.innerHTML = answer;
 }

//adding event listener to the button
select.addEventListener('mousedown', action);