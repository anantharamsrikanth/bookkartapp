var myapp=angular.module('myapp');
myapp.controller('kartcontroller',function($scope,kartService){
	$scope.kart=kartService.getkart();

	$scope.addtokart=function(books){
		$scope.kart.push($scope.books);

	}

$scope.buy=function(books){
	kartService.buy(books);
}
});	
