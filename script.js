var flatBoy = document.getElementById("flatboy");
var isKeyPressed = false;

document.addEventListener("keydown", function(event) {
  if (!isKeyPressed && event.key == "d" || event.key == "ArrowLeft" || event.key == "D") {
    isKeyPressed = true;
    flatBoy.classList.remove("stopped");
    flatBoy.classList.add("walking");
  }
});

document.addEventListener("keyup", function(event) {
  isKeyPressed = false;
    flatBoy.classList.remove("walking");
    flatBoy.classList.add("stopped");
});

document.addEventListener("keydown", function(event) {
  if (event.key === " ") {
    flatBoy.classList.remove("stopped");
    flatBoy.classList.add("jumping");
    setTimeout(function() {
      flatBoy.classList.remove("jumping");
      flatBoy.classList.add("stopped");
    }, 1000);
  }
});