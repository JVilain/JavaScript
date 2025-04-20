// Ask the user for their first name and store it in Fname
let Fname = prompt("What is your first name?");

// Create a constant to store the value of Pi to 7 significant digits
const piValue = 3.1415926;

// Ask the user for their favorite number and store it in myFavNum
let myFavNum = prompt("What is your favorite number?");
myFavNum = parseFloat(myFavNum); // Convert input to number

// Calculate the area of a circle using the favorite number as radius (r)
let myArea = piValue * Math.pow(myFavNum, 2);

// Create a message using all variables
let message = `Hello ${Fname}, you entered ${myFavNum} as your favorite number. ` +
              `If that was the radius of a circle, the circle’s area would be ${myArea.toFixed(6)}.`;

// Show it in browser console and on the page
console.log(message);
document.getElementById("output").textContent = message;

