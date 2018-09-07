(function() {
  var libraryStorage = {};

  function librarySystem(libraryName, dependencyArray, callback) {
    // LOAD Library
    if (arguments.length > 1) {
      libraryStorage[libraryName] = {
        dependencies: dependencyArray,
        callback: callback,
        cached: false
      };

      // CALL library
    } else {
      var library = libraryStorage[libraryName];
      var newDependencyArray = [];

      if (library.cached === false) {
        newDependencyArray = library.dependencies.map(function(
          dependency
        ) {
          return librarySystem(dependency);
        });

        library.results = library.callback.apply(null, newDependencyArray);
        library.cached = true;
        return library.results;
      }

      return library.results;
    }
  }

  window.librarySystem = librarySystem;
})();
