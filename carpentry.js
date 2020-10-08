/* 1st get all the buttons;
we'll get an array out of the selection

we want to loop over every button and add an
event listener (click) to every button

onclick create the popup using JS (createElement)
and append it to the body with a closing button

we should add another event listener to the
new button so we can actually close the pop-up

we also need an array of objects with the details
that we want to add
*/

/*const carpentryArray = [{"<i class='fa fa-phone-square'></i>": "077 4465 8809", "ZIP Code": "AB41 6TQ - LONDON", "&#x2709;": "", "Schedule": "9am to 5pm"},
                        {"<i class="fa fa-phone-square"></i>": "070 1634 1268", "ZIP Code": "WR6 0BW - LONDON", "&#x2709;": "" , "Schedule": "9am to 5pm"},
                        {"<i class="fa fa-phone-square"></i>": "079 3000 2467", "ZIP Code": "DT2 7EW - LONDON", "&#x2709;": "" , "Schedule": "10am to 6pm"},
                        {"<i class="fa fa-phone-square"></i>": "077 3329 8827", "ZIP Code": "GL7 9LB- LONDON", "&#x2709;": "" , "Schedule": "9am to 6pm"},
                        {"<i class="fa fa-phone-square"></i>": "079 2407 5139", "ZIP Code": "AB3 3SY - LONDON", "&#x2709;": "" , "Schedule": "10am to 5pm"},
                        {"<i class="fa fa-phone-square"></i>": "070 4540 3622", "ZIP Code": "NR11 2GB - LONDON", "&#x2709;": "" , "Schedule": "9am to 5pm"}];
*/

const carpentryArray = [
    {
        phoneNumber: "123124124",
        zipCode: "asd",
        email: "info@info.com",
        schedule: "9am to 5pm"
    },
    {
        phoneNumber: "123124124",
        zipCode: "asd",
        email: "info@info.com",
        schedule: "9am to 5pm"
    },
    {
        phoneNumber: "123124124",
        zipCode: "asd",
        email: "info@info.com",
        schedule: "9am to 5pm"
    },
    {
        phoneNumber: "123124124",
        zipCode: "asd",
        email: "info@info.com",
        schedule: "9am to 5pm"
    },
    {
        phoneNumber: "123124124",
        zipCode: "asd",
        email: "info@info.com",
        schedule: "9am to 5pm"
    },
    {
        phoneNumber: "123124124",
        zipCode: "asd",
        email: "info@info.com",
        schedule: "9am to 5pm"
    }
];

// const buttons = document.querySelectorAll('flip-card-btn-turn-to-back');


// for(i=0; i<buttons.length; i++){
//     buttons[i].addEventListener("click", function(event) {
//         console.log(event.currentTarget.className);
//         const contentBack = document.getElementsByClassName('flip-card-back')[i]
//         const index = event.currentTarget.className;
//         const popup = document.createElement('div');
//         popup.innerHTML = `<div class="pop-up">
//             <p>
//                 <span><i class="fa fa-phone-square"></i> </span>${carpentryArray[index].phoneNumber}
//             </p>
//             <p>
//                 <span><span class="iconify" data-icon="map-postal-code-prefix" data-inline="false"></span> </span>${carpentryArray[index].zipCode}
//             </p>
//             <p>
//                 <span>&#x2709; </span>${carpentryArray[index].email}
//             </p>
//             <p>
//                 <span><span class="iconify" data-icon="ic:baseline-schedule" data-inline="false"></span> </span>${carpentryArray[index].schedule}
//             </p>
//         </div><span id="flip-card-btn-turn-to-front">X</span>`;
//         document.getElementsByClassName('flip-card-back').innerHTML = popup;
//         // document.getElementsByClassName('flip-card-back').appendChild(popup);
//         // const closeButton = document.createElement('button');
//         // document.popup.appendChild(closeButton);
        
//         });
// }

// Pseudocode
// Stage 0.1 
// Change all of the ids to classes e.g. flip-card-btn-turn-to-back & flip-card-btn-turn-to-front

// DONE

// Stage 1 
// Get all of the buttons with the class name 'flip-card-btn-turn-to-back'
// loop through these buttons adding an event listener each time
//  use this coupled with event.currentTarget.classList.toggle('do-flip');


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

// Stage 2 
// Get all the buttons with the class flip-card-btn-turn-to-front
// loop through these buttons adding an event listener each time
//  use this coupled with event.currentTarget.classList.toggle('do-flip');


// Stage 3 
// Inject the HTML for the back of each card
//  Alternative add the html directly in the carpentry.html file