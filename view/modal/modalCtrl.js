app.config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/modal", {
            templateUrl: "view/modal/index.html",
            controller: "modalCtrl"
        });
    }
]);

app.controller('modalCtrl', function($scope){

});