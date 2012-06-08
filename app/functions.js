/*jslint white:true*/
/*global define, require, module*/

if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  "use strict";

  return {
    argsAsArray : function(fn, arr) {
      return fn.apply(this, arr);
    },

    speak : function(fn, obj) {
      return fn.call(obj);
    },

    functionFunction : function(greeting) {
      return function (name) {
        return greeting + ", " + name;
      };
    },

    partial : function(fn, greeting, name) {
      return function (punctuation) {
        return fn.call(this, greeting, name, punctuation);
      };
    },

    useArguments : function() {
      var i = 0, result = 0, args = Array.prototype.slice.apply(arguments);
      for (i; i < args.length; i += 1) { result += args[i]; }
      return result;
    },

    callIt : function(fn) {
      // take starting from the second because the first is 'fn'
      var args = Array.prototype.slice.call(arguments, 1);
      return fn.apply(this, args);
    },

    curryIt : function(fn) {
      // take starting from the second because the first is 'fn'
      var args = Array.prototype.slice.call(arguments, 1);
      return function () {
        args.push.apply(args, Array.prototype.slice.call(arguments));
        return fn.apply(this, args);
      };
    },

    makeClosures : function(arr, fn) {
      var i = 0, functions = [], function_factory;

      // create function with a factory, to avoid defining the functions
      // in the loop
      function_factory = function (arg) {
        return function () {
          var x = arg;
          return fn(x);
        };
      };

      for (i; i < arr.length; i += 1) {
        functions.push(function_factory(arr[i]));
      }

      return functions;
    }
  };
});
