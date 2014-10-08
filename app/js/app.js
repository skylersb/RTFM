var app = angular.module('fairPolls', ['firebase'], ['ngRoute'])

app.config(['routeProvider', function ($routeProvider){
	$routeProvider
	.when('/login', {
		templateUrl: 'app/js/login/login.html',
		controller: 'loginCtrl'
	})
	.when ('')
	.otherwise({
		redirectTo: '/login'
	})
}]);