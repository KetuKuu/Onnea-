const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

if (noBtn && questionContainer) {
  noBtn.addEventListener("mouseover", () => {
    const maxX = Math.max(questionContainer.offsetWidth - noBtn.offsetWidth, 0);
    const maxY = Math.max(questionContainer.offsetHeight - noBtn.offsetHeight, 0);

    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);

    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
  });
}

if (yesBtn && questionContainer && resultContainer) {
  yesBtn.addEventListener("click", () => {
    questionContainer.style.display = "none";
    if (heartLoader) heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
  });
}