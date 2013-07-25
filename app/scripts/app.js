'use strict';
angular.module( 'App', [ 'dd' ] )
	.config( function( $routeProvider ) {
		$routeProvider
			.when( '/', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl'
			} )
			.otherwise( {
				redirectTo: '/'
			} );
	} );