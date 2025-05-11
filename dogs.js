// === Creating the Literal Object (myDog) ===
// Using a literal object to describe the dog
const myDog = {
    name: "Astro",
    show: "The Jetsons",
    breed: "Great Dane",
    role: "Family dog in a cartoon about a family in the future",
    mySound: "When I bark I am not scary"
};

// Displaying the object properties
let output = document.getElementById("output");
output.innerHTML += `<h3>Dog using Object Literal:</h3>`;
output.innerHTML += `Hello, my name is ${myDog.name}, when I bark I am not scary.<br>`;
output.innerHTML += `I starred in the TV show ${myDog.show}.<br>`;
output.innerHTML += `My character was a ${myDog.breed}.<br>`;
output.innerHTML += `I was the ${myDog.role}.<br><br>`;

// === Creating the Constructor Function (myDogConst) ===
function Dog(name, show, breed, role, mySound, canTalk) {
    this.name = name;
    this.show = show;
    this.breed = breed;
    this.role = role;
    this.mySound = mySound;
    this.canTalk = canTalk;

    // Method to display the dog’s greeting
    this.myGreeting = function() {
        return `Hello, my name is ${this.name}, when I bark ${this.mySound}.<br>` +
               `I starred in the TV show ${this.show}.<br>` +
               `My character was a ${this.breed}.<br>` +
               `I was the ${this.role}.<br><br>`;
    };
}

// Creating an instance of the Dog using the constructor
const myDogConst = new Dog(
    "Astro",
    "The Jetsons",
    "Great Dane",
    "Family dog in a cartoon about a family in the future",
    "I am not scary",
    true
);

// Displaying the result of the method call
output.innerHTML += `<h3>Dog using Constructor:</h3>`;
output.innerHTML += myDogConst.myGreeting();
