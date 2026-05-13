Object.deepFreeze = function (obj) {
  Object.freeze(obj);

  for (let key in obj) {
    let value = obj[key];

    if (typeof value === 'object' && value !== null) {
      Object.deepFreeze(value);
    }
  }
  
  return obj;
};