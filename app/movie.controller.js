// Make a controller to pass a search for the service and grab returned movies

(function() {
    'use strict';

    angular
        .module('MovieApp')
        .controller('movieController', movieController);

    movieController.$inject = ['getInfo', 'toastr'];
    
    /* @ngInject */
    function movieController(getInfo, toastr) {
        var vm = this;
        vm.title = 'movieController';
        vm.input;
        vm.all;
        // pull all search data and put it into vm.all
        vm.showMovies = function(search) {
        	getInfo.getMovies(search).then(
        		function(result) {
        			vm.all = result.data.Search;
        		},
        		function(error) {
        			toastr.error('RIP controller X_X');
        		}
        	)
        }
    }
})();