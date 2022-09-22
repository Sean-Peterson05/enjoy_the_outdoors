// this depends on load_mountains_data.js

let pathToImages = 'assets/images/mountains/'

function loadCardFor(mountain) {
    var txt = '<div class="card">'
    txt += '<div class="card-body">'
 
    Object.keys(mountain).forEach(function (key) {
        txt += `<p>${capitalize(key)}: ${formatItem(mountain,key)}</p>`
    });

    mountainInfo.innerHTML = txt
    infoTable.classList.remove("d-none")
}

function capitalize(value) {
    return `${value.charAt(0).toUpperCase()}${value.slice(1)}`
}

function formatItem(obj, key) {
    var result = ""
    switch(key) {
      case "coords":
        result = `Latitude ${obj[key].lat}, Longitude ${obj[key].lng}`
        break;
      case "elevation":
        result = `${obj[key]} feet`
        break;
      case "img":
        result = `<img src="${pathToImages}${obj[key]}"/>`
        break;  
      default: 
        result = obj[key]
    }
    return result
}

function loadNames(mountainsArray) {
    mountainsArray.forEach((mountain) => {
        mountainNames.innerHTML += wrapAsOption(mountain.name)
    })
}

"use strict"

let mountainsArray = []
let showMeButton = document.querySelector("#showMe")
let mountainNamesDropDown = document.querySelector("#mountainNames")
let selectedMountain = ""
let infoTable = document.querySelector("#infoTable")
let mountainInfo = document.querySelector("#mountainInfo")


window.onload = function(){

    loadJsonData("assets/data/mountains.json").then((mountains) => {
        mountainsArray = mountains.mountains;
    })

    showMeButton.addEventListener("click", () => {
        loadNames(mountainsArray)
        mountainNamesDropDown.classList.remove("d-none")
        infoTable.classList.add("d-none")
    })
          
    mountainNamesDropDown.addEventListener("change", (event) => {
        selectedMountain = mountainsArray.filter((mountain) => {
            return mountain.name === event.target.value
        })
        event.target.value = "Choose a mountain"
        mountainNamesDropDown.classList.add("d-none")
        loadCardFor(selectedMountain[0])
    })
}

//function that can "fetch" the sunset/sunrise times
let loadJsonData = async (path) => {
    let response = await fetch(path)
    let data = await response.json()
    return data
}