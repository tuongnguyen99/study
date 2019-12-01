var todoList = document.getElementById('todo-list');
var loadTodoButton = document.getElementById('load-todo');
const link = 'http://localhost:9999/todo';

loadTodoButton.addEventListener('click', () => {
  axios.get(link)
    .then(function(response) {
      var data = response.data;
      render(data)
    });
})

function render(arr) {
  var todoItem = arr.map(function(item) {
    return '<li>' + item.content + '</li>';
  });
  todoList.innerHTML = todoItem.join('');
};
