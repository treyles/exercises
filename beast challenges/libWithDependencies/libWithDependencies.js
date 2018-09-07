(function() {
  var libraryStorage = {};

  function librarySystem(libraryName, dependencyArray, callback) {
    if (arguments.length > 1) {
      var newDependencyArray = dependencyArray.map(function(dependency) {
        return libraryStorage[dependency];
      });

      libraryStorage[libraryName] = callback.apply(
        null,
        newDependencyArray
      );
    } else {
      return libraryStorage[libraryName];
    }
  }

  window.librarySystem = librarySystem;
  window.libraryStorage = libraryStorage;
})();
