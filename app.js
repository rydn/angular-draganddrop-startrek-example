var express = require( 'express' ),
	routes = require( './routes' ),
	http = require( 'http' ),
	path = require( 'path' );
var app = express( );
//	config
app.set( 'port', process.env.PORT || 3141 );
app.set( 'views', __dirname + '/views' );
app.set( 'view engine', 'jade' );
app.use( express.favicon( ) );
app.use( express.logger( 'dev' ) );
app.use( express.bodyParser( ) );
app.use( express.methodOverride( ) );
app.use( app.router );
app.use( require( 'less-middleware' )( {
	src: __dirname + '/app'
} ) );
app.use( express.static( path.join( __dirname, 'app' ) ) );
app.use( express.errorHandler( ) );
//	routes
app.get( '/', routes.index );
app.get( '/trek', routes.trek );
//	start server
http.createServer( app )
	.listen( app.get( 'port' ), function( ) {
		console.log( 'TvT server listening on port ' + app.get( 'port' ) );
	} );