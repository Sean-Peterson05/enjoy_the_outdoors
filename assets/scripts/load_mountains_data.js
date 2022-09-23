"use strict"

let mountainsArray = []
let viewAllmtnsbtn = document.querySelector('#all-mtns-btn');
let mtnsDropdown = document.querySelector('#mts_drop');
let showMebtn = document.querySelector('#show-me-btn');

window.onload = function () {

    loadJsonData("assets/data/mountains.json").then((mountains) => {
        mountainsArray = mountains.mountains;
    })

    showMebtn.addEventListener('click', function(){

        // Shows Dropdown element
        mtnsDropdown.classList.remove("d-none")

        // Populate Dropdown with values 
        function wrapAsOption(value) {
            return `<option value="${value}">${value}</option>`
        }
        mountainsArray.forEach((mountain) => {
            mts_drop.innerHTML += wrapAsOption(mountain.name)
        })
    })
}
function mountainFilter(){
    console.log("Test")

    let content = '';
    let mountain_select = document.getElementById('mts_drop');
    let mountain_select_text = mountain_select.options[mountain_select.selectedIndex].text;
    console.log(mountain_select_text);

        // Remove featured header and elements from page if they exist
        if(document.contains(document.getElementById('featured_parks'))){
            document.getElementById('featured_parks').remove()
        }
    
        if(document.contains(document.getElementById('featured_parks_head'))){
            document.getElementById('featured_parks_head').remove()
        }

    mountainsArray.forEach(p => {

        if(mountain_select_text === p.name){

        let imageSrc = "assets/images/mountains/" + p.img;
        content +=
            `<div style="max-width: 18rem;">
          <img class="card-img-top" src="${imageSrc}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${p.name}</h5>
            <p class="card-text">${p.desc}</p>
            <p class="card-text">Intensity: ${p.effort}</p>
            <p class="card-text">Elevation: ${p.elevation} feet </p>
          </div>
        </div>
        `
}});
    document.querySelector("#shop2").innerHTML = content;
}

// on change of dropdown filter results for the value selected

//function that can "fetch" the sunset/sunrise times
let loadJsonData = async (path) => {
    let response = await fetch(path)
    let data = await response.json()
    return data
}

// Create view all mountains function from mountain button - feed mountain details into html 
viewAllmtnsbtn.addEventListener("click", function () {

        // Remove featured header and elements from page if they exist
        if(document.contains(document.getElementById('featured_parks'))){
            document.getElementById('featured_parks').remove()
        }
    
        if(document.contains(document.getElementById('featured_parks_head'))){
            document.getElementById('featured_parks_head').remove()
        }


    let content = '';
    mountainsArray.forEach(p => {

        //let lat_coords = p.coords.lat;
        //let lng_coords = p.coords.lng;

        let imageSrc = "assets/images/mountains/" + p.img;
        content +=
            `<div style="max-width: 18rem;">
          <img class="card-img-top" src="${imageSrc}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${p.name}</h5>
            <p class="card-text">${p.desc}</p>
            <p class="card-text">Intensity: ${p.effort}</p>
            <p class="card-text">Elevation: ${p.elevation} feet </p>
            <p class="card-text">Sunset/Sunrise (UTC): ${p.coords.lat}</p>
          </div>
        </div>
        `
    });
    document.querySelector("#shop2").innerHTML = content;
});

//function that can "fetch" the sunset/sunrise times
async function getSunsetForMountain(lat, lng){
    let response = await fetch(`http://api.sunrise-sunset.org/json?lat=${p.lat}&lng=${p.lng}&date=today`)
    let data = await response.json()
    return data
}

