// HTML Elements
window.onload = () => {
  const text: NodeListOf<HTMLElement> =
    document.querySelectorAll("[data-text]")!;
  text.forEach((textElement) =>
    styles(textElement, textElement.getAttribute("defaultText")!)
  );
};

// HTML Elements

// Styles
const letters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function styles(text, defaultText: string) {
  let intervalSpeed: number = 50;
  let interval = setInterval(() => {
    text.innerText = text.innerText
      .split("")
      .map(() => {
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");
  }, intervalSpeed);

  text.onmouseover = (event) => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      text.innerText = text.innerText
        .split("")
        .map((letter, index) => {
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
    }, intervalSpeed);
    text.onmouseover = () => {};
  };
}
// styles
