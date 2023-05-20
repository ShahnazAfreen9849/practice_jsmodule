var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Urse Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// The unshift method adds an element to the beginning of the array
constellations.unshift("Canis Major");
console.log(constellations);

// The pop method removes the last element in the array
planets.pop();
// The original array is changed
console.log(planets);

//The concat method joins constellations and planets array and returns new array
var galaxy = constellations.concat(planets);
//The galaxy and planet arrays are unchanged
console.log(planets);
console.log(constellations);
console.log(galaxy);

// The toUpperCase method makes all the letters in the string "polaris" capital letters
var upperCaseStar = star.toUpperCase();
console.log(upperCaseStar);
// The original string is unchanged
console.log(star);

// OBJECT ACTIVITY

// Object customerDrink with three properties

var customerDrink = {
    name: "coffee",
    sugars: 3,
    isReady: false
};

// This logs the entire object
console.log(customerDrink);
// Note that in dot notation, the name of the object is followed by the key
if (customerDrink.isReady) {
    console.log("ready for pick-up: " + customerDrink.name + " with" + customerDrink.sugars + "sugars.");
    // Note that in bracket notation, the key is inside brackets and surrounded by quotes
} else {
    console.log("Still in order queue: " + customerDrink["name"] + " with " + customerDrink["sugars"] + " sugars.");
}

