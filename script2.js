// Output reference
let output = document.getElementById("output");

// Initialize a string to store results
let result = "";

// 1. For loop counting from 0 to 10, checking odd/even
for (let count = 0; count <= 10; count++) {
    if (count % 2 === 0) {
        result += `Count ${count} is even<br>`;
    } else {
        result += `Count ${count} is odd<br>`;
    }
}

// 2. Ask user for a number between 5 and 20
let myNum = prompt("Enter a number between 5 and 20:");
myNum = parseInt(myNum);

// 3. Do While loop starting from 1 until it equals myNum
let counter = 1;
do {
    result += `Counter is at: ${counter}<br>`;
    counter++;
} while (counter <= myNum);

// 4. Store subjects in an array
let subjects = ["Accounting", "Algebra", "Programming", "Art", "Data Analytics"];

// 5. Display the array values using forEach()
result += `<br>Subjects List:<br>`;
subjects.forEach(function(subject) {
    result += `${subject}<br>`;
});

// 6. Display the array values separated by commas
result += `<br>Subjects separated by commas:<br>`;
result += subjects.join(", ");

// Display everything on the webpage
output.innerHTML = result;
