// Styles
class Title {
  element: HTMLTextAreaElement;
  defaultText: string;
  interval: number;

  constructor(element: HTMLTextAreaElement) {
    this.element = element;
    this.defaultText = element.getAttribute("defaultText")!;
  }

  setDecript() {
    let iteration: number = 0;
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
      if (iteration >= this.defaultText.length) {
        clearInterval(this.interval);
      }

      iteration += 1 / 7;
    }, 20);
  }
}

class MenuItem {
  element: HTMLElement;
  defaultText: string;
  interval: number; //Idk why but intervals are numbers :/
  index: number;

  constructor(element: HTMLElement, index: number) {
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

    this.element.onmouseover = () => {
      decriptMenu(menuItems, this.index);
    };
  }

  setDecript(next: MenuItem[][]) {
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
        next[0][0].setDecript(next.slice(1, next.length));
        if (next[0].length > 1) {
          next[0]
            .slice(1, next[0].length)
            .forEach((item) => item.setDecript([]));
        }
      }

      if (iteration >= this.defaultText.length) {
        clearInterval(this.interval);
      }

      iteration += 1 / 3;
    }, 25);
  }
}

function decriptMenu(menu: MenuItem[], indexFrom: number) {
  let order: MenuItem[][] = decriptOrder(menu, indexFrom);
  menu[indexFrom].setDecript(order.slice(1, order.length));

  menu.forEach((item) => {
    item.element.onmouseover = null;
  });
}

function decriptOrder(menu: MenuItem[], indexFrom: number): MenuItem[][] {
  let order: MenuItem[][] = [[menu[indexFrom]]];
  for (let i = 1; i < menu.length; i++) {
    let next: MenuItem[] = [];
    if (indexFrom - i >= 0) next.push(menu[indexFrom - i]);
    if (indexFrom + i < menu.length) next.push(menu[indexFrom + i]);
    if (next[0] != undefined) order.push(next);
  }
  return order;
}
// styles

// HTML Elements
var menuItems: MenuItem[] = [];
var title: Title;

window.onload = () => {
  let menu: NodeListOf<HTMLElement> = document.querySelectorAll("[data-text]")!;
  for (let i = 0; i < menu.length; i++) {
    let textElement = menu.item(i);
    menuItems.push(new MenuItem(textElement, i));
  }
  setTimeout(() => {
    title = new Title(document.querySelector("[data-title]")!);
    title.setDecript();
  }, 50);
};
// HTML Elements

// variables
const upperLetters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters: string = "abcdefghijklmnopqrstuvwxyz";
const allLetters: string =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
// variabels
