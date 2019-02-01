var recipes = {};

function updateObjectWithKeyAndValue(object,key, value) {
 return Object.assign({}, object,{[key]:value});
}

function destructivelyUpdateObjectWithKeyAndValue(object,key, value) {
<<<<<<< HEAD
  object[key] = value;
  return object;
}
function deleteFromObjectByKey(object, key) {
  var cloneObject = Object.assign({}, object, cloneObject);
=======
  objects[key] = value;
  return object;
}
function deleteFromObjectByKey(object, key) {
  var cloneObject = Object.assign({}, object);
>>>>>>> 44ecbd7e5a382c1c4e08baefef918ca49e7de332
  delete cloneObject[key];
  return cloneObject;
}

<<<<<<< HEAD
function destructivelyDeleteFromObjectByKey(object, key) {
=======
function destructivelyUpdateObjectWithKeyAndValue(object, key) {
>>>>>>> 44ecbd7e5a382c1c4e08baefef918ca49e7de332
  delete object[key];
  return object;
}
