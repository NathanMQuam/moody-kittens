/** TODO TASK LIST
 * ======== | Visualization | ========
 * [ TODO ] Users must have a form where they enter in at minimum the name of a kitten
 * [ TODO ] A Kitten's name and mood must be visible for the user
 * [ TODO ] A custom Google Font must be added
 * [ TODO ] Kittens are visible when the page reloads
 * [ TODO ] A Kitten's mood must affect visually the apperance of the kitten
 * 
 * ======== |  Functionality | ========
 * [ TODO ] Add Kitten form clears when submitted
 * [ TODO ] Add Kitten form submission does not reload the page
 * [ TODO ] Kittens are stored in local storage.
 * [ TODO ] Kittens can be deleted
 * [ TODO ] Kittens have at least two buttons that affect the kitten's mood in different ways
 * [ TODO ] Kitten's moods persist through page reloads
 */

/**
 * Stores the list of kittens
 * @type {Kitten[]}
 */
let kittens = [];

// TODO: 
/**
 * Called when submitting the new Kitten Form
 * This method will pull data from the form
 * use the provided function to give the data an id
 * you can use robohash for images
 * https://robohash.org/<INSERTCATNAMEHERE>?set=set4
 * then add that data to the kittens list.
 * Then reset the form
 */
function addKitten(event) {}

// TODO: 
/**
 * Converts the kittens array to a JSON string then
 * Saves the string to localstorage at the key kittens
 */
function saveKittens() {}

// TODO: 
/**
 * Attempts to retrieve the kittens string from localstorage
 * then parses the JSON string into an array. Finally sets
 * the kittens array to the retrieved array
 */
function loadKittens() {}

// TODO: 
/**
 * Draw all of the kittens to the kittens element
 */
function drawKittens() {}

/**
 * Find the kitten in the array by its id
 * @param {string} id
 * @return {Kitten}
 */
function findKittenById(id) {
  return kittens.find(k => k.id == id);
}

// TODO: 
/**
 * Find the kitten in the array of kittens
 * Generate a random Number
 * if the number is greater than .7
 * increase the kittens affection
 * otherwise decrease the affection
 * save the kittens
 * @param {string} id
 */
function pet(id) {}

// TODO: 
/**
 * Find the kitten in the array of kittens
 * Set the kitten's mood to tolerant
 * Set the kitten's affection to 5
 * save the kittens
 * @param {string} id
 */
function catnip(id) {}

// TODO: 
/**
 * Sets the kittens mood based on its affection
 * Happy > 6, Tolerant <= 5, Angry <= 3, Gone <= 0
 * @param {Kitten} kitten
 */
function setKittenMood(kitten) {}

function getStarted() {
  document.getElementById("welcome").remove();
  drawKittens();
}

// TODO: 
/**
 * Defines the Properties of a Kitten
 * @typedef {{id: string, name: string, mood: string, affection: number}} Kitten
 */

 // TODO: 
/**
 * Used to generate a random string id for mocked
 * database generated Id
 * @returns {string}
 */
function generateId() {
  return (
    Math.floor(Math.random() * 10000000) +
    "-" +
    Math.floor(Math.random() * 10000000)
  );
}