const medicationRoutes = require('./medication_routes');

module.exports = function(app, db) {
  medicationRoutes(app, db);
  // Other route groups could go here, in the future
};
