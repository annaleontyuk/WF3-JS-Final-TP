const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'King', 'Queen', 'Jack'] ;
const figures = ['Hearts', 'Diamonds', 'Spades', 'Clubs'] ;


function getDeck(){
    const cards = new Array();

    for(let fig = 0; fig < figures.length; fig++){
    for(let val = 0; val < values.length; val++){
        
        let card = {figure:figures[fig], value:values[val]};
        cards.push(card);
        }
    }
    return cards;
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

export{values, figures, getDeck, shuffle};