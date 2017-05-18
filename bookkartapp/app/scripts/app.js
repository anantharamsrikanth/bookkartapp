var myapp=angular.module('myapp',['ui.router']);
myapp.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/booklist');
	 $stateProvider.state('booklist',{
		url:'/booklist',
		templateUrl:'views/booklist.html'
	}).state('kartlist',{
		url:'/kartlist',
		templateUrl:'views/kartlist.html',
		controller:'kartcontroller'
	})

});



/*var myapp=angular.module('myapp',['ui.router']);
myapp.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/login');
	 
	 $stateProvider.state('login',{
	 	url:'/login',
	 	templateUrl:'app/views/login.html'
	 })
	 .state('signup',{
	 	url:'/signup',
	 	templateUrl:'app/views/signup.html'
	 })
	
});*/