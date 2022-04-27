let tableDOM = document.getElementById("marketTableBody")
let marketApi = fetch("usersapi.json")
    .then((response) => response.json())
    .then((data) => {
        data.map((element) => {
            if(element.id <= 5){
                tableDOM.innerHTML += `
                <tr>
                <td class="assets">
                  <img src="./img/Bitcoin.svg" alt="" /> ${element.first_name}
                </td>
                <td class="title">${element.last_name}</td>
                <td class="lastPrice">${element.email}</td>
                <td class="marketCap">${element.gender}</td>
                <td class="change" style="color: var(--redPrimary)">
                ${element.change}
                </td>
                <td class="chart">
                  <img src="./img/Graphic-Geçici Silinecek.svg" alt="" />
                </td>
                <td class="trade"><button>Buy</button></td>
              </tr>
                `
            }
        })
    })
    .catch((resolve) => console.log(resolve))

