;(function() {
	var app = angular.module('app');
	app.directive('appNav', function() {
		return {
			restrict: 'AE',
			templateUrl: 'nav.html'
		}
	});
	app.directive('appUserTable', function() {
		return {
			restrict: 'AE',
			templateUrl: 'user.table.html'
		}
	});
	app.directive('appScoreTable', function() {
		return {
			restrict: 'AE',
			templateUrl: 'score.table.html'
		}
	});
})()