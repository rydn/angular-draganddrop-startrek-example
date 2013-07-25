"use strict";
var app = angular.module( 'dd', [ ] );
/**
 * renders unorederd lists into sortable lists! And track it all with angular!
 * @directive	ddBetweenList
 *
 * @param  {Function} $parse
 * @return {ngDirective}
 */
app.directive( 'ddBetweenList', function( $parse ) {
	return function( scope, element, attrs ) {
		////////////////
		//	Globals //
		////////////////
		var args = attrs.ddBetweenList.split( ',' );
		var targetListArgs = $( '#' + args[ 1 ] ).attr( 'dd-between-list' ).split( ',' );
		var startIndex = -1;
		var targetStat = true;
		var targetList;
		var nxtItem;
		///////////////////////
		//	Event Watchers //
		///////////////////////
		scope.$watch( args[ 0 ], function( value ) {
			nxtItem = value;
		}, true );
		scope.$watch( targetListArgs[ 0 ], function( value ) {
			targetList = value;
		}, true );
		//////////////////////////////
		//	jQuery implementation //
		//////////////////////////////
		$( element[ 0 ] ).sortable( {
			items: 'li',
			start: function( event, elm ) {
				//	set offset
				startIndex = ( $( elm.item ).index( ) );
				targetStat = false;
			},
			stop: function( event, elm ) {
				//	calculate and update models
				var newParent = elm.item[ 0 ].parentNode.id;
				var newIndex = ( $( elm.item ).index( ) );
				var toMove = nxtItem[ startIndex ];
				nxtItem.splice( startIndex, 1 );
				if ( newParent == args[ 1 ] ) {
					targetList.splice( newIndex, 0, toMove );
				} else {
					nxtItem.splice( newIndex, 0, toMove );
				}
				scope.$apply( targetListArgs[ 0 ] );
				scope.$apply( args[ 0 ] );
			},
			connectWith: '#' + args[ 1 ]
		} )
	}
} );