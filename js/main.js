// Konami
var konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
var current = 0;

var konamiHandler = (event) => {

	if (konamiCode.indexOf(event.key) < 0 || event.key !== konamiCode[current]) {
		current = 0;
		return;
	}
	current++;

	if (konamiCode.length === current) {
    current = 0;
    window.location.replace("https://www.youtube.com/watch?v=6nnwn5rXEio");
	}

};

document.addEventListener('readystatechange', (event) => {
  if (document.readyState == "complete") {
    document.getElementById("loader").classList.add("loader-site-loaded");
    document.getElementById("save-the-date-card").classList.add("card-appear");
    var animatables = document.getElementsByClassName("animatable");
    for(var i = 0; i < animatables.length; i++) {
      animatables[i].classList.add("animate");
      var multiplier = i + 1;
      animatables[i].setAttribute("style", `animation-delay: ${multiplier*150}ms`);
    }
    document.addEventListener('keydown', konamiHandler, false);
    console.log(`%c
    =====================================================================
    ||  Greetings adventurer! You dug deep and stumbled onto a quest!  ||
    ||    Before you lies an obsidian stone carved with the words:     ||
    || ---------"REMEBER THE KONAMI DAYS AND ENTER THE CODE"---------  ||
    || -----------------------"HINT: UP, UP..." ---------------------  ||
    =====================================================================`
    , "font-family:monospace");
  };
});
