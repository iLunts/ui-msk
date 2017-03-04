app.config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/", {
            templateUrl: "view/home/index.html",
            controller: "homeCtrl"
        });

        $routeProvider.otherwise({ redirectTo: "/" });
    }
]);

app.controller('homeCtrl', function($scope){

    $scope.directionList = [
        {title: 'Наименование продукции', text: 'ООО «Сельскохозяйственная компания «Здоровый росток»'},
        {title: 'Направления использования инвестиционных ресурсов', text: 'Создание инфраструктуры, Закупка оборудования, технологий'},
        {title: 'Стратегия работы на внутреннем рынке', text: 'Более высокое качество, Более привлекательный сервис'},
        {title: 'Направления использования инвестиционных ресурсов', text: 'Создание инфраструктуры, Закупка оборудования, технологий'},
        {title: 'Стратегия работы на внутреннем рынке', text: 'Более высокое качество, Более привлекательный сервис'},
        {title: 'Наименование продукции', text: 'ООО «Сельскохозяйственная компания «Здоровый росток»'},
        {title: 'Наименование продукции', text: 'ООО «Сельскохозяйственная компания «Здоровый росток»'},
        {title: 'Направления использования инвестиционных ресурсов', text: 'Создание инфраструктуры, Закупка оборудования, технологий'},
        {title: 'Стратегия работы на внутреннем рынке', text: 'Более высокое качество, Более привлекательный сервис'}
    ];

    $scope.similar = [
        {subtitle: 'Машиностроение', title: 'Создание предприятия на базе компании производящей строительные материалы.', date: '20.05.2017', initiator: 'Наименование Инициатора', region: 'Могилёвская', payback: '5 лет', investments: '140 000$'},
        {subtitle: 'Машиностроение', title: 'Создание предприятия на базе компании производящей строительные материалы.', date: '20.05.2017', initiator: 'Наименование Инициатора', region: 'Могилёвская', payback: '5 лет', investments: '140 000$'},
        {subtitle: 'Машиностроение', title: 'Создание предприятия на базе компании производящей строительные материалы.', date: '20.05.2017', initiator: 'Наименование Инициатора', region: 'Могилёвская', payback: '5 лет', investments: '140 000$'}
    ];
});