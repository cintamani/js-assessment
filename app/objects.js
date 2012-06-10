if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
      return fn.apply(obj, arguments);
    },

    alterObjects : function(constructor, greeting) {
      constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
      var result = [], property;

      for (property in obj) {
        if (obj.hasOwnProperty(property)) {
          result.push(property + ": " + obj[property]);
        }
      }

      return result;
    }
  };
});
