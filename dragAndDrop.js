const item = document.querySelector(".item");
// Считываем все боксы в массив
const boxes = Array.from(document.querySelectorAll(".box"));

// Обработчик начала перетаскивания элемента
item.addEventListener("dragstart", dragstart);
// Обработчик завершения перетаскивания элемента
item.addEventListener("dragend", dragend);

// Обработчик для боксов
boxes.forEach((box) => {
  // Когда заходим элементом в бокс
  box.addEventListener("dragover", dragover);
  // Когда отпускаем элемент на нужном боксе
  box.addEventListener("drop", drop);
  // Когда достигаем бокс
  box.addEventListener("dragenter", dragenter);
  // Когда покидаем бокс
  box.addEventListener("dragleave", dragleave);
});

// Функция начала перетаскивания элемента
function dragstart(e) {
  // Меняем цвет на фиолетовый
  e.target.classList.add("item--hold");
  // Удаляем элемент из бокса
  setTimeout(() => e.target.classList.add("item--hide"), 0);
}

// Функция завершения перетаскивания элемента
function dragend(e) {
  // Меняем цвет на синий
  e.target.classList.remove("item--hold");
  // Возвращаем элемент обратно
  e.target.classList.remove("item--hide");
}

function dragover(e) {
  e.preventDefault();
}

function drop(e) {
  // Добавляем наш элемент в нужный бокс
  e.target.append(item);
  // Убираем желтую подсветку
  e.target.classList.remove("box--hovered");
}

function dragenter(e) {
  // Добавляем желтую подсветку
  e.target.classList.add("box--hovered");
}

function dragleave(e) {
  // Убираем желтую подсветку
  e.target.classList.remove("box--hovered");
}