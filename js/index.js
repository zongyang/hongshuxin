$(function() {
	$('.btn-search').click(function() {
		var keyword = $('.input-keyword').val();
		$('.table-search').removeClass('hide');
		load(keyword);
	});

	function load(keyword) {
		$.ajax({
			type: 'get',
			url: '/api/users/search/findByNameAllIgnoringCase',
			data: {
				name: keyword
			}
		}).done(renderSingle);
	};

	function loadByJsonP(keyword) {
		$.ajax({
			type: 'get',
			dataType: "jsonp",
			jsonpCallback: 'callback',
			url: '/api/users/search/findByNameAllIgnoringCase',
			//url: 'http://127.0.0.1:3000/jsonp',
			data: {
				name: keyword
			}
		}).done(render);
	};

	function render(data) {
		var $table = $('.table-search tbody').empty();
		var dom = '';

		data.forEach(function(item) {
			dom += '<tr>';
			dom += '<td>' + item.id + '</td>';
			dom += '<td>' + item.realname + '</td>';
			dom += '<td>' + item.region + '</td>';
			dom += '<td><a href=">试题' + item._links.datis.href + '"</a></td>';
			dom += '</tr>';
		});

		$table.append(dom);
	};

	function renderSingle(data) {
		var $table = $('.table-search tbody').empty();
		var dom = '';
		dom += '<tr>';
		dom += '<td>' + data.id + '</td>';
		dom += '<td>' + data.realname + '</td>';
		dom += '<td>' + data.region + '</td>';
		dom += '<td><a href=">试题' + data._links.datis.href + '"</a></td>';
		dom += '</tr>';
		$table.append(dom);
	};
});