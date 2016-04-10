app.controller('GameOverController', ['$scope', 'cards', '$routeParams', function($scope, cards, $routeParams) {
  cards.success(function(data) {
  	console.log(data);
  	console.log(data[$routeParams.id]);
    $scope.detail = data[$routeParams.id];
  });
}]);