"use strict";

let locationsArray = [];
let nationalParksArray = [];
let parkTypesArray = [];
let natParksbtn = document.querySelector("#nat-parks-btn");
let parkTypebtn = document.querySelector("#byParktype");
let locationBtn = document.querySelector("#byLocation");


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

// Park Type Dropdown Population 
parkTypebtn.addEventListener("click", function() {

    // clear content from other button 
    document.querySelector("#loc-dropdown").innerHTML = '';

    let content2 = `<select class="form-select" id="park_type-select" aria-label="Default select example" onchange = "if (this.selectedIndex) typeFilter();">
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

// Location Dropdown - populate the dropdown 
locationBtn.addEventListener("click", function() {

    // clear content from other button 
    document.querySelector("#ptype-dropdown").innerHTML = '';

    let content3 = `<select class="form-select" id="location-select" aria-label="Default select example" onchange = "if (this.selectedIndex) locationFilter();">
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

// When location is selected, load results 
function locationFilter() {
    console.log("Function was called")

    let content = '';
    let location_select = document.getElementById('location-select');
    let location_select_text = location_select.options[location_select.selectedIndex].text;
    console.log(location_select_text);
    nationalParksArray.forEach(p => {

        if(p.State === location_select_text){

            let location = p.City + ", " + p.State;

            let website = p.Visit || "#"

            content += 
            `
            <div class = "card-deck p-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${p.LocationName}</h5>
                    <p class="card-text">${p.Address}</p>
                    <p class="card-text">${location}</p>
                    <a href="${website}" class="btn btn-primary" target="_blank"> Official Website </a>
                    <img src="assets/images/phone_icon.jpg" class="phone-img" alt="..."> <p>${p.Fax} </p>
                </div>
            </div>
            </div>
            `
            }
        document.querySelector("#shop").innerHTML = content;
    })
}

// When location is selected, load results 
function typeFilter() {
    console.log("Function was called")

    let content = '';
    let park_type_select = document.getElementById('park_type-select');
    let park_type_text = park_type_select.options[park_type_select.selectedIndex].text;
    console.log(park_type_text);
    nationalParksArray.forEach(p => {

        if(p.LocationName.includes(park_type_text)){

            let location = p.City + ", " + p.State;

            let website = p.Visit || "#"

            content += 
            `
            <div class = "card-deck p-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${p.LocationName}</h5>
                    <p class="card-text">${p.Address}</p>
                    <p class="card-text">${location}</p>
                    <a href="${website}" class="btn btn-primary" target="_blank"> Official Website </a>
                    <img src="assets/images/phone_icon.jpg" class="phone-img" alt="..."> <p>${p.Fax} </p>
                </div>
            </div>
            </div>
            `
            }
        document.querySelector("#shop").innerHTML = content;
    })
}

// Load all national parks 
natParksbtn.addEventListener("click", function() {

    let content = '';
    nationalParksArray.forEach(p => {

        let location = p.City + ", " + p.State;

        let website = p.Visit || "#"

        content += 
        `
        <div class = "card-deck p-3">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${p.LocationName}</h5>
                <p class="card-text">${p.Address}</p>
                <p class="card-text">${location}</p>
                <a href="${website}" class="btn btn-primary" target="_blank"> Official Website </a>
                <img src="assets/images/phone_icon.jpg" class="phone-img" alt="..."> <p>${p.Fax} </p>
            </div>
        </div>
        </div>
        `
    });
    document.querySelector("#shop").innerHTML = content;
}); 


    
    // Get the value of the location selected by user 
//     let location_select = document.getElementById('location-select');
//     let park_type_select = document.getElementById('park_type-select');
    
//     // Build content html dynamically 

//     // if location and park type are not null then filter for both 
//     if(location_select !== null && park_type_select !== null){

//         let location_select_text = location_select.options[location_select.selectedIndex].text;
//         let park_type_text = park_type_select.options[park_type_select.selectedIndex].text;

//         let content = '';
//         nationalParksArray.forEach(p => {

//             if(p.State === location_select_text && p.LocationName.includes(park_type_text)){
     
//                  let location = p.City + ", " + p.State;
     
//                  content += `
//                  <div class="card">
//                  <div class="card-body">
//                  <h5 class="card-title">${p.LocationName}</h5>
//                  <p class="card-text">${p.Address}</p>
//                  <p class="card-text">${location}</p>
//                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//                  </div>
//              </div>
//                  `
//         document.querySelector("#shop").innerHTML = content;
     
//      }})
//     }
//     // if location is selected and park type is null then filter for location 
//     else if(location_select !== null && park_type_select === null){

//         let location_select_text = location_select.options[location_select.selectedIndex].text;

//         let content = '';
//         nationalParksArray.forEach(p => {
     
//             if(p.State === location_select_text){
//                  let location = p.City + ", " + p.State;
     
//                  content += `
//                  <div class="card">
//                  <div class="card-body">
//                  <h5 class="card-title">${p.LocationName}</h5>
//                  <p class="card-text">${p.Address}</p>
//                  <p class="card-text">${location}</p>
//                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//                  </div>
//              </div>
//           `
//             }
//         document.querySelector("#shop").innerHTML = content;
     
//      })
//     }
//     // If location is null then filter for park type
//     else if(location_select === null && park_type_select !== null){

//         let park_type_text = park_type_select.options[park_type_select.selectedIndex].text;

//         let content = '';
//         nationalParksArray.forEach(p => {
     
//             if(p.LocationName.includes(park_type_text)){
//                  let location = p.City + ", " + p.State;
     
//                  content += `
//                  <div class="card">
//                  <div class="card-body">
//                  <h5 class="card-title">${p.LocationName}</h5>
//                  <p class="card-text">${p.Address}</p>
//                  <p class="card-text">${location}</p>
//                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//                  </div>
//              </div>
//           `
//             }
//         document.querySelector("#shop").innerHTML = content;
     
//      })
//     }

//     // Show all National Parks by Default
//     else{

//         let content = '';
//         nationalParksArray.forEach(p => {
     
            
//                  let location = p.City + ", " + p.State;
     
//                  content += `
//                  <div class="card">
//                  <div class="card-body">
//                  <h5 class="card-title">${p.LocationName}</h5>
//                  <p class="card-text">${p.Address}</p>
//                  <p class="card-text">${location}</p>
//                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//                  </div>
//              </div>
//           `
            
//         document.querySelector("#shop").innerHTML = content;
     
//      })
//     }

// })
     
    // if(location_select !== null) {
    //     let location_select_text = location_select.options[location_select.selectedIndex].text;
    //     console.log(location_select_text);
    // }
    // else {
    //     let location_select_text = "All States";
    //     console.log(location_select_text);

    // }
    // //console.log(location_select_text);
    
    // // Get the value of the park type selected by user 
    // let park_type_select = document.getElementById('park_type-select');

    // if(park_type_select !== null){
    //     let park_type_text = park_type_select.options[park_type_select.selectedIndex].text;
    //     console.log(park_type_text);
    // }
    // else{
    //     let park_type_text = "All Types";
    //     console.log(park_type_text);
    // }

    // Build content html dynamically 
    // if only one filter is selected then filter for just the one
    // if both filters are selected then filter for both 
    // if no filter is selected then show all results 
    //p.LocationName.includes(park_type_text)
//     let content = '';

//     nationalParksArray.forEach(p => {
        
//        // if(location_select_text === "All States" || park_type_text === "All Types") { 

//             let location = p.City + ", " + p.State;

//             content += `
//             <div class="card">
//             <div class="card-body">
//             <h5 class="card-title">${p.LocationName}</h5>
//             <p class="card-text">${p.Address}</p>
//             <p class="card-text">${location}</p>
//             <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//             </div>
//         </div>
//             `
//             document.querySelector("#shop").innerHTML = content;
//        // }

// });




