// HTML elements
var homeButton;
// HTML elements
// Styles
function initHomeButton() {
    homeButton = document.querySelector("[data-home]");
    var defaultText = homeButton.getAttribute("defaultText");
    var interval;
    homeButton.onmouseover = function () {
        var iteration = 0;
        clearInterval(interval);
        interval = setInterval(function () {
            homeButton.innerText = homeButton.innerText
                .split("")
                .map(function (_letter, index) {
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
var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// Variables
// On Load
window.onload = function () {
    initHomeButton();
};
// On Load
