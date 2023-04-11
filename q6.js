function saveObjectToLocalStorage(key, object) {
    localStorage.setItem(key, JSON.stringify(object));
  }
  
  // Example usage:
  const myObject = { name: "Zeeshan Hassan", age: 21 };
  saveObjectToLocalStorage("myKey", myObject);