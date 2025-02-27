document.getElementById("cashout").style.display = "none";
document.getElementById("TransferMoney").style.display = "none";
document.getElementById("get-bonus").style.display = "none";

document.getElementById("add-money-box").addEventListener("click", function () {
    console.log("hello")
    document.getElementById("cashout").style.display = "none";
    document.getElementById("addmoney").style.display = "block";
    document.getElementById("TransferMoney").style.display = "none";
    document.getElementById("get-bonus").style.display = "none";

})



document.getElementById("cashout-box").addEventListener("click", function () {
    document.getElementById("cashout").style.display = "block";
    document.getElementById("addmoney").style.display = "none";
    document.getElementById("TransferMoney").style.display = "none";
    document.getElementById("ge-tbonus").style.display = "none";
});

document.getElementById("TransferMoney-box").addEventListener("click", function () {
    document.getElementById("cashout").style.display = "none";
    document.getElementById("addmoney").style.display = "none";

    document.getElementById("TransferMoney").style.display = "block";
    document.getElementById("get-bonus").style.display = "none";
});
document.getElementById("bonus-box").addEventListener("click", function () {
    document.getElementById("cashout").style.display = "none";
    document.getElementById("addmoney").style.display = "none";
    document.getElementById("TransferMoney").style.display = "none";
    document.getElementById("get-bonus").style.display = "block";
});