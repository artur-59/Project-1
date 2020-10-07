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

const buttons = document.querySelectorAll('button');


for(i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click", function(event) {
        console.log(event.currentTarget.id);
        const index = event.currentTarget.id;
        const popup = document.createElement('div');
        popup.innerHTML = `<div class="pop-up">
            <p>
                <span><i class="fa fa-phone-square"></i> </span>${carpentryArray[index].phoneNumber}
            </p>
            <p>
                <span><span class="iconify" data-icon="map-postal-code-prefix" data-inline="false"></span> </span>${carpentryArray[index].zipCode}
            </p>
            <p>
                <span>&#x2709; </span>${carpentryArray[index].email}
            </p>
            <p>
                <span><span class="iconify" data-icon="ic:baseline-schedule" data-inline="false"></span> </span>${carpentryArray[index].schedule}
            </p>
        </div>`;
        document.body.appendChild(popup);
        const closeButton = document.createElement('button');
        document.popup.appendChild(closeButton);
        
        });
}
