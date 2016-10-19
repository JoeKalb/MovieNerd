// connect the "More Details" button with the service to grab more info

(function() {
    'use strict';

    angular
        .module('MovieApp')
        .controller('movieControllerDetail', movieControllerDetail);

    movieControllerDetail.$inject = ['getInfo', 'toastr', '$stateParams'];
    
    /* @ngInject */
    function movieControllerDetail(getInfo, toastr, $stateParams) {
        params: {imdb: $stateParams.imdb};
        var vm2 = this;
        vm2.title = 'movieControllerDetail';
        vm2.moreDetail;
        var imdb = $stateParams.imdb;
        vm2.movieTitle =''; // setting title to an empty value for ng-hide

        // getting all the IMDB details 
        vm2.showDetails = function(detail) {
            
        	getInfo.getDetails(detail).then(
        		function(result) {
        			vm2.moreDetail = result.data;
                    vm2.movieTitle = vm2.moreDetail.Title; 
        		},
        		function(error) {
        			toastr.error('RIP details controller X_X');
        		}
        	)
        }
        function activate() {
            vm2.showDetails(imdb);
        }
        activate();

    }
})();
