// HTML elements
var homeButton: HTMLLinkElement;
// HTML elements

// Styles

function initHomeButton() {
  homeButton = document.querySelector("[data-home]")!;

  homeButton.onmouseover = () => {
    let iteration: number = 0;
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.element.innerText = this.element.innerText
        .split("")
        .map((_letter, index) => {
          if (index < iteration) {
            return this.defaultText[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= this.defaultText.length) {
        clearInterval(this.interval);
      }

      iteration += 1 / 3;
    }, 40);
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
