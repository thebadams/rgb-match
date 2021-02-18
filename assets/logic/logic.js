var numColors = 6
var colors = randomColorArray(numColors);
var pickedColor = colors[Math.floor(Math.random() * 6)];

var cards = document.querySelectorAll(".card");

var messageDisplay = document.querySelector("#messageDisplay");

var solution = document.querySelector("h1");
solution.textContent = pickedColor;

var newColors = document.querySelector("#newColors")

var jumbotron = document.querySelector(".jumbotron");

var hardDifficulty = document.querySelector("#hard");
var easyDifficulty = document.querySelector("#easy");
var displayToggle = document.querySelector("#secondRow");
// Logic

for (var i = 0; i < cards.length; i++) {
    cards[i].style.background = colors[i];

    cards[i].addEventListener("click", function () {
        var clickedColor = this.style.background;
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct";
            changeColors(clickedColor);
            newColors.textContent = "New Game";
        } else {
            messageDisplay.textContent = "Try Again";
            this.style.background = "black";
        };
    });
};

newColors.addEventListener("click", function () {
    location.reload();
});

hardDifficulty.addEventListener("click", function () {
    hardDifficulty.classList.add("active");
    easyDifficulty.classList.remove("active");
    displayToggle.classList.remove("d-none");
    numColors = 6
    colors = randomColorArray(numColors);
    for (var i = 0; i < numColors; i++) {
        cards[i].style.background = colors[i];
    };
    pickedColor = colors[Math.floor(Math.random() * numColors)]
    solution.textContent = pickedColor;

});

easyDifficulty.addEventListener("click", function () {
    easyDifficulty.classList.add("active");
    hardDifficulty.classList.remove("active");
    displayToggle.classList.add("d-none");
    numColors = 3
    colors = randomColorArray(numColors);
    for (var i = 0; i < numColors; i++) {
        cards[i].style.background = colors[i];
    };
    pickedColor = colors[Math.floor(Math.random() * numColors)]
    solution.textContent = pickedColor;

});
// Random RGB Value Function
function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + ", " + y + ", " + z + ")";
    return bgColor;
};

// generate array of random colors
function randomColorArray(num) {
    // set array
    var colorArray = [];
    // repeat num times
    for (var i = 0; i < num; i++) {

        var color = random_bg_color(i) // generate random color using random_bg_color
        // push colors into array
        colorArray.push(color);
    }
    // return array
    return colorArray
}
// color changing function
function changeColors(color) {
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.background = color;
        jumbotron.style.background = color;
    };
};
