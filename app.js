let listTodoWrapper = document.querySelector('.list-todo__wrapper');
let settingsItemMain = document.querySelector('.settings-item__main');
let settingsItemDel = document.querySelector('.settings-item__del');
let settingsitemAddTodo = document.querySelector('.settings-item__add-todo');



let todo = [
  { id: 1, text: "Купить пиво", checked: false },
  { id: 2, text: "Купить мясо", checked: false },
  { id: 3, text: "Купить рыбу", checked: false },
];

function renderTodo() {
  if (todo.length > 0) {
   todo.map(function(todoList){
      let div = document.createElement('div');
   })
  } else if (todo.length == 0) {
    console.log("Нет задач");
  }
}

function addTodo(newText) {
  if (newText) {
    todo.unshift({ id: 1, text: newText, checked: false });
    renderTodo();
  } else {
    alert("Веддите текст");
  }
}

function deleteTodo(pos) {
  todo.splice(pos, 1);
  renderTodo();
}

function checkedTodo(index, value) {
  if (value == true) {
    todo[index].checked = true;
  } else if (value == false) {
    todo[index].checked = false;
  }
  renderTodo();
}

function allDeleteTodo() {
    todo.length = 0;
    renderTodo();
}


//Добавление убирание классов


settingsItemMain.addEventListener('click', () => {
  settingsItemDel.classList.toggle('animation-block');
  settingsitemAddTodo.classList.toggle('animation-block');
})
