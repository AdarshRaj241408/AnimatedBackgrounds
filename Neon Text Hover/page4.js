// Custom cursor movement
const customCursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {
  customCursor.style.left = `${e.pageX}px`;
  customCursor.style.top = `${e.pageY}px`;
});

// Splitting the text into individual span elements
const neonText = document.querySelector(".neon-text");
const textContent = neonText.textContent;
neonText.innerHTML = "";

for (let letter of textContent) {
  let span = document.createElement("span");
  span.textContent = letter;
  neonText.appendChild(span);
}

// Adding wavy hover effect using JS
neonText.addEventListener("mouseover", () => {
  neonText.classList.add("wavy");
});

neonText.addEventListener("mouseleave", () => {
  neonText.classList.remove("wavy");
});
