function isPrototypeOf(prototype, obj) {
  // gets prototype of obj and saves to variable
  var protoOfObj = Object.getPrototypeOf(obj);

  // loop through prototype chain as long as current obj has prototype
  while (protoOfObj) {
    // if prototype and obj match return true
    if (prototype === protoOfObj) {
      return true;
    }

    // step through chain
    protoOfObj = Object.getPrototypeOf(protoOfObj);
  }

  return false;
}
