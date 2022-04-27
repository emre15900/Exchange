let ulDom = document.getElementById("marketTable");
let coinApi = fetch("usersapi.json")
  .then((response) => response.json())
  .then((data) => {
    data.map((element) => {
        if(element.id < 10){
            ulDom.innerHTML += `                 
            <tr>
              <td class="assets">
                <img src="./img/Bitcoin.svg" alt="" /> BTC
              </td>
              <td class="title">${element.first_name}</td>
              <td class="lastPrice">USD 53,260.20</td>
              <td class="marketCap">USD 53,260.20</td>
              <td class="change" style="color: var(--redPrimary)">
                0.25%
              </td>
              <td class="chart">
                <img src="./img/Graphic-Geçici Silinecek.svg" alt="" />
              </td>
              <td class="trade"><button>Buy</button></td>
            </tr>`;
        }
    });
  })
  .catch((error) => console.log(error))
