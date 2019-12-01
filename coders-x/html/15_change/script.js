var usersTable = document.getElementById('users-table');
var members = [
  {name: 'Tuong Nguyen', age: 18},
  {name: 'Nguyen Tuong', age: 20},
  {name: 'Nguyen Chi Tuong', age: 21},
  {name: 'Tuong Chi Nguyen', age: 21}
];
var selector = document.getElementById('age-selector');

selector.addEventListener('change', () => {
  result = members.filter(function (member) {
    selectedValue = selector.value;
    console.log(selectedValue);
    return member.age == selectedValue;
  })
  console.log(result);
  render(result);
})

function render(listMember) {
  listItem = listMember.map(function(member) {
    return '<tr><td>' + member.name + '</td><td>' + member.age +'</td></tr>';
  });
  usersTable.innerHTML = listItem.join('');
}

render(members);
