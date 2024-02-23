// JavaScript code to handle button click event and toggle text
document.getElementById("toggleButton").addEventListener("click", function() {
    var button = document.getElementById("toggleButton");
    if (button.textContent === "Hello") {
      button.textContent = "Goodbye";
    } else {
      button.textContent = "Hello";
    }
  });
  