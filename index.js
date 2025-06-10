// Função para detectar o click do mouse.

const drumButtons = document.querySelectorAll(".drum");


drumButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const buttonInnerHTML = this.innerHTML.toLowerCase();

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
});


// Função para detectar o pressionamento da tecla.

document.addEventListener("keydown", function(event) {
  const keyPressed = event.key.toLowerCase();

  makeSound(keyPressed);
  buttonAnimation(keyPressed);
})


// Função para alterar entre a teclas dos teclados para acionar o som
function makeSound(key) {
  switch (key) {
    case "a":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "s":
      var tom1 = new Audio("sounds/tom1.mp3");
      tom1.play();
      break;
    case "d":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "g":
      var kick = new Audio("sounds/kickbass.mp3");
      kick.play();
      break;
    case "j":
      var tom3 = new Audio("sounds/tom3.mp3");
      tom3.play();
      break;
    case "k":
      var tom2 = new Audio("sounds/tom2.mp3");
      tom2.play();
      break;
    case "l":
      var crash2 = new Audio("sounds/crash.mp3");
      crash2.play();
      break;
    default:
      console.log(key);
  }
}


// Função para animar os botões na hora de pressionar.

function buttonAnimation(currentKey) {
  const activeButton = document.querySelector("." + currentKey);

  if (activeButton) {
    activeButton.classList.add("pressed");

    setTimeout(() => {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}
