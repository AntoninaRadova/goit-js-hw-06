const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Пошук списку
const list = document.querySelector("#ingredients");

// Пустий масив
const listItemsArray = [];

// Перебір кожного елементу через forEach
ingredients.forEach((ingredient) => {
  
  // Створення елементу
  const listItem = document.createElement("li");

  // Додавання текстового контенту до кожного елементу
  listItem.textContent = ingredient;

  // Додавання класу
  listItem.classList.add("item");

  // Додавання елемента в масив
  listItemsArray.push(listItem);
});

// Масив всередині списка
list.append(...listItemsArray);
