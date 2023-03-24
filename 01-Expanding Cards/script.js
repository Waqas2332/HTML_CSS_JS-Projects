var panels = document.querySelectorAll(".panel");
var count = 0;
panels.forEach(function (panel, index) {
    panel.addEventListener("click", function () {
        removeActives();
        count = index;
        panel.classList.add("active");
    });
});
;
function removeActives() {
    panels.forEach(function (panel) {
        panel.classList.remove("active");
    });
}
setInterval(function () {
    removeActives();
    count++;
    if (count > 4) {
        count = 0;
    }
    panels[count].classList.add("active");
}, 5000);
