// first we create an event listener when the object is clicked
document.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio)return;
    audio.currentTime =0; //rewind to the start
    audio.play();
    key.classList.add("playing");
  });

  const keys = document.querySelectorAll(".key");

  function removeTransition (e){
    if (e.propertyName !== "transform") return;//skip if its not a transform
    this.classList.remove("playing"); // side not this always refers to what was called against it for our case it was keys when we added the eventListener
   }

  keys.forEach(key => key.addEventListener("transitionend", removeTransition));