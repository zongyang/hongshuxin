;
(function() {
	var app = angular.module('app', []);
	app.controller('ctrl', function($scope, model) {
		$scope.searchTb = false;
		$scope.scoreTb = false;
		$scope.search = function() {
			$scope.showUserTb();
			model.getUser($scope.keyword, function(user) {
				$scope.user = user;
			});
		};
		$scope.goScore = function(id) {
			$scope.showScoretb();
			model.getScore(id, function(scores) {
				$scope.scores = scores;
			});
		};
		$scope.showScoretb = function() {
			$scope.scoreTb = true;
			$scope.searchTb = false;
		};
		$scope.showUserTb = function() {
			$scope.scoreTb = false;
			$scope.searchTb = true;
		};
	});
	app.service('model', function($http) {
		this.getUser = function(keyword, cb) {
			var params = {
				name: keyword
			};
			$http({
				type: 'GET',
				params: params,
				url: 'http://59.37.77.114:8080/api/users/search/findByNameAllIgnoringCase',
			}).then(function(response) {
				cb(response.data);

			});
		};
		this.getScore = function(id, cb) {
			var params = {
				user_id: id
			};
			$http({
				type: 'GET',
				params: params,
				url: 'http://59.37.77.114:8080/userti',
			}).then(function(response) {
				cb(response.data);
			});
		};
	});
})()

