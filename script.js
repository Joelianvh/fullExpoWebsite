
firstPage = document.querySelector("#firstPage")
secondPage = document.querySelector("#secondPage")

searchButton = document.querySelector("#joinSearch")

searchButton.addEventListener("click", () => {
    firstPage.classList.add("hidden");
    secondPage.classList.remove("hidden");
  });
  


  const backgroundContainer = document.getElementById("backgroundContainer");

  // Create one set of lines
  function createLines() {
    for (let i = 0; i < 30; i++) {
      const textLine = document.createElement("p");
      textLine.classList.add("backgroundScroll");
      textLine.textContent = "WHAT IS REAL?";
      backgroundContainer.appendChild(textLine);
    }
  }
  
  // Add two sets for seamless looping
  createLines();
  createLines();