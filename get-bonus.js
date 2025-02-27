document.getElementById('get-bonus-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const amount = document.getElementById("coupon-number").value;
  const convertedAmount = parseFloat(amount);
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainbalance = parseFloat(mainBalance);
    const pin = document.getElementById("bonus-pin").value;
    const convertedPin = parseInt(pin);
    if (convertedPin===1234) {
        const sum = convertedMainbalance + convertedAmount;
        document.getElementById("main-balance").innerText = sum;
    }
    else {
        console.log("pin shitik na")
    }
    
})