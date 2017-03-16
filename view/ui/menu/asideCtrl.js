app.config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/", {
            templateUrl: "view/typeface/index.html",
            controller: "typefaceCtrl"
        });

        $routeProvider.otherwise({ redirectTo: "/" });
    }
]);

app.controller('typefaceCtrl', function($scope){});
