$(document).ready(function () {
  //Market Buy Sell Active
  $(".button").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  //Search Filter
  $(".search-button").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $(".coin-item").filter(function () {
      $(this).toggle($(this).text().toLocaleLowerCase().indexOf(value) > -1);
    });
  });
});

//BINANCE API
//BTC USDT
let ws = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade/@ticker");
let stockPriceElement = document.getElementById("stock-price");
let stockPriceElementTwo = document.getElementById("stock-price-2");
let dollarSymbol = document.getElementById("bigDollar");

let lastPrice = null;

ws.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let price = parseFloat(stockObject.p).toFixed(2);
  
  let priceTwo = parseFloat(stockObject.p).toFixed(2);
  let dollares = stockObject.s;

  let whole = dollares + " " + priceTwo

  stockPriceElementTwo.innerText = whole;

  stockPriceElement.innerText = price;

  dollarSymbol.style.color =
    !lastPrice || lastPrice === price
      ? "#ffffff"
      : price > lastPrice
      ? "#0ecb81"
      : "#fa2256";

  stockPriceElement.style.color =
    !lastPrice || lastPrice === price
      ? "#ffffff"
      : price > lastPrice
      ? "#0ecb81"
      : "#fa2256";

  stockPriceElementTwo.style.color =
    !lastPrice || lastPrice === price
      ? "#ffffff"
      : price > lastPrice
      ? "#0ecb81"
      : "#fa2256";

  lastPrice = price;
};

//BTC TRY
let wstry = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade/@ticker");
let stockPriceElementtry = document.getElementById("stock-price-try");
let bigTurkish = document.getElementById("bigTRY");
let lastPricetry = null;

wstry.onmessage = (event) => {
  let stockObjecttry = JSON.parse(event.data);
  let pricetry = parseFloat(stockObjecttry.p).toFixed(2);

  stockPriceElementtry.innerText = pricetry;

  bigTurkish.style.color =
    !lastPricetry || lastPricetry === pricetry
      ? "#ffffff"
      : pricetry > lastPricetry
      ? "#0ecb81"
      : "#fa2256";

  stockPriceElementtry.style.color =
    !lastPricetry || lastPricetry === pricetry
      ? "#ffffff"
      : pricetry > lastPricetry
      ? "#0ecb81"
      : "#fa2256";

  lastPricetry = pricetry;
};

//BTC Percentile
let wsperc = new WebSocket(
  "wss://stream.binance.com:9443/ws/btcusdt@ticker/btctry@trade"
);
let stockPriceElementperc = document.getElementById("stock-price-perc");
let percentileIcon = document.getElementById("bigPercentile");
let lastPriceperc = null;

wsperc.onmessage = (event) => {
  let stockObjectperc = JSON.parse(event.data);
  let priceperc = parseFloat(stockObjectperc.P).toFixed(2);
  let pricetry = parseFloat(stockObjectperc.p);

  stockPriceElementperc.innerText = priceperc;

  percentileIcon.style.color =
    !lastPricetry || lastPricetry === pricetry
      ? "#ffffff"
      : pricetry > lastPricetry
      ? "#0ecb81"
      : "#fa2256";

  stockPriceElementperc.style.color =
    !lastPricetry || lastPricetry === pricetry
      ? "#ffffff"
      : pricetry > lastPricetry
      ? "#0ecb81"
      : "#fa2256";

  lastPricetry = pricetry;
};

//Fiyat İstatistikleri
let wsist = new WebSocket(
  "wss://stream.binance.com:9443/ws/btcusdt@trade/@ticker"
);
