// defining the module
(function() {
    'use strict';
    var movieApp = angular.module('MovieApp', ['toastr', 'ui.router']);
    //creating the different states
    movieApp.config(function($stateProvider, $urlRouterProvider) {
    	$urlRouterProvider.otherwise("/state1");
        // making the first state for the search
    	$stateProvider
    		.state('state1', {
    			url: "/state1", 
    			templateUrl: "app/partials/state1.html",
    			controller: "movieController",
    			controllerAs: "vm"
            })
            // making the second state available for more movie details through a button
    		.state('state1.moreInfo', {
    			url: "/moreInfo/:imdb",
    			templateUrl: "app/partials/state1.moreInfo.html", 
                controller: "movieControllerDetail",
                controllerAs: "vm2"
    		})
    });
})();