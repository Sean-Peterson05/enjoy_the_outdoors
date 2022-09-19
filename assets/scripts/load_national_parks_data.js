"use strict";

let locationsArray = [];
let nationalParksArray = [];
let parkTypesArray = [];
let natParksbtn = document.querySelector("#nat-parks-btn");

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

natParksbtn.addEventListener("click", function() {

    console.log(nationalParksArray)
    console.log(nationalParksArray.length)

    let content = '';

    nationalParksArray.forEach(p => {
        
        let location = p.City + ", " + p.State;

        content += `
        <div class="card">
        <div class="card-body">
          <h5 class="card-title">${p.LocationName}</h5>
          <p class="card-text">${ p.Address}</p>
          <p class="card-text">${location}</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
        `
      });

      document.querySelector("#shop").innerHTML = content;
})



