const h1 = document.querySelector("h1");
const audioBuzz = new Audio("lightbuzz2.0.mov");

h1.classList.add("popIn");

function triggerBuzz() {
  // Do the animation + sound
  h1.classList.remove("popIn");
  void h1.offsetWidth; // forces reflow so animation restarts
  h1.classList.add("popIn");
  audioBuzz.play();

  // Schedule next trigger between 3–5 seconds
  const nextDelay = Math.random() * 2000 + 3000; // random between 3000–5000 ms
  setTimeout(triggerBuzz, nextDelay);
}

// Start the first trigger
setTimeout(triggerBuzz, Math.random() * 2000 + 3000);