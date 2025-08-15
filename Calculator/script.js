// Function for addition
function add(a, b) {
  return a + b;
}

// Function for subtraction
function subtract(a, b) {
  return a - b;
}

// Function for multiplication
function multiply(a, b) {
  return a * b;
}

// Function for division
function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero";
  }
  return a / b;
}

// Main function to calculate
function calculate() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let operator = document.getElementById("operator").value;
  let result;

  // Control flow using if-else
  if (operator === "+") {
    result = add(num1, num2);
  } else if (operator === "-") {
    result = subtract(num1, num2);
  } else if (operator === "*") {
    result = multiply(num1, num2);
  } else if (operator === "/") {
    result = divide(num1, num2);
  } else {
    result = "Invalid operator!";
  }

  document.getElementById("result").innerText = "Result: " + result;
}
