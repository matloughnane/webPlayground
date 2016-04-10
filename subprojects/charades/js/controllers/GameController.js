app.controller('GameController', ['$scope', 'cards', '$routeParams', function($scope, cards, $routeParams) {
	console.log("GameController");
	cards.success(function(data){
		$scope.cards = data;
		console.log($scope.cards);
		var numberGame = Math.floor((Math.random() * $scope.cards.length));
		
		console.log(numberGame);

		$scope.guessWord = $scope.cards[(numberGame)];

		console.log($scope.guessWord.card_index);

		setTimeout(function gameOver(){	window.location.href = "/#/gameOver/"+$scope.guessWord.card_index+""}, 5000);

	});
}]);
