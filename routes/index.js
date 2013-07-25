
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Trek Vs Trek' });
};

exports.trek = require('./trek');