const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');
const textCounterValue = document.querySelector("#counter #value");

const counterValue = 0;

let data = {
  counter: counterValue
};

// UPDATE
const updateDecrement = (e) => {
  const newData = { ...data, counter: data.counter - 1 };
  updateView(newData);
};
const updateIncrement = (e) => {
  const newData = { ...data, counter: data.counter + 1 };
  updateView(newData);
};

buttonDecrement.addEventListener("click", updateDecrement);
buttonIncrement.addEventListener("click", updateIncrement);

// VIEW
const updateView = (newData) => {
  textCounterValue.textContent = String(newData.counter);
  data = newData;
};