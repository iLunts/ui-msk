app.config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/", {
            templateUrl: "view/font/index.html",
            controller: "fontCtrl"
        });

        $routeProvider.when("/font", {
            templateUrl: "view/font/index.html",
            controller: "fontCtrl"
        });
    }
]);

app.controller('fontCtrl', function($scope){

});
