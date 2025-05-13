// === Dog Constructor Function ===
function Dog(name, show, breed, role, mySound, canTalk) {
    this.name = name;
    this.show = show;
    this.breed = breed;
    this.role = role;
    this.mySound = mySound;
    this.canTalk = canTalk;

    // Method to display a greeting with talk ability
    this.myGreeting = function() {
        let talkMessage = this.canTalk ? "I can talk!" : "I cannot talk.";
        return `Hello, my name is ${this.name}. ${this.mySound}.<br>` +
               `I starred in the TV show ${this.show}.<br>` +
               `My character was a ${this.breed}.<br>` +
               `I was the ${this.role}.<br>` +
               `${talkMessage}`;
    };
}

// === Creating Multiple Dog Objects ===
const dog1 = new Dog(
    "Astro",
    "The Jetsons",
    "Great Dane",
    "Family dog in a cartoon about a family in the future",
    "When I bark, I am not scary",
    true
);

const dog2 = new Dog(
    "Brian Griffin",
    "Family Guy",
    "Beagle",
    "Talking family dog who writes novels",
    "I speak with a sophisticated tone",
    true
);

const dog3 = new Dog(
    "Snoopy",
    "Peanuts",
    "Beagle",
    "Famous dog with a rich imagination",
    "I don't talk to humans, but I write and fly",
    false
);

// === Storing Dogs in an Array ===
const allDogs = [dog1, dog2, dog3];

// === Displaying All Dogs Using for...in Loop ===
let output = document.getElementById("allDogs");
output.innerHTML += "<h3>Available Dogs:</h3>";

allDogs.forEach((dog, index) => {
    output.innerHTML += `<b>Dog ${index + 1}:</b><br>`;
    for (let property in dog) {
        if (typeof dog[property] !== "function") {
            output.innerHTML += `${property}: ${dog[property]}<br>`;
        }
    }
    output.innerHTML += "<br>";
});

// === Prompting User to Select a Dog ===
let userChoice = prompt("Select a dog by typing its name (Astro, Brian Griffin, Snoopy):");
let selectedDog = allDogs.find(dog => dog.name.toLowerCase() === userChoice.toLowerCase());

// === Displaying the Selected Dog or Error Message ===
let selectedDogOutput = document.getElementById("selectedDog");

if (selectedDog) {
    selectedDogOutput.innerHTML = `<h3>Your Selected Dog:</h3>${selectedDog.myGreeting()}`;
} else {
    selectedDogOutput.innerHTML = `<h3>Error:</h3>The dog you selected does not exist.`;
}
