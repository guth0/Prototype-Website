// HTML Elements
window.onload = function () {
    var text = document.querySelectorAll("[data-text]");
    text.forEach(function (textElement) {
        return styles(textElement, textElement.getAttribute("defaultText"));
    });
};
// HTML Elements
// Styles
var defaultText = "KILL YOURSELF";
var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function styles(text, defaultText) {
    var intervalSpeed = 50;
    var interval = setInterval(function () {
        text.innerText = text.innerText
            .split("")
            .map(function () {
            return letters[Math.floor(Math.random() * 26)];
        })
            .join("");
    }, intervalSpeed);
    text.onmouseover = function (event) {
        var iteration = 0;
        clearInterval(interval);
        interval = setInterval(function () {
            text.innerText = text.innerText
                .split("")
                .map(function (letter, index) {
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
        text.onmouseover = function () { };
    };
}
// styles
