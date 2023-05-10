let progress = document.getElementById("progress")!;
let prevBtn = document.getElementById("prev")! as HTMLButtonElement;
let nextBtn = document.getElementById("next")! as HTMLButtonElement;
let progressCircles = document.querySelectorAll(".circle");

let currentActive = 1;
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
  progressCircles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }

    const actives = document.querySelectorAll(".active");
    progress.style.width =
      ((actives.length - 1) / (progressCircles.length - 1)) * 100 + "%";
  });
  if (currentActive == 1) {
    prevBtn.disabled = true;
  } else if (currentActive == progressCircles.length) {
    nextBtn.setAttribute("disabled", "true");
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
}
