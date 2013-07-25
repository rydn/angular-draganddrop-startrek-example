///////////
//	deps //
///////////
var request = require( 'request' ),
	_ = require( 'lodash' );
/**
 * route handler to pull trek movie data from endpoint and send onto client
 * @param  {Request} req [expressjs request object]
 * @param  {Respose} res [expressjs response object]
 *
 * @path	GET 	/trek
 *
 * @return {Function}
 */
module.exports = function( req, res ) {
	request( 'http://mymovieapi.com/?title=star+trek&type=json&plot=none&episode=1&limit=10&yg=0&mt=M&lang=en-US&offset=&aka=&release=&business=0&tech=0', function( error, response, body ) {
		if ( !error && response.statusCode == 200 ) {
			body = processTreks( JSON.parse( body ) );
			res.send( body );
		} else {
			throw error || 'woops!';
		}
	} );
};
////////////////////////
//	private functions //
////////////////////////
/**
 * process treks from service returning just needed fields
 *
 * @param  {Array} treks
 *
 * @return {Array}
 */

function processTreks( treks ) {
	return _.map( treks, function( trek ) {
		return {
			title: trek.title,
			poster: trek.poster
		};
	} );
}