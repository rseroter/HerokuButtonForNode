
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Node.js Application ', website: process.env.FAVORITE_WEBSITE });
};