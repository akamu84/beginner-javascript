// const p = document.querySelector('p');
// console.log(p);

// const divs = document.querySelectorAll('div');
// console.log(divs);

// const images = document.querySelectorAll('.item img');
// console.log(images);

// const heading = document.querySelector('h2');
// // heading.textContent = 'Adam is cool';
// console.log(heading.textContent);
// console.log(heading.innerText);
// console.log(heading.innerHTML);
// console.log(heading.outerHTML);

// const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList.textContent);
// pizzaList.insertAdjacentText('afterbegin', '🍕');
// pizzaList.insertAdjacentText('beforeend', '🍕');

// Classes
const pic = document.querySelector('.nice');
console.log(pic.classList);
pic.classList.add('open');
pic.classList.remove('cool');
pic.classList.toggle('round');
console.log(pic.classList);

function toggleRound() {
  pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);

console.log(pic.alt); // getter
pic.alt = 'Cute pup'; // setter
pic.width = 200;
console.log(pic.naturalWidth);

pic.addEventListener('load', function() {
  console.log(pic.naturalWidth);
});

const custom = document.querySelector('.custom');
console.log(custom.dataset);

custom.addEventListener('click', () =>
  alert(` Welcome ${custom.dataset.name}`)
);
