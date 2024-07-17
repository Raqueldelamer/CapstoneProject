function cartChecker() {
    let name;
    let item;
    name = prompt("What is your name?");
    item = prompt("What would you like to buy?");
    cartHeader.innerHTML = `Hi ${name}, there is something in your cart!`;
    cartParagraph.innerHTML = `You still have an item in your cart. Your ${item} is ready to purchase!`;
  }
  
  cartButton.onclick = cartChecker;

  
  function songGuessingGame() {
    let userChoice;
    let correctAnswer;
    correctAnswer = "Summertime";
    alert("What Gershwin song did Billie Holiday sing?");
    userChoice = prompt("Enter the song");

    if( correctAnswer === userChoice ) {
        alert("And the living is Easy..");
    } else {
        alert("Oops! Try again!")
    }
}

song.onclick = songGuessingGame;
