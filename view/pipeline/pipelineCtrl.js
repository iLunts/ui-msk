app.config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/pipeline", {
            templateUrl: "view/pipeline/index.html",
            controller: "pipelineCtrl"
        });
    }
]);

app.controller('pipelineCtrl', function($scope){

    $scope.pipelineList = [
        {title: 'Удалить', badge: '#f44336', },
        {title: 'Претензия', badge: '#ff9800'},
        {title: 'Оплатить', badge: '#4caf50'}
    ];

});
