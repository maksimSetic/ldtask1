const button = document.getElementById("card__button");
const textContainer = document.getElementById("text__container");
let openText = false;

button.addEventListener("click", () => {
  console.log(openText);
  openText = !openText;
  updateTextVisibility();
});

const updateTextVisibility = () => {
  if (openText) {
    textContainer.classList.remove("hidden");
    button.classList.remove("active");
  } else {
    textContainer.classList.add("hidden");
    button.classList.add("active");
  }
};
