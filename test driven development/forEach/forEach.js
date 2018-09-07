function forEach(array, callback, configurableThisObject) {
  var forEachCallback = callback;

  if (configurableThisObject) {
    forEachCallback = callback.bind(configurableThisObject);
  }

  for (var i = 0; i < array.length; i++) {
    forEachCallback(array[i], i, array);
  }
}
