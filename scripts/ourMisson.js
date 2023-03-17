// HTML elements
var homeButton;
// HTML elements
// Styles
function initHomeButton() {
    var _this = this;
    homeButton = document.querySelector("[data-home]");
    homeButton.onmouseover = function () {
        var iteration = 0;
        clearInterval(_this.interval);
        _this.interval = setInterval(function () {
            _this.element.innerText = _this.element.innerText
                .split("")
                .map(function (_letter, index) {
                if (index < iteration) {
                    return _this.defaultText[index];
                }
                return letters[Math.floor(Math.random() * 26)];
            })
                .join("");
            if (iteration >= _this.defaultText.length) {
                clearInterval(_this.interval);
            }
            iteration += 1 / 3;
        }, 40);
    };
}
// Styles
// Variables
var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// Variables
// On Load
window.onload = function () {
    initHomeButton();
};
// On Load
