function MyController() {
    var vm = this;
    vm.name = 'oguz';
}

function MyDirective() {
    return {
        restrict: 'E',
        templateUrl: 'directive.html',
        controller: MyController,
        controllerAs: 'myCtl'
    }
}

angular.module('mydirective', [])
    .directive('mydirective', MyDirective);
