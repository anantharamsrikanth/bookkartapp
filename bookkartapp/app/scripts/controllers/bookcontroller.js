var myapp=angular.module('myapp');
myapp.controller('bookcontroller',function($scope,bookservice,kartService){
	$scope.book= bookservice.getbooks();
	$scope.addtokart=function(books){
		kartService.addtokart(books);
	}
	
	
		
	
});






