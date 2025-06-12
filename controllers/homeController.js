const homeView = require('../views/home');

exports.getHome = (req, res) => {
  res.send(homeView);
};