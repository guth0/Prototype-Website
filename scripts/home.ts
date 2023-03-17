// Styles
class Title {
  element: HTMLTextAreaElement;
  defaultText: string;
  interval: number;

  constructor(element: HTMLTextAreaElement) {
    this.element = element;
    this.defaultText = element.getAttribute("defaultText")!;
  }

  setDecript(next: MenuItem[]) {
    let iteration: number = 0;
    let nextStarted: boolean = false;
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.element.innerText = this.element.innerText
        .split("")
        .map((_letter, index) => {
          if (index < iteration) {
            return this.defaultText[index];
          }

          return upperLetters[Math.floor(Math.random() * 26)];
        })
        .join("");
      if (iteration >= this.defaultText.length - 4 && !nextStarted) {
        next[0].setDecript(next.slice(1, next.length));
        nextStarted = true;
      }

      if (iteration >= this.defaultText.length) {
        clearInterval(this.interval);
      }

      iteration += 1 / 3;
    }, 40);
  }
}

class MenuItem {
  element: HTMLButtonElement;
  defaultText: string;
  interval: number; //Idk why but intervals are numbers :/
  index: number;

  constructor(element: HTMLButtonElement, index: number) {
    this.element = element;
    this.index = index;
    this.defaultText = this.element.getAttribute("defaultText")!;

    this.interval = setInterval(() => {
      this.element.innerText = this.element.innerText
        .split("")
        .map(() => {
          return allLetters[Math.floor(Math.random() * 52)];
        })
        .join("");
    }, 25);
  }

  setDecript(next: MenuItem[]) {
    let iteration: number = 0;
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.element.innerText = this.element.innerText
        .split("")
        .map((_letter, index) => {
          if (index < iteration) {
            return this.defaultText[index];
          }

          return allLetters[Math.floor(Math.random() * 52)];
        })
        .join("");
      // cant have items less than 3 characters
      if (iteration == 3 && next.length != 0) {
        next[0].setDecript(next.slice(1, next.length));
      }

      if (iteration >= this.defaultText.length) {
        clearInterval(this.interval);
      }

      iteration += 1 / 2;
    }, 35);
  }
}

function decriptMenu(menu: MenuItem[], indexFrom: number) {
  menu[indexFrom].setDecript(menu.slice(1, menu.length));
}
// styles

// HTML Elements
var menuItems: MenuItem[] = [];
var title: Title;

window.onload = () => {
  let menu: NodeListOf<HTMLButtonElement> =
    document.querySelectorAll("[data-text]")!;
  for (let i = 0; i < menu.length; i++) {
    let textElement = menu.item(i);
    menuItems.push(new MenuItem(textElement, i));
  }
  title = new Title(document.querySelector("[data-title]")!);
  setTimeout(() => {
    title.setDecript(menuItems);
  }, 50);
};
// HTML Elements

// variables
const upperLetters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters: string = "abcdefghijklmnopqrstuvwxyz";
const allLetters: string =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
// variabels
