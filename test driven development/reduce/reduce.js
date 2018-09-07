function reduce(array, callback, initialValue) {
  var startingIndex = 0;
  var resultsSoFar = initialValue;

  // No initialValue.
  if (arguments.length < 3) {
    resultsSoFar = array[startingIndex];
    startingIndex++;

    // If array has one element, just return it.
    if (Object.keys(array).length === 1) {
      var singleIndex = Object.keys(array)[0];
      var singleElement = array[singleIndex];
      return singleElement;
    }

    // Has initialValue.
  } else {
    if (Object.keys(array).length === 0) {
      return initialValue;
    }
  }

  for (var i = startingIndex; i < array.length; i++) {
    if (i in array) {
      resultsSoFar = callback(resultsSoFar, array[i], i);
    }
  }
  return resultsSoFar;
}
