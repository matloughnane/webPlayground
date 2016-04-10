app.factory('cards', ['$http', function($http) {
  return $http.get('js/services/cards.json')
         .success(function(data) {
           return data;
           console.log("success");
         })
         .error(function(data) {
           return data;
         });
}]);