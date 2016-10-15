(function () {
    angular
        .module('starter')
        .controller('GalleryzoomController', galzoomCtrl);

    galzoomCtrl.$inject = ['$stateParams'];

    function galzoomCtrl($stateParams) {
        var index = $stateParams.index;
        console.log("image -- " + index);

        var vm = this;
        vm.src = 'http://139.59.51.207:3000/api/image/' + (++index);
        console.log(vm.src);
    };

})();