app.config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/modal", {
            templateUrl: "view/modal/index.html",
            controller: "modalCtrl"
        });
    }
]);

app.controller('modalCtrl', function($scope){
  $scope.onSuccess = function(e) {
    e.clearSelection();
  };

  $scope.isOpenModalBlank = false;
  // $scope.isOpenEventEdit = false;

  $scope.changeState = function(stateItem){
    stateItem = !stateItem;
    console.log(stateItem);
    return stateItem;
  }
});
