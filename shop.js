function cartChecker() {
  let name;
  let item;
  name = prompt("What is your name?");
  item = prompt("What would you like to buy?");
  cartHeader.innerHTML = `Hi ${name}, there is something in your cart!`;
  cartParagraph.innerHTML = `You still have an item in your cart. Your ${item} is ready to purchase!`;
}

cartButton.onclick = cartChecker;

function calculateTax() {
  let price;
  let taxPercent;
  let tax;
  price = prompt("What is the price of the item in your cart?");
  taxPercent = prompt("What is the sales tax in your city? (enter in decimals. For example 10% would be 0.10");

  
  let priceNumber = Number(price);
  let taxPercentNumber = Number(taxPercent);
  tax = priceNumber * taxPercentNumber;

  priceParagraph.innerHTML = `Your total bill is $${priceNumber}`;
  taxParagraph.innerHTML = `The sales tax is $${tax} at ${taxPercentNumber*100}%.`;
}

calculateButton.onclick = calculateTax;

function calculateTotalBill(bill) {
  let tax, total;
  tax = bill * .10;
  total = bill + tax;
  return total;
}

function whatsTheTotal() {
  let userInput, b, t;
  userInput = prompt("How much is the price amount?")
  b = Number(userInput);
  t = calculateTotalBill(b);
  alert(t);
}

totalButton.onclick = whatsTheTotal;


function songGuessingGame() {
  let userChoice;
  let correctAnswer;
  correctAnswer = "Summertime";
  lowerCaseAnswer = "summertime";
  alert("What Gershwin song did Billie Holiday sing?");
  userChoice = prompt("Take a guess..");

  if( correctAnswer === userChoice ) {
      alert("..And the living is Easy..");
  } 

  if ( lowerCaseAnswer === userChoice ) {
      alert("..And the living is Easy..");
  }
  else {
      alert("Oops! Try again!")
  }
}

song.onclick = songGuessingGame;
