//Ask the user for a number to change
let numberImp = prompt("Enter the number you'd like to convert to Roman Numerals:\n");

//Make sure user input is converted to a number
numberImp = Number(numberImp);

//If the input string can't be converted, ask again for a number input
while(isNaN(numberImp)){
  numberImp = prompt("That was NOT a number.\n Enter a number you'd like to convert to Roman Numerals:\n")
}

//Make some arrays to hold information
let numMerals =[]
let symbols = ['M','D','C','L','X','V','I'];
let values = [1000, 500, 100, 50, 10, 5, 1];

//Modulate the number into Roman-divisible sets
for (i in values){
  //A separate statement here since we don't need to modulate for the first denomination
  if (i < 1){
    numMerals[i] = (Math.floor(numberImp/values[i]));
  //and here, remove higher value sets
  } else {
    numMerals[i] = Math.floor((numberImp%values[i-1])/values[i]);
  }
}

//Make a string out of the corresponding symbols added together
let converted = '';
//loop through the stored amounts we'll need of each letter
for (i in numMerals){
  //loop the amount of each letter needed until it depletes, adding the letter to the string each time
  for (let j = numMerals[i]; j > 0; j--){
    converted = converted + symbols[i];
  }
}
//Log the string
console.log(converted);
