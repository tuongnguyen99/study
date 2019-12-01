var todoList = [];
var input = document.getElementById('newTodo');
var todo = document.getElementById('todo');

function addNewTodo(){
  var newTodo = input.value;
  todoList.push(newTodo);
  input.value = '';
  render();
}

function render(){
  var todoItems = todoList.map(function(item){
    return '<li>'+item+'</li>';
  });
  console.log(todoItems.join(''));
  todo.innerHTML = todoItems.join('');
}
render();
