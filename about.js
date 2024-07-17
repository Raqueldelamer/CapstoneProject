function partTwoA () {
    messageParagraph.innerHTML = "Photographers";
  
    // an array of 4 photographers
    let photographers = ["Brassai", "Henri Cartier-Bresson", "Robert Doisneau", "Eugene Atget"];
  
    // length of the array
    let highNumber = photographers.length;
  
    // Create a for loop.
    for (let i = 0; i < highNumber; i++) {
      // give the user and alert with the current friend.
      alert(`My favorite photographer is ${photographers[i]}`);
    }
  }
  

  function partTwoB () {
    messageParagraph.innerHTML = "Cities";
  
    
  let cities = ["Paris", "New York", "New Orleans", "San Francisco"];
   
    let highNumber = cities.length;
  
    for (let i = 0; i < highNumber; i++) {
      alert(`The most photogenic city is ${cities[i]}`);
      // 4. give the user and alert with the current city.
  
  }
  }
  