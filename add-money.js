
document.getElementById("add-money")
.addEventListener("click", function (event) {
  event.preventDefault();

  const amount = document.getElementById("amount").value;
  const convertedAmount = parseFloat(amount);

  const pin = document.getElementById("pin").value;
  const convertedPin = parseInt(pin);

  const mainBalanceElement = document.getElementById("main-balance");
  const convertedMainBalance = parseFloat(mainBalanceElement.innerText);

  // Input validation
  if (isNaN(convertedAmount) || isNaN(convertedPin)) {
      console.log("Invalid input: Please enter valid numbers.");
      return;
  }

  if (convertedPin === 1234) {
      const sum = convertedMainBalance + convertedAmount;
      mainBalanceElement.innerText = sum;
      console.log("Balance updated successfully!");
  } else {
      console.log("Incorrect PIN!");
  }
});
