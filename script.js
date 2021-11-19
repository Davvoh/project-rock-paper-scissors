function computerPlay() {
   const random = [];
   random[0]= "Rock";
   random[1]= "Paper";
   random[2]= "Scissors";
   return random[Math.floor(Math.random() * (3 - 0)) +0];
 }
 
 


function playRound(playerSelect, computerSelect) {
 if (playerSelect=="Rock") {
    if (computerSelect=="Scissors") {
       result="You have won!";
       return result;
    }
    else {
       result="You have lost!";
       return result; }
 }
    
 
 if (playerSelect=="Paper") {
    if (computerSelect=="Rock") {
       result="You have won!";
       return result;
    }
    else {
      result="You have lost!";
      return result; }
 }
    
 
 if (playerSelect=="Scissors") {
    if (computerSelect=="Paper") {
      result="You have won!";
      return result;
    }
    else {
      result="You have lost!";
      return result; }
 }  
}


const playerSelect=prompt("Choose Rock, Paper or Scissors");
const computerSelect=computerPlay();
console.log(playRound(playerSelect, computerSelect));
console.log("You picked " + playerSelect);
console.log("Computer picked " + computerSelect);