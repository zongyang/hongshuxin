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
			/*cb({
				"id": 'wqe',
				"name": "haibor",
				"state": "1",
				"realname": "田海波",
				"password": "111111",
				"email": "haibor@qq.com",
				"phone": "18926265656",
				"region": "天河",
				"power": "1",
				"admin": "1",
				"other1": null,
				"other2": null,
				"_links": {
					"self": {
						"href": "http://59.37.77.114:8080/api/users/1"
					},
					"user": {
						"href": "http://59.37.77.114:8080/api/users/1"
					},
					"datis": {
						"href": "http://59.37.77.114:8080/api/users/1/datis"
					}
				}
			})
			return;*/
			var params = {
				keyword: keyword
			};
			$http({
				type: 'GET',
				params: params,
				url: '/api/users/search/findByNameAllIgnoringCase',
			}).then(function(response) {
				cb(response.data);

			});
		};
		this.getScore = function(id, cb) {

			/*cb([{
				"user_answer": "A",
				"number": 1,
				"leibie": "one",
				"wenjuan_id": 1,
				"tigan": "你的学校是？",
				"right_answers": "A",
				"defen": 10
			}, {
				"user_answer": "A|B",
				"number": 2,
				"leibie": "many",
				"wenjuan_id": 1,
				"tigan": "你的单位是？",
				"right_answers": "C|D|E|F",
				"defen": 0
			}])
			return;*/
			var params = {
				user_id: id
			};
			$http({
				type: 'GET',
				params: params,
				url: '/api/userti',
			}).then(function(response) {
				cb(response.data);
			});
		};
	});

})()