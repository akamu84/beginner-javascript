const width = 200;
const source = `https://picsum.photos/${width}`;
const desc = 'Cute Pup';

const myHtml = `
    <div class="wrapper">
        <h2>Cute Pup</h2>
        <img src="${source}" alt="${desc}"/>
    </div>
`;

const myFragment = document.createRange().createContextualFragment(myHtml);

console.log(myFragment);
console.log(myFragment.querySelector('img'));

document.body.appendChild(myFragment);
