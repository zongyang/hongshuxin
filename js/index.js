$(function() {
	$('.btn-search').click(function() {
		$('.table-search').removeClass('hide');
		load();
	});

	function load() {
		$.ajax({
			type: "get",
			url: "http://59.37.77.114:8080/api/",
			async: true
		}).done(function(response) {
			console.log(response);
		});
	};
});