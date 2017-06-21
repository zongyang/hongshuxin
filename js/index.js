$(function() {
	$('.btn-search').click(function() {
		var keyword = $('.input-keyword').val();
		$('.table-search').removeClass('hide');
		load(keyword);
	});

	function load(keyword) {
		console.log(keyword)
		$.ajax({
			type: 'get',
			url: 'api/users/search/findByNameAllIgnoringCase',
			data: {
				name: keyword
			}
		}).done(function(response) {
			render(response);
		});
	};

	function render(data) {
		var $table = $('.table-search tbody').empty();
		var dom = '';

		data.forEach(function(item) {
			dom += '<tr>';
			dom += '<td>' + item.id + '</td>';
			dom += '<td>' + item.realname + '</td>';
			dom += '<td>' + item.region + '</td>';
			dom += '</tr>';
		});

		$table.append(dom);
	};
});