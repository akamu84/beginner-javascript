// Make a div
const wrapper = document.createElement('div');

// add a class of wrapper to it
wrapper.classList.add('wrapper');

// put it into the body
document.body.appendChild(wrapper);

// make an unordered list
const list = document.createElement('ul');

// add three list items with the words "one, two three" in them
['one', 'two', 'three'].forEach(element => {
  const lineItem = document.createElement('li');
  lineItem.textContent = element;
  list.append(lineItem);
});
// put that list into the above wrapper
wrapper.insertAdjacentElement('beforeend', list);

// create an image
const image = document.createElement('img');

// set the source to an image
image.src = 'https://picsum.photos/200';
// set the width to 250
image.width = 250;
// add a class of cute
image.classList.add('cute');
// add an alt of Cute Puppy
image.alt = 'Cute Puppy';
// Append that image to the wrapper
wrapper.append(image);
// with HTML string, make a div, with two paragraphs inside of it
const htmlString = `
    <div>
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
    </div>
`;
// put this div before the unordered list from above
list.insertAdjacentHTML('beforebegin', htmlString);

// add a class to the second paragraph called warning
const paragraphs = document.querySelectorAll('.wrapper p');
paragraphs[1].classList.add('warning');
// remove the first paragraph
paragraphs[0].remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

function generatePlayerCard(name, age, height) {
  return `
        <div class="playerCard">
            <h2>${name} - ${age}</h2>
            <p>
                They are ${height} and ${age} years old. 
                In Dog years this person would be ${Math.floor(age / 7)}. 
                That would be a tall dog!
            </p>
        </div>    
    `;
}

// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');

// Have that function make 4 cards
const players = [
  { name: 'Adam', age: 35, height: '6\'3"' },
  { name: 'Abby', age: 36, height: '5\'11"' },
  { name: 'Dan', age: 59, height: '6\'2"' },
  { name: 'Keith', age: 38, height: '6\'3"' },
];

players.forEach(({ name, age, height }) => {
  const playerCard = generatePlayerCard(name, age, height);
  cards.insertAdjacentHTML('beforeend', playerCard);
});

// append those cards to the div

// put the div into the DOM just before the wrapper element
wrapper.insertAdjacentElement('beforebegin', cards);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed
const allCards = document.querySelectorAll('.playerCard');
allCards.forEach(card => {
  card.insertAdjacentHTML('beforeend', '<button type="button">Delete</button>');
});

// select all the buttons!
const buttons = document.querySelectorAll('.playerCard button');
// make out delete function
function deleteCard() {
  this.parentElement.remove();
}

// loop over them and attach a listener
buttons.forEach(button => button.addEventListener('click', deleteCard));
