var origNumString = "200,0,00,0,0";
var origNum = [];
var charCount = 0;
var stanNum = [];
var sectLength = 0;
var stanNumString = "";

for (var i = 0; i < origNumString.length; i++) { //Break up the user input into an array
origNum[i] = origNumString.charAt(i);
} 

stanNum = origNum;  //assign the original array to an array that will be used to created a number formatted to a standard American number
// sectLength = stanNum.length; //get the total amount of digits that was entered
// if (sectLength > 3) {  //if the total amount of digits was more than three
//     if (sectLength % 3 !== 0) { //if the total amount of digits isn't evenly divisibly by three
//       stanNum.splice(sectLength % 3, 0, ","); //put a comma after the firt or second digit
//       charCount = (sectLength % 3) + 1 //update the counter to know where the comma is
//     }
//     for (i = 0; i < Math.floor((sectLength / 3)) - 1; i++) { //if the length of the array is evenly divisible by three
//       stanNum.splice(3 + charCount, 0, ","); //place a comma after every three digits
//       charCount = charCount + 4; //keep track of where we are in the array
//     }
// }


// for (i = 0; i < stanNum.length; i++) {   //Turn the array back into a string
//   stanNumString = stanNumString + stanNum[i];
// }


for (i = 0; i < origNum.length; i++) {
if (isNaN(stanNum[charCount])){
stanNum.splice(charCount, 1)
}

charCount += 1;
}






// return Boolean(parseInt(stanNum[0]));
//return Boolean(1);


alert(stanNum);