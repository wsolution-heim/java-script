const task3Element = document.getElementById('task-3');
let userName = 'dummy';
let string1;
let string2;
let string3;

function textOutput() {
	alert('Hi there. Today is a great day!');
}

function helloName(userName) {
	alert('Hello ' + userName);
}

function combineStrings(string1, string2, string3) {
	alert(string1 + ' ' + string2 + ' ' + string3);
}

textOutput();

helloName('Claudia');

task3Element.addEventListener('click', textOutput);

combineStrings('Heute', 'ist', 'Sonntag');
