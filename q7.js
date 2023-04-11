function getObjectFromLocalStorage(key) {
    const objectString = localStorage.getItem(key);
    return JSON.parse(objectString);
  }
  const myObject = getObjectFromLocalStorage("myKey");
console.log(myObject); // Should log the object you saved earlier