app.config(["$routeProvider", function ($routeProvider) {
  $routeProvider.when("/modal", {
    templateUrl: "view/modal/index.html",
    controller: "modalCtrl"
  });
}]);

// app.controller('modalCtrl', function($scope){
//   $scope.onSuccess = function(e) {
//     e.clearSelection();
//   };
// });

app.controller('modalCtrl', function ($scope, $uibModal, $log) {
  $scope.onSuccess = function (e) {
    e.clearSelection();
  };

  $scope.open = function (size, template) {

    var modalInstance = $uibModal.open({
      templateUrl: template,
      size: size,
      backdrop: true,
      backdropClass: 'modal__overlay'
    });
  };

});
