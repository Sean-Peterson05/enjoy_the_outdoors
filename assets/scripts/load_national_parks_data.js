"use strict";

let locationsArray = [];
let nationalParksArray = [];
let parkTypesArray = [];
let natParksbtn = document.querySelector("#nat-parks-btn");
let parkTypebtn = document.querySelector("#byParktype")
let locationBtn = document.querySelector("#byLocation")


window.onload = function(){

    loadJsonData("assets/data/locations.json").then((locations) => {
        locationsArray = locations;
    })

    loadJsonData("./assets/data/nationalparks.json").then((nationalParks) => {
        nationalParksArray = nationalParks.parks;
    })

    loadJsonData("assets/data/parktypes.json").then((parkTypes) => {
        parkTypesArray = parkTypes;
    })

}

async function loadJsonData(path) {
    let response = await fetch(path);
    let data = await response.json();
    return data;
}

parkTypebtn.addEventListener("click", function() {

    // display all the park types to display 

    // starter html that is static 
    // dynamically add in html for the options 
    // close with html that is static
    // change HTML 
    let content2 = `<select class="form-select" id="park_type-select" aria-label="Default select example">
                    <option selected>All Types</option>';
                    `
    let i = 1; 
    parkTypesArray.forEach(p => {

        content2 += `<option value=${i}>${p}</option>`;
        i += 1;
    })

    content2 += '</select>'
    console.log(content2)

    document.querySelector("#ptype-dropdown").innerHTML = content2;

})

locationBtn.addEventListener("click", function() {

    let content3 = `<select class="form-select" id="location-select" aria-label="Default select example">
                    <option selected>All States</option>';
                    `
    let i = 1; 
    locationsArray.forEach(p => {

        content3 += `<option value=${i}>${p}</option>`;
        i += 1;
    })

    content3 += '</select>'
    console.log(content3)

    document.querySelector("#loc-dropdown").innerHTML = content3;

})

natParksbtn.addEventListener("click", function() {

    // Get the value of the location selected by user 
    let location_select = document.getElementById('location-select');
    let location_select_text = location_select.options[location_select.selectedIndex].text;
    console.log(location_select_text);
    
    // Get the value of the park type selected by user 
    let park_type_select = document.getElementById('park_type-select');
    let park_type_text = park_type_select.options[park_type_select.selectedIndex].text;
    console.log(park_type_text);

    // Build content html dynamically 
    // if only one filter is selected then filter for just the one
    // if both filters are selected then filter for both 
    // if no filter is selected then show all results 
    //p.LocationName.includes(park_type_text)
    let content = '';

    nationalParksArray.forEach(p => {
        
        if(location_select_text === "All States" && park_type_text === "ALL Types") { 
            
            let location = p.City + ", " + p.State;

            content += `
            <div class="card">
            <div class="card-body">
            <h5 class="card-title">${p.LocationName}</h5>
            <p class="card-text">${p.Address}</p>
            <p class="card-text">${location}</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
            `
            document.querySelector("#shop").innerHTML = content;
        }

});

})


