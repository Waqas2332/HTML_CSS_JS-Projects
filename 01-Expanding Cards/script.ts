const panels = document.querySelectorAll(".panel");
let count:number = 0;
panels.forEach((panel, index:number) => {
  panel.addEventListener("click", function () {
    removeActives();
    count = index;
    panel.classList.add("active");
  });
});
;
function removeActives():void {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

setInterval(() => {
  removeActives();
  count++;
  if (count > 4) {
    count = 0;
  }
  panels[count].classList.add("active");
}, 5000);
