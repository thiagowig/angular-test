var mycarModule = angular.module('MyCarModule', []);

mycarModule.controller('SearchSitesController', function($scope){
	$scope.searchSites = [
		{
			id: 1,
			url: "buscaavancada/100"
		},
		{
			id: 3,
			url: "buscaavancada/200"
		},
		{
			id: 2,
			url: "buscaavancada/150"
		}
	];

	$scope.add = function() {
		$scope.searchSites.push($scope.searchSite);
		$scope.searchSite = '';
	};

	$scope.remove = function(index) {
		$scope.searchSites.splice(index, 1);
	};

	$scope.userName = 'Thiago Fonseca';
	$scope.userPass = "admin123";
	$scope.userPrice = 100;

});