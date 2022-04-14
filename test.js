let liste = document.getElementById("listele");

const kitap = fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    data.map((element) => {
      // console.log(element.title);
      if(element.id <= 3){
        liste.innerHTML += `
        <li>${element.title}</li>
        </br>
        <li>${element.id}</li>
        `
      }
    });
  })
  .catch((resolve) => console.log("başarısız"));


let burl = "https://api.binance.com";
let query = "/api/v3/exchangeInfo";

let url = burl + query;

let ourRequest = new XMLHttpRequest();
ourRequest.open("GET", url, true);
ourRequest.onload = function(){
    console.log(ourRequest.responseText);
}
ourRequest.send();
