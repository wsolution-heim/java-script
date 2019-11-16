const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
  return parseInt(userInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(operationIdent, prevResult, operationNum, newResult) {
  const logEntry = {
    operation: operationIdent,
    prevResult: prevResult,
    number: operationNum,
    result: newResult
  };
  logEntries.push(logEntry);
  console.log(logEntries);
  console.log(logEntry.operation);
}

function calculateResult(calculationType) {
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	let mathOperator;
	if (calculationType === 'ADD') {
    currentResult += enteredNumber;
    mathOperator = '+';
  } else if (calculationType === 'SUBTRACT') {
    currentResult -= enteredNumber;
    mathOperator = '-';
  } else if (calculationType === 'MULTIPLY') {
    currentResult *= enteredNumber;
    mathOperator = '*';
  } else if (calculationType === 'DIVIDE') {
		 currentResult /= enteredNumber;
		 mathOperator = '/';
	}
	
	if (
		calculationType !== 'ADD' && 
		calculationType !== 'SUBTRACT' &&
		calculationType !== 'MULITPLY' &&
	)

  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationTyp, initialResult, enteredNumber, currentResult);
}


function add() {
  calculateResult('ADD');  
}

function subtract() {
  calculateResult('SUBTRACT');  
}

function multiply() {
  calculateResult('MULTIPLY');  
}

function divide() {
	calculateResult('DIVIDE');  
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
