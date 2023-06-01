var flatBoy = document.getElementById("flatboy");
var isKeyPressed = false;

document.addEventListener("keydown", function(event) {
  if (!isKeyPressed && event.key == "d" || event.key == "ArrowRight" || event.key == "D") {
    isKeyPressed = true;
    flatBoy.classList.remove("stopped");
    flatBoy.classList.add("walking");
  }
  if (!isKeyPressed && event.key == "w" || event.key == "ArrowUp" || event.key == "W") {
    isKeyPressed = true;
    flatBoy.classList.remove("stopped");
    flatBoy.classList.add("running");
  }
});

document.addEventListener("keyup", function(event) {
  isKeyPressed = false;
    flatBoy.classList.remove("running");
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