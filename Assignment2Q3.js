function addParagraph() {
    const newParagraph = document.createElement("p");
    const content = document.createTextNode("Pakistan is a land of incredible diversity, rich culture, and a fascinating history. With its breathtaking natural landscapes, bustling cities, and warm hospitality of its people, Pakistan has something to offer for everyone. From the mighty Himalayas to the serene beaches of the Arabian Sea, the country boasts a wide range of natural beauty that is simply awe-inspiring.");
    newParagraph.appendChild(content);
  
    document.body.appendChild(newParagraph);

  }