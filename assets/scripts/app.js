const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2) {
	const result = num1 + num2;
	// alert('The result is ' + result);
	return result;
}

currentResult = add(5, 15);

// let calculationDescription = '0 + 10 / 3 *2 - 4'; 

let calculationDescription = `(${defaultResult} + 10) / 3 *2 - 4`; 

outputResult(currentResult, calculationDescription);
// outputResult(currentResult, '');

