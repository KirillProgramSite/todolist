let listTodoWrapper = document.querySelector(".list-todo__wrapper");

let settingsItemMain = document.querySelector(".settings-item__main");
let settingsItemDel = document.querySelector(".settings-item__del");
let settingsitemAddTodo = document.querySelector(".settings-item__add-todo");
let allDeleteBtn = document.querySelector(".all_delete-btn");

let addTodoInput = document.querySelector('.add-todo-input');
let addTodoBtn = document.querySelector('.add-todo-btn')

let dateObject = new Date();
let dateTodo = {
  year: dateObject.getFullYear(),
  month: dateObject.getMonth(),
  day: dateObject.getDate(),
  hours: dateObject.getHours(),
  minutes: dateObject.getMinutes(),
};

let todo = [
  { id: 1, text: "Купить пиво", checked: false, date: dateTodo },
  { id: `${Math.random()}`, text: "Купить мясо", checked: false, date: dateTodo },
  { id: `${Math.random()}`, text: "Купить рыбу", checked: false, date: dateTodo },
];

function renderTodo() {
    let div = '';

    todo.map(function (todoList) {
      if(todoList.checked == true){
        return;
      }

      //list-todo_item
      let dateText = `${todoList.date.day}.${todoList.date.month}.${todoList.date.year} ${todoList.date.hours}:${todoList.date.minutes}`;

      div += `
      <div class="list-todo_item">
      <div class="list-todo_item-wrapper">
      <div class="list-todo_item-text">
          <h1>${todoList.text}</h1>
          <time>${dateText}</time>
      </div>
      <div class="list-todo_item-actions">
          <button data-id="${todoList.id}">Сделано</button>
      </div>
      <div class="list-todo_item-actions-mobile">
          <div class="list-todo_item-actions-mobile__wrapper">
              <div class="list-todo-actions-info">
                  <img src="sprites/info.svg" alt="">
              </div>
              <div class="list-todo-actions-del">
                  <img src="sprites/delete.svg" alt="">
              </div>
              <div class="list-todo-actions-btn">
                  <button data-id="${todoList.id}">Сделано</button>
              </div>
          </div>
      </div>
  </div>
      </div>
      `;
    });
    listTodoWrapper.innerHTML = div;
}

function addTodo(newText) {
  if (newText) {
    todo.unshift({ id: `${Math.random()}`, text: newText, checked: false, date: dateTodo });
    renderTodo();
  } else {
    alert("Веддите текст");
  }
}

function deleteTodo(pos) {
  todo.splice(pos, 1);
}

function checkedTodo(id) {
  todo.forEach(todo => {
    if(todo.id == id) {
      todo.checked = true;
    }
  })

  renderTodo();
}

function allDeleteTodo() {
  todo.length = 0;
  renderTodo();
}


//Добавление убирание классов

settingsItemMain.addEventListener("click", () => {
  settingsItemDel.classList.toggle("animation-block");
  settingsitemAddTodo.classList.toggle("animation-block");
});

// if(todo.length == 0) {
//   allDeleteBtn.style.display = 'none';
//   settingsItemDel.style.display = 'none';
// } else {
//   allDeleteBtn.style.display = 'block';
//   settingsItemDel.style.display = 'block';

//   allDeleteBtn.addEventListener('click', allDeleteTodo);
//   settingsItemDel.addEventListener('click', allDeleteTodo)
// }

allDeleteBtn.addEventListener('click', allDeleteTodo);
settingsItemDel.addEventListener('click', allDeleteTodo)


addTodoBtn.addEventListener('click', () => {
  if(addTodoInput.value.length > 90){
    alert(`Больше 500 символов быть не должно. Изъяснитесь понятнее. Вы ввели ${addTodoInput.value.length}`);
    addTodoInput.value = '';
  } else {
    let text = addTodoInput.value;
    addTodo(text);
    addTodoInput.value = '';
  }
})

listTodoWrapper.addEventListener('click', event => {
  if(event.target.tagName !== 'BUTTON') {
    return;
  } else {
    const id = event.target.dataset.id;
    checkedTodo(id);
  }
})

renderTodo()