// JavaScript code to handle button click event and change background color
document.querySelectorAll(".colorButton").forEach(function(button) {
    button.addEventListener("click", function() {
      var color = this.textContent.toLowerCase();
      document.body.style.backgroundColor = color;
    });
  });
  