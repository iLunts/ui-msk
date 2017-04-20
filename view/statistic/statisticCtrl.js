app.config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/statistic", {
            templateUrl: "view/statistic/index.html",
            controller: "statisticCtrl"
        });
    }
]);

app.controller('statisticCtrl', function($scope){

    

});
