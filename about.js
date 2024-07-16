function partTwoA () {
    messageParagraph.innerHTML = "Photographers";
  
    // 1. Create an array of 4 photographers
    let photographers = ["Brassai", "Henri Cartier-Bresson", "Robert Doisneau", "Eugene Atget"];
  
    // 2. Find the length of the array
    let highNumber = photographers.length;
  
    // 3. Create a for loop.
    for (let i = 0; i < highNumber; i++) {
      // 4. give the user and alert with the current friend.
      alert(`My favorite photographer is ${photographers[i]}`);
    }
  }
  

  function partTwoB () {
    messageParagraph.innerHTML = "Cities";
  
    // 1. Create an array of 5 cities
  let cities = ["Paris", "New York", "New Orleans", "San Francisco"];
    // 2. Find the length of the array
    let highNumber = cities.length;
    // 3. Create a for loop.
    for (let i = 0; i < highNumber; i++) {
      alert(`The most photogenic city is ${cities[i]}`);
      // 4. give the user and alert with the current city.
  
  }
  }
  