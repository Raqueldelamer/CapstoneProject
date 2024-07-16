function cartChecker() {
    let name;
    let item;
    name = prompt("What is your name?");
    item = prompt("What would you like to buy?");
    cartHeader.innerHTML = `Hi ${name}, there is something in your cart!`;
    cartParagraph.innerHTML = `You still have an item in your cart. Your ${item} is ready to purchase!`;
  }
  
  cartButton.onclick = cartChecker;

  
  function partThreeA () {
    let color;
    color = prompt("What color describes your mood today?");
    // 1. check if the color is blue
    if(color === "blue") {
      // 2. give the message for blue
      messageParagraph.innerHTML = `Are you feeling sad?`;
    // 3. check for the next color
    } else if(color === "yellow") {
      // 4. give the message for yellow
      messageParagraph.innerHTML = `You must being have a good day!`;
    } else {
      // 5. otherwise, ask for another color
      messageParagraph.innerHTML = `Try another color.`;
    }
  }
  
  // Try it!
  // Try with some other colors. 
  // For ideas check https://99designs.com/blog/tips/how-color-impacts-emotions-and-behaviors/
  function partThreeB () {
    let color;
    color = prompt("What color describes your mood today?");
    // 1. check for your first color
  if(color === "pink") {
    messageParagraph.innerHTML = `Are you having a calm day?`;
  
      // 2. give the message for this color
  } else if(color === "red") {
    // 3. check for the next color
  messageParagraph.innerHTML = `Are you feeling motivated today?`;
      // 4. give the message for the next color
  } else { 
    // 5. otherwise, ask for another color
  messageParagraph.innerHTML = "Pick another color..";
  }
  }