var mediocre = require("mediocre");

module.exports = function (app) {
  if (app.mediator) return;
  var mediator = mediocre();
  mediator.application = app;
  app.set("mediator", mediator);
}