(function() {
    'use strict';
    angular
        .module('MovieApp')
        .service('getInfo', getInfo);
    getInfo.$inject = ['$http', '$q'];
    /* @ngInject */
    function getInfo($http, $q) {
        this.getDetails = getDetails;
        this.getMovies = getMovies;
        ////////////////
        // Get the movies from the search
        function getMovies(search) {
            var defer = $q.defer();
            // using the 'get' funciton and then going through the search for a group of movies
            $http({
                method: 'GET',
                url: 'http://www.omdbapi.com/',
                params: {
                    apikey: 'c800acd6', 
                    s: search
                }
            }).then(function(result) {
                if(typeof result === 'object') {
                    defer.resolve(result);
                } else{
                    defer.reject('service error');
                }
            },
            function(error){
                defect.reject(error);
            });
            return defer.promise;
        }

        // Get the details from the specific movie
        function getDetails(info) {
            var defer = $q.defer();
            // using the 'get' function to pull up all the data for info
            $http({
                method: 'GET',
                url: 'http://www.omdbapi.com/',
                params: {
                    apikey: 'c800acd6', 
                    i: info
                }
            }).then(function(result) {
                if(typeof result === 'object') {
                    defer.resolve(result);
                } else{
                    defer.reject('service error');
                }
            },
            function(error){
                defect.reject(error);
            });
            return defer.promise;
        }
    }
})();