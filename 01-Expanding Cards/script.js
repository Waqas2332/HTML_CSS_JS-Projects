const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", function () {
    removeActives();
    panel.classList.add("active");
  });
});

function removeActives() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
