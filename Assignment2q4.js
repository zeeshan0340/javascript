function addNewListItem(text) {
    const list = document.getElementById("myList"); // Get the unordered list element
    const newListItem = document.createElement("li"); // Create a new list item element
    const content = document.createTextNode(text); // Create a text node with the string argument
    newListItem.appendChild(content); // Add the text node to the new list item element
    list.appendChild(newListItem); // Add the new list item element to the unordered list
  }