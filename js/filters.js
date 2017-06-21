;
(function() {
	var app = angular.module('app');
	app.filter('paperType', function() {
		return function(input) {
			var result = '未知题型';
			switch(input) {
				case 'one':
					result = '单选题';
					break;
				case 'many':
					result = '多选题';
					break;
				case 'input':
					result = '填空题';
					break;
			}
			return result;
		}
	});
})()