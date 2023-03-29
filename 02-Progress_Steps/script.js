var progress = document.getElementById("progress");
var prevBtn = document.getElementById("prev");
var nextBtn = document.getElementById("next");
var progressCircles = document.querySelectorAll(".circle");
var currentActive = 1;
nextBtn.addEventListener("click", function () {
    currentActive++;
    if (currentActive > progressCircles.length) {
        currentActive = progressCircles.length;
    }
    update();
});
prevBtn.addEventListener("click", function () {
    currentActive--;
    if (currentActive < 1) {
        currentActive = 1;
    }
    if (currentActive > 1) {
        prevBtn.setAttribute("disabled", "false");
    }
    update();
});
function update() {
    progressCircles.forEach(function (circle, index) {
        if (index < currentActive) {
            circle.classList.add("active");
        }
        else {
            circle.classList.remove("active");
        }
        var actives = document.querySelectorAll(".active");
        progress.style.width =
            ((actives.length - 1) / (progressCircles.length - 1)) * 100 + "%";
    });
    if (currentActive == 1) {
        prevBtn.disabled = true;
    }
    else if (currentActive == progressCircles.length) {
        nextBtn.setAttribute("disabled", "true");
    }
    else {
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }
}
