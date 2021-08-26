const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach((ingredient) => {
  const list = document.querySelector("ul");
  const childrenList = document.createElement("li");
  childrenList.textContent = ingredient;
  childrenList.classList.add("item")
  list.append(childrenList);
});