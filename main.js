//Cards initialisaton

const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'King', 'Queen', 'Jack'] ;
const figures = ['Hearts', 'Diamonds', 'Spades', 'Clubs'] ;

const cards = [];

for(fig = 0; fig < 4; fig++){
    for(val = 0; val < 13; val++){
        let card = {figure:fig, value:val};
        cards.push(card);
    }
}

//To shuffle cards https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

shuffle(cards);
console.log(cards);

//Container initialisation

let containerEl = document.createElement('div');
containerEl.classList.add('container');
document.body.appendChild(containerEl);

//Display all 52 cards

for(i=0; i<52; i++){
    let divForImg = document.createElement('div');
    divForImg.classList.add('cardImg');
    let img = document.createElement('img');
    img.src = 'https://via.placeholder.com/150?text=Mistery+Card';
    img.id = i; //add id to each image that correlates to its number i
    img.addEventListener('click', showCard); //add event to each card
    img.addEventListener('dblclick', hideCard);
    containerEl.appendChild(divForImg);
    divForImg.appendChild(img);
}

//Events part
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











