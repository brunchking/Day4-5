const output1 = document.querySelector('.output1');
const output2 = document.querySelector('.output2');
const output3 = document.querySelector('.output3');
const select = document.querySelector('select');
const coinRate = document.querySelector('.coinRate');
const input = document.querySelector('.input');
const output = document.querySelector('.output');
const btnHidden = document.querySelector('.btnHidden');
const btnBuy = document.querySelector('.btnBuy');
const btnSell = document.querySelector('.btnSell');
const XHR = new XMLHttpRequest();
let bitcoin, litecoin, dogecoin;
let totalCoin = 0;


btnHidden.innerHTML = localStorage.currentCoin;
btnBuy.addEventListener('click', () => {
    let coins, coinName;

    if (coinRate.value === "") {
        coins = input.value / output1.innerHTML;
        coins = coins.toFixed(5);
        totalCoin = coins;
        if (select.value === 'Bitcoin') {
            localStorage.currentCoin = 'BTC: ' + totalCoin.toString();
            coinName = "BTC: ";
        }
        else if (select.value === 'Litecoin') {
            localStorage.currentCoin = 'LTC: ' + totalCoin.toString();
            coinName = "LTC: ";
        }
        else if (select.value === 'Dogecoin') {
            localStorage.currentCoin = 'DOGE: ' + totalCoin.toString();
            coinName = "DOGE: ";
        }
        output2.innerHTML = coins;
        btnHidden.innerHTML = coinName + totalCoin.toString();
    }
    else {
        coins = input.value / coinRate.value;
        coins = coins.toFixed(5);
        totalCoin = coins;
        if (select.value === 'Bitcoin') {
            localStorage.currentCoin = 'BTC: ' + totalCoin.toString();
            coinName = "BTC: ";
        }
        else if (select.value === 'Litecoin') {
            localStorage.currentCoin = 'LTC: ' + totalCoin.toString();
            coinName = "LTC: ";
        }
        else if (select.value === 'Dogecoin') {
            localStorage.currentCoin = 'DOGE: ' + totalCoin.toString();
            coinName = "DOGE: ";
        }
        output2.innerHTML = coins;
        btnHidden.innerHTML = co
    }
});
btnSell.addEventListener('click', () => {
    let coins;
    coins = output.value * output1.innerHTML;
    coins = Math.ceil(coins);
    output3.innerHTML = coins;
});
select.addEventListener('change', (e) => {
    if (select.value === 'Bitcoin') {
        startBitcoin();
    }
    else if (select.value === 'Litecoin') {
        startLitecoin();
    }
    else
        startDogecoin();
});

startBitcoin();

function startBitcoin() {
    clearInterval(litecoin);
    clearInterval(dogecoin);
    bitcoin = setInterval(function () {
        XHR.open('GET', 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=twd', true);
        XHR.onload = function () {
            let data = JSON.parse(this.response);
            if (this.status === 200) {
                output1.innerHTML = data.bitcoin.twd;
                console.log(data.bitcoin.twd);
            }
            else if (this.status <= 400) {
                console.log('Error');
            }
        };
        XHR.send();
    }, 100);
}

function startLitecoin() {
    clearInterval(bitcoin);
    clearInterval(dogecoin);
    litecoin = setInterval(function () {
        XHR.open('GET', 'https://api.coingecko.com/api/v3/simple/price?ids=litecoin&vs_currencies=twd', true);

        XHR.onload = function () {
            let data = JSON.parse(this.response);
            if (this.status === 200) {
                output1.innerHTML = data.litecoin.twd;
                console.log(data.litecoin.twd);
            }
            else if (this.status <= 400) {
                console.log('Error');
            }
        };
        XHR.send();
    }, 100);
}

function startDogecoin() {
    clearInterval(litecoin);
    clearInterval(bitcoin);
    dogecoin = setInterval(function () {
        XHR.open('GET', 'https://api.coingecko.com/api/v3/simple/price?ids=dogecoin&vs_currencies=twd', true);

        XHR.onload = function () {
            let data = JSON.parse(this.response);
            if (this.status === 200) {
                output1.innerHTML = data.dogecoin.twd;
                console.log(data.dogecoin.twd);
            }
            else if (this.status <= 400) {
                console.log('Error');
            }
        };
        XHR.send();
    }, 100);
}