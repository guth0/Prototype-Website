// HTML elements
var homeButton: HTMLLinkElement;
// HTML elements

// Styles

function initHomeButton() {
  homeButton = document.querySelector("[data-home]")!;
  let defaultText: string = homeButton.getAttribute("defaultText")!;
  let interval: number;

  homeButton.onmouseover = () => {
    let iteration: number = 0;
    clearInterval(interval);
    interval = setInterval(() => {
      homeButton.innerText = homeButton.innerText
        .split("")
        .map((_letter, index) => {
          if (index < iteration) {
            return defaultText[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= defaultText.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 20);
  };
}
// Styles

// Variables
const letters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// Variables

// On Load
window.onload = () => {
  initHomeButton();
};
// On Load
