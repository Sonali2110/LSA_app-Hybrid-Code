app.controller('MapsController', function ($scope,NgMap,$state) {
	NgMap.getMap().then(function (map) {
		console.log(map.getCenter());
		console.log('markers', map.markers);
		console.log('shapes', map.shapes);
	});

	$scope.back = function(){
		$state.go('tabs.awards');
	}

});