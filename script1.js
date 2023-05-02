

let value = document.getElementById("value");
let buttons = document.querySelectorAll("span");

document.addEventListener("keydown", function(event) {
  // Check if the key pressed is a number (0-9), a symbol (+,-,*,/) or the Enter key (13)
  if ((event.keyCode >= 48 && event.keyCode <= 57) || event.key === "+" || event.key === "-" || event.key === "*" || event.key === "/" || event.keyCode === 13) {
    if (event.keyCode === 13) {
      value.innerHTML = eval(value.innerHTML);
    } else {
      value.innerHTML += event.key;
    }
  }
});

for (let button of buttons) {
    button.addEventListener("click", function() {
        let btnVal = this.innerHTML;
        if (btnVal === "=") {
            value.innerHTML = eval(value.innerHTML);
        } else if (btnVal === "clear") {
            value.innerHTML = "";
        } else {
            value.innerHTML += btnVal;
        }
    });
}




// for (let i = 0; i < buttons.length; i++) {
//   let button = buttons[i];
//   button.addEventListener("click", function() {
//     let btnVal = button.innerHTML;
//     if (btnVal === "=") {
//       value.innerHTML = eval(value.innerHTML);
//     } else if (btnVal === "clear") {
//       value.innerHTML = "";
//     } else {
//       value.innerHTML += btnVal;
//     }
//   });
// }
