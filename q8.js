function saveToLocalStorage(obj) {
    // Save each property to localStorage
    Object.keys(obj).forEach(function(key) {
      localStorage.setItem(key, JSON.stringify(obj[key]));
    });
  
    // Retrieve the object from localStorage and return it as a new object
    var newObj = {};
    Object.keys(obj).forEach(function(key) {
      newObj[key] = JSON.parse(localStorage.getItem(key));
    });
    return newObj;
  }