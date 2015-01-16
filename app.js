
$(document).ready(function(){

var arr = [];
console.log('test');

var insertData = function() {
	for (var i = 0; i < arr.length; i++) {
		$('#userInfo' + (i + 1)).html('<div>' +
			'User Info:' +
			'<li>' +
			'First name: ' + arr[i].first_name +
			'</li>' +
			'<li>' +
			'Last name: ' + arr[i].last_name +
			'</li>' +
			'<hr>' + 
			'</div>'
		)
	};
}

$('#getUsers').on('click', function() {
	return $.ajax({
		method: 'GET',
		url: 'http://reqr.es/api/users?page=1',
		success: function(res) { //res is the data that is sent back. can actually
		arr = res.data            // be called "data" . res stands for "response"
		insertData(res.data);
		}
	})
})


$('#addUser').on('click', function(e){
	e.preventDefault();
	var userName = $('#name').val();
	var userJob = $('#job').val();
	return $.ajax({
		method: 'POST',
		url: 'http://reqr.es/api/users',
		data: {name: userName, job: userJob},  //data we are sending. an object with key of name and key of job
		success: function(res) {               //getting the data back from API (confirms that API recieved data)
			$('#recentUser').html(             //html function to add html to recentUSer in DOM
				'<li>' +
					'name: ' + res.name +
				'</li>' +
				'<li>' +
					'job: ' + res.job +
				'</li>' +
				'<li>' +
					'id: ' + res.id +
				'</li>'
						+
				'<li>' +
					'created at: ' + res.createdAt +
				'</li>'
			)
		}
	})
});









})

