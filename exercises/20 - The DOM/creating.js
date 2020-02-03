const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a paragraph';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/200';
myImage.alt = 'Nice photo';
console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
document.body.appendChild(myDiv);

const heading = document.createElement('h2');
heading.textContent = 'Cool Things';

myDiv.insertAdjacentElement('afterbegin', heading);

const unorderedList = document.createElement('ul');

const listItem3 = document.createElement('li');
listItem3.textContent = 'Three';
unorderedList.appendChild(listItem3);

const listItem5 = document.createElement('li');
listItem5.textContent = 'Five';
unorderedList.append(listItem5);

const listItem1 = document.createElement('li');
listItem1.textContent = 'One';
unorderedList.insertAdjacentElement('afterbegin', listItem1);

const listItem4 = document.createElement('li');
listItem4.textContent = 'Four';
listItem5.insertAdjacentElement('beforebegin', listItem4);

const listItem2 = document.createElement('li');
listItem2.textContent = 'Two';
listItem1.insertAdjacentElement('afterend', listItem2);

document.body.insertAdjacentElement('afterbegin', unorderedList);
