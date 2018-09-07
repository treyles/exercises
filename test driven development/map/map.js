function map(array, callback, optionalThisObject) {
  if (optionalThisObject) {
    callback = callback.bind(optionalThisObject);
  }

  var mappedArray = [];

  for (var i = 0; i < array.length; i++) {
    mappedArray.push(callback(array[i], i, array));
  }

  return mappedArray;
}
