const numberButtons = document.querySelectorAll(".number");
const screenTop = document.getElementById("screen-top");
const screenBottom = document.getElementById("screen-bottom");
const equals = document.getElementById("equals");
const allOperators = document.querySelectorAll(".operator");

let numbers = [];
let num;

for (btn of numberButtons) {
  btn.addEventListener("click", function () {
    if (numbers[0] === "+" || numbers[0] === "-" || numbers[0] === "*" || numbers[0] === "/" || numbers[0] === "%") {
      numbers = [];
    }
    if (numbers.length === 1) {
      numbers.splice(0, numbers.length);
    }                                    // prevent being able to push multiple values next to each other
    if (numbers.length === 3) {
      numbers.splice(2, numbers.length);
    }
    screenBottom.textContent += this.textContent;
    numbers.push(+screenBottom.textContent);
    console.log(numbers);
  });
}

for (operator of allOperators) {
  operator.addEventListener("click", function () {
    screenBottom.textContent = "";
    if (numbers.length === 2) {
      numbers.splice(1, numbers.length); // prevent being able to push multiple operators next to each other
    }
    if (numbers.length === 3) {
      switch (numbers[1]) {
        case "+":
          num = numbers[0] + numbers[numbers.length - 1];
          numbers = [];
          numbers.push(num);
          break;
        case "-":
          num = numbers[0] - numbers[numbers.length - 1];
          numbers = [];
          numbers.push(num);
          break;
        case "*":
          num = numbers[0] * numbers[numbers.length - 1];
          numbers = [];
          numbers.push(num);
          break;
        case "/":
          num = numbers[0] / numbers[numbers.length - 1];
          numbers = [];
          numbers.push(num);
          break;
        case "%":
          num = numbers[0] % numbers[numbers.length - 1];
          numbers = [];
          numbers.push(num);
          break;
      }
    }
    screenTop.textContent = numbers[0];
    numbers.push(this.textContent);
    console.log(numbers);
  });
}

equals.addEventListener("click", function () {
  if (numbers.length === 1 || numbers.length === 2) {
    return;
  }
  switch (numbers[1]) {
    case "+":
      screenBottom.textContent = numbers[0] + numbers[numbers.length - 1];
      numbers = [];
      numbers.push(+screenBottom.textContent);
      break;
    case "-":
      screenBottom.textContent = numbers[0] - numbers[numbers.length - 1];
      numbers = [];
      numbers.push(+screenBottom.textContent);
      break;
    case "*":
      screenBottom.textContent = numbers[0] * numbers[numbers.length - 1];
      numbers = [];
      numbers.push(+screenBottom.textContent);
      break;
    case "/":
      screenBottom.textContent = numbers[0] / numbers[numbers.length - 1];
      numbers = [];
      numbers.push(+screenBottom.textContent);
      break;
    case "%":
      screenBottom.textContent = numbers[0] % numbers[numbers.length - 1];
      numbers = [];
      numbers.push(+screenBottom.textContent);
      break;
  }
  screenTop.textContent = numbers[0];
  console.log(numbers);
});

