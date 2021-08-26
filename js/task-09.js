function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColor = document.querySelector('button.change-color');
const spanText = document.querySelector('span.color');
const bodyChangeColor = document.querySelector('body')

const changeColor = event => {
  bodyChangeColor.style.backgroundColor = getRandomHexColor();
  spanText.textContent = getRandomHexColor();
  console.log(spanText.textContent);
};

btnChangeColor.addEventListener("click", changeColor);