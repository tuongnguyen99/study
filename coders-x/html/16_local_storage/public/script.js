var todoInput = document.getElementById('todo-input');
var buttonAdd = document.getElementById('button-add');
var todoList = document.getElementById('todo-list');
var todoStorageKey = 'todo-key';
var todoListItems = [
  'Go to school',
  'Play soccer',
  'Go to bed'
];
var data = localStorage.getItem(todoStorageKey);
console.log(data);
if (data) {
  todoListItems = JSON.parse(data);
}else{
  todoListItems =[];
}
buttonAdd.addEventListener('click', onButtonAddClicked);

function onButtonAddClicked() {
  var newTodo = todoInput.value;
  todoListItems.push(newTodo);
  todoInput.value = '';
  render(todoListItems);
  localStorage.setItem(todoStorageKey,JSON.stringify(todoListItems));
  sessionStorage.setItem('add', 'adfaf');
}
function render(list){
  var listItems = list.map((item) => {
    return '<li>' + item + '</li>';
  });
  todoList.innerHTML = listItems.join('');
}
render(todoListItems);
