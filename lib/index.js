var mediocre = require("mediocre");

module.exports = function (app) {
  var mediator = app.mediator = mediocre()
  mediator.application = app
}