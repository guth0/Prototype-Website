// Styles
var Title = /** @class */ (function () {
    function Title(element) {
        this.element = element;
        this.defaultText = element.getAttribute("defaultText");
    }
    Title.prototype.setDecript = function (next) {
        var _this = this;
        var iteration = 0;
        var nextStarted = false;
        clearInterval(this.interval);
        this.interval = setInterval(function () {
            _this.element.innerText = _this.element.innerText
                .split("")
                .map(function (_letter, index) {
                if (index < iteration) {
                    return _this.defaultText[index];
                }
                return upperLetters[Math.floor(Math.random() * 26)];
            })
                .join("");
            if (iteration >= _this.defaultText.length - 4 && !nextStarted) {
                next[0].setDecript(next.slice(1, next.length));
                nextStarted = true;
            }
            if (iteration >= _this.defaultText.length) {
                clearInterval(_this.interval);
            }
            iteration += 1 / 3;
        }, 40);
    };
    return Title;
}());
var MenuItem = /** @class */ (function () {
    function MenuItem(element, index) {
        var _this = this;
        this.element = element;
        this.index = index;
        this.defaultText = this.element.getAttribute("defaultText");
        this.interval = setInterval(function () {
            _this.element.innerText = _this.element.innerText
                .split("")
                .map(function () {
                return allLetters[Math.floor(Math.random() * 52)];
            })
                .join("");
        }, 25);
    }
    MenuItem.prototype.setDecript = function (next) {
        var _this = this;
        var iteration = 0;
        clearInterval(this.interval);
        this.interval = setInterval(function () {
            _this.element.innerText = _this.element.innerText
                .split("")
                .map(function (_letter, index) {
                if (index < iteration) {
                    return _this.defaultText[index];
                }
                return allLetters[Math.floor(Math.random() * 52)];
            })
                .join("");
            // cant have items less than 3 characters
            if (iteration == 3 && next.length != 0) {
                next[0].setDecript(next.slice(1, next.length));
            }
            if (iteration >= _this.defaultText.length) {
                clearInterval(_this.interval);
            }
            iteration += 1 / 2;
        }, 35);
    };
    return MenuItem;
}());
function decriptMenu(menu, indexFrom) {
    menu[indexFrom].setDecript(menu.slice(1, menu.length));
}
// styles
// HTML Elements
var menuItems = [];
var title;
window.onload = function () {
    var menu = document.querySelectorAll("[data-text]");
    for (var i = 0; i < menu.length; i++) {
        var textElement = menu.item(i);
        menuItems.push(new MenuItem(textElement, i));
    }
    title = new Title(document.querySelector("[data-title]"));
    setTimeout(function () {
        title.setDecript(menuItems);
    }, 50);
};
// HTML Elements
// variables
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
var allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
// variabels
