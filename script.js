const screenSection = document.getElementById("screen-section");

let numbers = [];

for (btn of numberButtons) {
  btn.addEventListener("click", function () {
    if (numbers.length === 1) {
      numbers.splice(0, numbers.length); // prevent being able to push multiple values next to each other
    }
    screenSection.textContent += this.textContent;
    numbers.push(+screenSection.textContent);
    console.log(numbers);
  });
}