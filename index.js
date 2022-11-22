
  numberOfDrums = document.querySelectorAll(".drum").length;


      function runAlert() {
        alert("hello son");
      }

  for (var i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", runAlert);
  }
