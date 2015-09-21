bestRestaurant.controller('RestaurantsCtrl', function RestaurantsCtrl($scope) {
    $scope.restaurants = [];

    //restaurantName is defined in the html ng-model directive.
    //After the restaurantName is added to the array, we clear it so it doesn't get added twice
    $scope.addRestaurant = function () {
        $scope.restaurants.push({ name: $scope.restaurantName, food: $scope.restaurantFood, location: $scope.restaurantLocation, price: $scope.restaurantPrice });
        $scope.restaurantName = null;
        $scope.restaurantFood = null;
        $scope.restaurantLocation = null;
        $scope.restaurantPrice = null;
    };
    $scope.deleteRestaurant = function(restaurant) {
        var index = $scope.restaurants.indexOf(restaurant);
        $scope.restaurants.splice(index,1);
    };
});
