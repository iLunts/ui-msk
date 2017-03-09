app.config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/avatar", {
            templateUrl: "view/avatar/index.html",
            controller: "avatarCtrl"
        });
    }
]);

app.controller('avatarCtrl', function($scope){

});
