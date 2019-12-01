var btnClear = document.getElementById('clearButton');
btnClear.addEventListener('click', () => {
  var form = document.getElementById('loginForm');
  form.reset();
})

var users = [
	{
  	name: 'Thinh',
    phone: '070123123'
  },
  {
  	name: 'Hung',
    phone: '080456456'
  },
  {
  	name: 'Hoang',
    phone: '090123123'
  }
];
var userList = document.getElementById('userList');
var searchInput = document.getElementById('searchInput');

function render(users) {
	var content = users.map(function(user) {
  	return '<li>' + user.name + ' - ' + user.phone + '</li>';
  });
  userList.innerHTML = content.join('');
}

render(users);

searchInput.addEventListener('keyup', function(event) {
	// sự kiện 'change' chỉ xảy ra khi input bị mất focus
  // sử dụng sự kiện keyup để tìm kiếm người dùng có số điện thoại khớp với nội dung tìm kiếm.
  // Gợi ý:
  // - biến value dưới đây là giá trị của input tại thời điểm gõ phím
  // - sử dụng array.filter và string.indexOf để lọc users array, trả về những phần tử có số điện thoại chứa string lưu trong biến `value`
  // Sử dụng Chrome Developer Tools để xem giá trị hiển thị ra sau mỗi lần gõ
	var value = searchInput.value;
  var result = users.filter(function(user){
    return user.phone.includes(value);
  });
  console.log(value);
  console.log(result.length);
});
