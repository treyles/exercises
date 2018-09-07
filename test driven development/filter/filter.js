function filter(array, callback, optionalThisObject) {
  var filterCallback = callback;

  if (optionalThisObject) {
    filterCallback = callback.bind(optionalThisObject);
  }

  var filteredArray = [];

  for (var i = 0; i < array.length; i++) {
    if (filterCallback(array[i], i, array)) {
      filteredArray.push(array[i]);
    }
  }

  return filteredArray;
}
