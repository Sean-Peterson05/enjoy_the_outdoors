"use strict"

let mountainsArray = []
let viewAllmtnsbtn = document.querySelector('#all-mtns-btn');
let mtnsDropdown = document.querySelector('#mts-drop');
let showMebtn = document.querySelector('#show-me-btn');

window.onload = function () {

    loadJsonData("assets/data/mountains.json").then((mountains) => {
        mountainsArray = mountains.mountains;
    })
}


//function that can "fetch" the sunset/sunrise times
let loadJsonData = async (path) => {
    let response = await fetch(path)
    let data = await response.json()
    return data
}

// Populate Mountain dropdown with mountains array 
mtnsDropdown.addEventListener('click', function () {

    console.log("Mountains Drop Down Populated")
    
    // let content4  = `<select class="form-select form-select-sm d-flex justify-content-center align-items-center" aria-label="Default select example" id = "mts-drop">
    //     <option selected>Select a Mountain</option>
    // </select>`

    let i =1;

    mountainsArray.forEach(p => {
        content4 += `<option value=${i}>${p.name}</option>`;
        i += 1;
    });
    content4 += '</select>';
    document.querySelector("#test").innerHTML = content4;

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
})

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
          </div>
        </div>
        `
    });
    document.querySelector("#shop2").innerHTML = content;
});


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