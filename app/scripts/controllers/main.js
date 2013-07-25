'use strict';
angular.module( 'App' )
	.controller( 'MainCtrl', function( $rootScope, $http ) {
		$http.get( '/trek' )
			.success( function( treks ) {
				angular.element( '.loadingLI' ).remove( );
				$rootScope.items = {
					availableItems: treks,
					selectedItems: [ ]
				};
			} );
	} );