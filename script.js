// Styles
var Title = /** @class */ (function () {
    function Title(element) {
        this.element = element;
        this.defaultText = element.getAttribute("defaultText");
    }
    Title.prototype.setDecript = function () {
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
                return upperLetters[Math.floor(Math.random() * 26)];
            })
                .join("");
            if (iteration >= _this.defaultText.length) {
                clearInterval(_this.interval);
            }
            iteration += 1 / 7;
        }, 20);
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
        this.element.onmouseover = function () {
            decriptMenu(menuItems, _this.index);
        };
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
                next[0][0].setDecript(next.slice(1, next.length));
                if (next[0].length > 1) {
                    next[0]
                        .slice(1, next[0].length)
                        .forEach(function (item) { return item.setDecript([]); });
                }
            }
            if (iteration >= _this.defaultText.length) {
                clearInterval(_this.interval);
            }
            iteration += 1 / 3;
        }, 25);
    };
    return MenuItem;
}());
function decriptMenu(menu, indexFrom) {
    var order = decriptOrder(menu, indexFrom);
    menu[indexFrom].setDecript(order.slice(1, order.length));
    menu.forEach(function (item) {
        item.element.onmouseover = null;
    });
}
function decriptOrder(menu, indexFrom) {
    var order = [[menu[indexFrom]]];
    for (var i = 1; i < menu.length; i++) {
        var next = [];
        if (indexFrom - i >= 0)
            next.push(menu[indexFrom - i]);
        if (indexFrom + i < menu.length)
            next.push(menu[indexFrom + i]);
        if (next[0] != undefined)
            order.push(next);
    }
    return order;
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
    setTimeout(function () {
        title = new Title(document.querySelector("[data-title]"));
        title.setDecript();
    }, 50);
};
// HTML Elements
// variables
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
var allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
// variabels
