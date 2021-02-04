import{values, figures, getDeck, shuffle} from './deck.js';

//Cards initialisaton

/*const cards = [];

for(fig = 0; fig < 4; fig++){
    for(val = 0; val < 13; val++){
        let card = {figure:fig, value:val};
        cards.push(card);
    }
}
*/


const cards = getDeck();


shuffle(cards);
console.log(cards);

//Container initialisation

let containerEl = document.createElement('div');
containerEl.classList.add('container');
document.body.appendChild(containerEl);

//Display all 52 cards

for(let i=0; i<52; i++){
    let divForImg = document.createElement('div');
    divForImg.classList.add('cardImg');
    let img = document.createElement('img');
    img.src = 'https://via.placeholder.com/150?text=Mistery+Card';
    img.id = i; //add id to each image that correlates to its number i
    img.addEventListener('click', showCard); //add event to each card
    img.addEventListener('dblclick', hideCard); //add event to go back to grey
    containerEl.appendChild(divForImg);
    divForImg.appendChild(img);
}

//Add Events
function showCard(event) {
    console.log('click on ' + event.target.id);
    let theCard = cards[event.target.id];
    let color = '000000/F0F0F0';
    if (theCard.figure < 2) {
        color = 'FF0000/202020/';
    }
    let text = '?text=' + values[theCard.value] + ' of ' + figures[theCard.figure];
    console.log(text);
    event.target.src = 'https://via.placeholder.com/150/' + color + text;
}

function hideCard(event) {
    console.log('dblclick on ' + event.target.id);
    event.target.src = 'https://via.placeholder.com/150?text=Mistery+Card';
}











