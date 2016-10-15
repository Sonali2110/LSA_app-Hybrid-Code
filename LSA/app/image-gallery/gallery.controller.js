(function () {
    angular
        .module('starter')
        .controller('GalleryController', galleryController);

    galleryController.$inject = [];

    function galleryController() {
        var vm = this;

        vm.images = [];

        vm.loadImages = function () {
            for (var i = 1; i <= 10; i++) {
                
                vm.images.push({ id: i - 1, src: "http://139.59.51.207:3000/api/image/" + i });

                //vm.images.push({ id: i, src: "http://placehold.it/50x50" });
            }
        }

    };

})();