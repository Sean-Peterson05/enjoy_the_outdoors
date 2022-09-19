let locationsArray = [];
let nationalParksArray = [];
let parkTypesArray = [];

window.onload = function(){

    fetch("./assets/data/nationalparks.json")
        .then((response) => response.json())
        .then((json) => {nationalParksArray = json})
        .then(console.log(nationalParksArray))

}

let content = '';

nationalParksArray.forEach(p => {
    content += `
    <div class="card">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">test</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
    `
  });

document.querySelector("#shop").innerHTML = content;