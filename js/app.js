let input = document.getElementById("text_input");

input.addEventListener("keyup", function () {
  let inputValue = input.value;
  let converted_value = Number.parseInt(inputValue);
  if (converted_value >= 80 && converted_value < 100) {
    document.getElementById("result").innerHTML = "You Got A+";
  } else if (converted_value >= 70 && converted_value < 80) {
    document.getElementById("result").innerHTML = "You Got A";
  } else if (converted_value >= 60 && converted_value < 70) {
    document.getElementById("result").innerHTML = "You Got A-";
  } else if (converted_value >= 50 && converted_value < 60) {
    document.getElementById("result").innerHTML = "You Got B";
  } else if (converted_value >= 40 && converted_value < 50) {
    document.getElementById("result").innerHTML = "You Got C";
  } else if (converted_value >= 33 && converted_value < 40) {
    document.getElementById("result").innerHTML = "You Got D";
  } else if (converted_value <= 32) {
    document.getElementById("result").innerHTML = "You Got F";
  }
});

let odd_Even_input = document.getElementById("odd_even_input");
odd_Even_input.addEventListener("keyup", function () {
  let inputValue = odd_Even_input.value;
  let converted_value = Number.parseInt(inputValue);
  if (converted_value % 2 == 0) {
    document.getElementById("odd_even").innerHTML = "Even Number";
  } else {
    document.getElementById("odd_even").innerHTML = "Odd Number";
  }
});
