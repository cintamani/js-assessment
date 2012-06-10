
define(["jquery"], function($) {
  return {
    async : function() {
      var promise = new $.Deferred();

      promise.resolve(true);

      return promise;
    },

    manipulateRemoteData : function(url) {
      var promise = new $.Deferred();

      $.getJSON(url, function (data) {
        var i = 0, result = [], people = data.people;

        for (i; i < people.length; i += 1) {
          result.push(people[i].name);
        }

        promise.resolve(result.sort());
      });

      return promise;
    }
  };
});
