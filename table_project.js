function createStanNum(number1, method1) { //function will take a number stored as a string and remove commas from it, or it will add commas to a number without them
  var origNumString = number1;
  var origNum = [];
  var charCount = 0;
  var stanNum = [];
  var sectLength = 0;
  var stanNumString = "";


  for (var i = 0; i < origNumString.length; i++) { //Break up the user input into an array
    origNum[i] = origNumString.charAt(i);
  } 
  stanNum = origNum;  //assign the original array to an array that will be used to created a number formatted to a standard American number
  sectLength = stanNum.length; //get the total amount of digits that was entered

  if (method1 == "add"){ 
    if (sectLength > 3) {  //if the total amount of digits was more than three
      if (sectLength % 3 !== 0) { //if the total amount of digits isn't evenly divisibly by three
        stanNum.splice(sectLength % 3, 0, ","); //put a comma after the firt or second digit
        charCount = (sectLength % 3) + 1 //update the counter to know where the comma is
      }
      for (i = 0; i < Math.floor((sectLength / 3)) - 1; i++) { //if the length of the array is evenly divisible by three
        stanNum.splice(3 + charCount, 0, ","); //place a comma after every three digits
        charCount = charCount + 4; //keep track of where we are in the array
      }
    }
    for (i = 0; i < stanNum.length; i++) {   //Turn the array back into a string
      stanNumString = stanNumString + stanNum[i];
    }
    return stanNumString;
  }
  else {        
    for (i = 0; i < origNum.length; i++) {
      if (isNaN(stanNum[charCount])){
        stanNum.splice(charCount, 1)
      }
      else{
        charCount += 1;
      } 
    }
    for (i = 0; i < stanNum.length; i++) {   //Turn the array back into a string
      stanNumString = stanNumString + stanNum[i];
    }
    return parseInt(stanNumString);  
  }
}


var dataCells = document.getElementsByTagName("td"); //creates a collection of all the td elements
var input_fields = []; //initializes an array to store html input nodes
var table_strings = []; //initalizes an array to store the text nodes already on the table
var counter = 0; //variable to increment the index during loops (local variable i doesn't work inside certain funcions)
var input_value = []; //initalizes an array to store user input

for (i = 0; i <= dataCells.length; i++) {   
  input_fields.push(document.createElement("input")); // adds input nodes to input_fields array
  table_strings.push(dataCells[counter].textContent); // adds the content already in the td elements to an array.
  if (counter < 60) {
    counter +=1;
  }
}
for (i = 1; i < dataCells.length - 17; i++) { //a loop to add the input nodes to the table, the last 16 nodes don't need input fields 
  if (i < 4 || i % 4 != 0) {  //don't put an input node in the last td element of each row
    dataCells[i].appendChild(input_fields[i]);
  }
}
for (i = 1; i < dataCells.length - 17; i++) { //a loop to remove the text nodes from the td elements that now have input fields. 
  if (i < 4 || i % 4 != 0) {  //don't remove the text nodes from the last element of each row
    dataCells[i].childNodes[0].remove();
  }
}
for (i = 1; i < dataCells.length - 17; i++) { //set the default value of the input nodes to the content of the text node that was previously in the td element 
  if (i < 4 || i % 4 != 0) {  
    input_fields[i].setAttribute("value", table_strings[i]);
  }
}

counter = 0;  // set counter to zero because i have to use it again
for (i = 0; i < dataCells.length - 17; i++) { //Check every td element except for the last 16
  if (i < 4 || i % 4 != 0) {  //if it's not in the last column
    if (isNaN(parseInt(input_fields[counter].value))){ //if it doesn't contain a number
      input_value.push(0);  //add zero to the array
    }
    else { //if it does contain a number
      input_value.push(createStanNum(dataCells[counter].firstChild.value)); //add the value of the element to the input
    }
  }
  else { //if it is the last column
    input_value.push("place holder");
  }
  counter += 1;
} 


//test_num = parseInt(table_strings[3]);

