/** TODO TASK LIST
 * ======== | Visualization | ========
 * [ DONE ] Users must have a form where they enter in at minimum the name of a kitten
 * [ DONE ] A Kitten's name and mood must be visible for the user
 * [ DONE ] A custom Google Font must be added
 * [ DONE ] Kittens are visible when the page reloads
 * [ DONE ] A Kitten's mood must affect visually the apperance of the kitten
 * 
 * ======== |  Functionality | ========
 * [ DONE ] Add Kitten form clears when submitted
 * [ DONE ] Add Kitten form submission does not reload the page
 * [ DONE ] Kittens are stored in local storage.
 * [ TODO ] Kittens can be deleted
 * [ DONE ] Kittens have at least two buttons that affect the kitten's mood in different ways
 * [ DONE ] Kitten's moods persist through page reloads
 */

/**
 * Stores the list of kittens
 * @type {Kitten[]}
 */
let kittens = [];

/**
 * Called when submitting the new Kitten Form
 * This method will pull data from the form
 * use the provided function to give the data an id
 * you can use robohash for images
 * https://robohash.org/<INSERTCATNAMEHERE>?set=set4
 * then add that data to the kittens list.
 * Then reset the form
 */
function addKitten ( event ) {
  event.preventDefault();
  let form = event.target;
  let newId = generateId();

  let newKitten = {
    id: newId,
    name: form.name.value,
    mood: "",
    affection: generateNumber( 4, 8 )
  }
  setKittenMood( newKitten );

  kittens.push( newKitten );
  //console.log( kittens );

  form.reset();

  saveKittens();
}

/**
 * Converts the kittens array to a JSON string then
 * Saves the string to localstorage at the key kittens
 */
function saveKittens () {
  let kittyString = JSON.stringify( kittens );

  window.localStorage.setItem( "MoodyKittens", kittyString );

  drawKittens();
}

/**
 * Attempts to retrieve the kittens string from localstorage
 * then parses the JSON string into an array. Finally sets
 * the kittens array to the retrieved array
 */
function loadKittens () {
  let kittyData = JSON.parse( window.localStorage.getItem( "MoodyKittens" ) );

  if ( kittyData ) {
    kittens = kittyData;
  }

  console.log( kittens );
  drawKittens();
}

/**
 * Draw all of the kittens to the kittens element
 */
function drawKittens () {
  let template = "";

  kittens.forEach( kitty => {
    template += `
      <div class="container justify-content-center card shadow bg-dark text-light kitten ${kitty.mood}">
      <img src="https://robohash.org/${kitty.name}-${kitty.id}?set=set4" alt="${kitty.name} Kitten">
      <h2 class="kitten-name">${kitty.name}</h2>
      <p class="d-flex space-between interact-buttons ${( ( kitty.mood == "gone" ) ? "hidden" : "" )}" id="${kitty.id}-buttons">
        <button class="text-dark" onclick='pet(\"${kitty.id}\")'>Pet</button>
        <button class="text-dark" onclick='feed(\"${kitty.id}\")'>Feed</button>
      </p>
      <p class="${((kitty.mood == "gone") ? "" : "hidden")}" id="${kitty.id}-gone">
        This Kitty has run away 3:
      </p>
    </div>
    `
  } );

  document.getElementById( "kittens" ).innerHTML = template;
}

/**
 * Find the kitten in the array by its id
 * @param {string} id
 * @return {Kitten}
 */
function findKittenById ( id ) {
  return kittens.find( k => k.id == id );
}

/**
 * Find the kitten in the array of kittens
 * Generate a random Number
 * if the number is greater than .7
 * increase the kittens affection
 * otherwise decrease the affection
 * save the kittens
 * @param {string} id
 */
function pet ( id ) {
  if ( Math.random() > 0.7 ) {
    findKittenById( id ).affection++;
  } else {
    findKittenById( id ).affection--;
  }

  setKittenMood( findKittenById( id ) );

  saveKittens();
}
/**
 * Find the kitten in the array of kittens
 * Generate a random Number
 * if the number is greater than .3
 * increase the kittens affection
 * otherwise do nothing
 * save the kittens
 * @param {string} id
 */
function feed ( id ) {
  if ( Math.random() > 0.3 && findKittenById( id ).affection <= 8 ) {
    findKittenById( id ).affection++;
  }

  setKittenMood( findKittenById( id ) );

  saveKittens();
}

/**
 * Find the kitten in the array of kittens
 * Set the kitten's mood to tolerant
 * Set the kitten's affection to 5
 * save the kittens
 * @param {string} id
 */
function catnip ( id ) {
  findKittenById( id ).affection = 5;

  setKittenMood( findKittenById( id ) );

  saveKittens();
}

/**
 * Sets the kittens mood based on its affection
 * Happy > 6, Tolerant <= 5, Angry <= 3, Gone <= 0
 * @param {Kitten} kitten
 */
function setKittenMood ( kitten ) {
  if ( kitten.affection > 6 ) {
    kitten.mood = "happy";
  } else if ( kitten.affection >= 5 ) {
    kitten.mood = "tolerant";
  } else if ( kitten.affection >= 3 ) {
    kitten.mood = "angry";
  } else if ( kitten.affection <= 0 ) {
    kitten.mood = "gone";
  }

  saveKittens();
}

function getStarted () {
  document.getElementById( "welcome" ).remove();
  drawKittens();
}





/**
 * Defines the Properties of a Kitten
 * @typedef {{id: string, name: string, mood: string, affection: number}} Kitten
 */

/**
 * Used to generate a random string id for mocked
 * database generated Id
 * @returns {string}
 */
function generateId () {
  return (
    Math.floor( Math.random() * 10000000 ) +
    "-" +
    Math.floor( Math.random() * 10000000 )
  );
}

/**
 * Used to generate a random number between two values
 * @returns {number}
 */
function generateNumber ( min, max ) {
  return (
    Math.floor( Math.random() * ( max - min + 1 ) + min )
  );
}

loadKittens();