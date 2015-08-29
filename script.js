var mycarModule = angular.module('MyCarModule', []);

mycarModule.controller('SearchSitesController', function($scope){
	$scope.searchSites = [
		{
			id: "100",
			url: "buscaavancada/03"
		},
		{
			id: "200",
			url: "buscaavancada/05"
		}
	];

	$scope.add = function() {
		$scope.searchSites.push($scope.searchSite);
	};

	$scope.remove = function(index) {
		$scope.searchSites.splice(index, 1);
	};


})