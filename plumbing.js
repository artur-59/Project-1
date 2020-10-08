const turnToBackButtons = document.getElementsByClassName('flip-card-btn-turn-to-back');
const turnToFrontButtons = document.getElementsByClassName('flip-card-btn-turn-to-front');
const cards = document.getElementsByClassName('flip-card');

console.log(turnToBackButtons);

for(i=0; i< turnToBackButtons.length; i++){
    turnToBackButtons[i].addEventListener('click', function(event){
        let id = event.currentTarget.id
        cards[id].classList.toggle('do-flip');
        turnToBackButtons[id].style.visibility = 'visible';
    })
}

for(i=0; i< turnToFrontButtons.length; i++){
    turnToFrontButtons[i].addEventListener('click', function(event){
        let id = event.currentTarget.id
        cards[id].classList.toggle('do-flip');
    })
}