var key = 'todo';
var data = localStorage.getItem(key);
var todoItemsList = JSON.parse(data);

var todoList = document.getElementById('todo-list');
var buttonAdd = document.getElementById('button-add');
var todoInput = document.getElementById('todo-input');

if(todoItemsList === null) {
  todoItemsList = [];
}
buttonAdd.addEventListener('click', onButtonAddClicked);
todoList.addEventListener('click', onButtonDelClicked);

function onButtonAddClicked(listTodo) {
  var value =todoInput.value;
  todoItemsList.push(value);
  localStorage.setItem(key, JSON.stringify(todoItemsList));
  render(todoItemsList);
}

function onButtonDelClicked(event){
  if (event.target.tagName !== 'BUTTON') {
    return;
  }
  var buttonDelete = event.target;
  var i = parseInt(buttonDelete.dataset.id);
  todoItemsList.splice(i, 1);
    localStorage.setItem(key, JSON.stringify(todoItemsList));
  render(todoItemsList);

};

function render(todoItemsList){
  var todoItems = todoItemsList.map(function(item, index){
    return '<li>'+item+'<button data-id="'+index+'">X</button></li>';
  });
  todoList.innerHTML = todoItems.join('');
}

render(todoItemsList);
