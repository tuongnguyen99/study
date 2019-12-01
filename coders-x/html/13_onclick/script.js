var count = 0;
var counter = document.getElementById('count');
counter.innerHTML = '0'

function getCount() {
  count++;
  counter.innerHTML = count;
}


var searchBox = document.getElementById('searchBox');
function clearText(){
	searchBox.value = '';
}


var nameBox = document.getElementById('name');
var hello = document.getElementById('hello');
function sayHello(){
  var name = nameBox.value;
  hello.innerHTML = 'Hello ' + name;
}
