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

// function loadNames(mountainsArray) {
//     mountainsArray.forEach((mountain) => {
//         mtsdrop.innerHTML += wrapAsOption(mountain.name)
//     })
// }

// showMeButton.addEventListener("click", () => {
//     loadNames(mountainsArray)
//     mountainNamesDropDown.classList.remove("d-none")
//     infoTable.classList.add("d-none")
// })

// Populate Mountain dropdown with mountains array 
// mtnsDropdown.addEventListener('click', function () {

//     console.log("Mountains Drop Down Populated")


    // let content4 = `<select class="form-select" id="mtn-select" aria-label="Default select example">
    //                 <option selected>Select a Mountain</option>';
    //                 `;
    // let i = 1;
    // mountainsArray.forEach(p => {

    //     content4 += `<option value=${i}>${p.name}</option>`;
    //     i += 1;
    // });

    // content4 += '</select>';

    // document.querySelector("#mts-drop").innerHTML = content4;
// })

// Create view all mountains function from mountain button - feed mountain details into html 
viewAllmtnsbtn.addEventListener("click", function () {

    //console.log(viewAllmtns);



    let content = '';
    mountainsArray.forEach(p => {

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


// create variable of what is selected
// event will have a target that is the object they selected


// , {once : true}

// Create function that filters cards by mountain selected 
// Need to create a button that executes the below function 
// showMebtn.addEventListener('click', () => {


//         console.log("filter function ran");
//         let content = '';
//         let mtn_select = document.getElementById('mtn-select');
//         let mtn_select_text = mtn_select.options[mtn_select.selectedIndex].text;
//         console.log(mtn_select_text);
//         mountainsArray.forEach(p => {

//             if (p.Name === mtn_select_text) {

//                 let imageSrc = "assets/images/mountains/" + p.img;
//                 content +=
//                     `<div style="max-width: 18rem;">
//               <img class="card-img-top" src="${imageSrc}" alt="Card image cap">
//               <div class="card-body">
//                 <h5 class="card-title">${p.name}</h5>
//                 <p class="card-text">${p.desc}</p>
//                 <p class="card-text">Intensity: ${p.effort}</p>
//                 <p class="card-text">Elevation: ${p.elevation} feet </p>
//               </div>
//             </div>
//             `;
//             }
//             document.querySelector("#shop2").innerHTML = content;
//             console.log(content);
//         });
//     }
// )