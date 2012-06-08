if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      return arr.indexOf(item);
    },

    sum : function(arr) {
      var i = 0, total = 0;
      for (i; i < arr.length; i += 1) {
        total += arr[i];
      }
      return total;
    },

    remove : function(arr, item) {
      var index = arr.indexOf(item);
      if (index !== -1) { arr.splice(index, index) }
      return arr;
    },

    append : function(arr, item) {
      arr.push(item);
      return arr;
    },

    truncate : function(arr) {
      arr.pop();
      return arr;
    },

    concat : function(arr1, arr2) {
      return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
    },

    count : function(arr, item) {
      var i = 0, count = 0;
      for (i; i < arr.length; i += 1) {
        if (arr[i] === item) { count += 1; }
      }
      return count;
    },

    duplicates : function(arr) {
      var
        i             = 0,
        result        = [],
        not_in_result = false,
        is_in_array   = false,
        not_current   = false,
        other_index   = 0,
        item;

      for (i; i < arr.length; i += 1) {
        item          = arr[i];
        other_index   = arr.indexOf(item);
        not_current   = other_index !== i;
        not_in_result = result.indexOf(item) === -1;
        is_in_array   = other_index >= 0;

        if (not_current && not_in_result && is_in_array) { result.push(arr[i]); }
      };

      return result;
    },

    square : function(arr) {
      var i = 0, result = [], number;

      for (i; i < arr.length; i += 1) {
        number = arr[i];
        result.push(number * number);
      }

      return result;
    },

    findAllOccurrences : function(arr, target) {
      var i = 0, result = [];

      for (i; i < arr.length; i += 1) {
        if (arr[i] === target) { result.push(i); }
      }

      return result;
    }
  };
});
