const requireFromString = require('require-from-string');

// this loader handles the conversion of handlebars templates to simple HTML
// see vue.config.js
module.exports = function(ejsContent) {
  return requireFromString(ejsContent)({
    routes: {
      // Completely working, but does nothing right now.
      // TODO: add routes helper
    }
  });
}