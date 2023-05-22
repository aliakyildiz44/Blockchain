var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var tet = document.getElementById("tether");
var hel = document.getElementById("helium");
var btcc = document.getElementById("bitcoinn")

var liveprice = {
    "async": true,
    "scroosDomain": true,

    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether%2Chelium%2C&vs_currencies=usd&include_24hr_change=true&include_last_updated_at=true",


    "method": "GET",
    "headers": {}
  }
  
  $.ajax(liveprice).done(function(response){
    btc.innerHTML = response.bitcoin.usd;
    btcc.innerHTML = response.bitcoin.usd_24h_change.toFixed(2);
    eth.innerHTML = response.ethereum.usd;
    tet.innerHTML = response.tether.usd;
    
    console.log(response);
  });

 

  
