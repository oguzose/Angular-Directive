function MyController() {
    var vm = this;
    vm.name = 'oguz';

    vm.records = [{
        name: "Alfreds Futterkiste",
        city: "Berlin",
        country: "Germany"
    }, {
        name: "Ana Trujillo Emparedados y helados",
        city: "México D.F.",
        country: "Mexico"
    }, {
        name: "Blondel père et fils",
        city: "Strasbourg",
        country: "France"
    }, {
        name: "Bólido Comidas preparadas",
        city: "Madrid",
        country: "Spain"
    }];
}

function MyDirective() {
    return {
        restrict: 'E',
        templateUrl: 'directive.html',
        controller: MyController,
        controllerAs: 'myCtl'
    }
}

angular.module('app', [])
    .directive('myDirective', MyDirective);
