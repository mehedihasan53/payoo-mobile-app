document
    .getElementById("add-money-btn")
    .addEventListener("click", function (e) {
        e.preventDefault();

        const bank = document.getElementById("bank-select").value;
        const accountNumber = document.getElementById("account-number").value;
        const addAmount = parseInt(document.getElementById("add-amount").value);
        const addPin = parseInt(document.getElementById("add-pin").value);
        const pin = 1234;

        const availableBalance = parseInt(
            document.getElementById("available-balance").innerText
        );

        if (accountNumber.length !== 11) {
            alert("Provide a valid account number");
            return;
        }
        if (addPin !== pin) {
            alert("provide a valid pin number");
            return;
        }

        const totalBalance = addAmount + availableBalance;

        document.getElementById("available-balance").innerText = totalBalance;
    });

// toggle section

document
    .getElementById("add-money-click")
    .addEventListener("click", function () {
        document.getElementById("cash-out-section").style.display = "none";
        document.getElementById('transfer-money-section').style.display = "none"
        document.getElementById('get-bonus-section').style.display = "none"
        document.getElementById('pay-bill-section').style.display = "none"
        document.getElementById('transaction-section').style.display = "none"
        document.getElementById("add-money-section").style.display = "block";
    });
document
    .getElementById("cash-out-click")
    .addEventListener("click", function () {
        document.getElementById("add-money-section").style.display = "none";
        document.getElementById('transfer-money-section').style.display = "none"
        document.getElementById('get-bonus-section').style.display = "none"
        document.getElementById('pay-bill-section').style.display = "none"
        document.getElementById('transaction-section').style.display = "none"
        document.getElementById("cash-out-section").style.display = "block";
    });

document.getElementById('transfer-money-click')
    .addEventListener('click', function () {
        document.getElementById('add-money-section').style.display = "none"
        document.getElementById('cash-out-section').style.display = "none"
        document.getElementById('get-bonus-section').style.display = "none"
        document.getElementById('pay-bill-section').style.display = "none"
        document.getElementById('transaction-section').style.display = "none"
        document.getElementById('transfer-money-section').style.display = "block"
    })

document.getElementById('get-bonus-click')
    .addEventListener('click', function () {
        document.getElementById('add-money-section').style.display = "none"
        document.getElementById('cash-out-section').style.display = "none"
        document.getElementById('transfer-money-section').style.display = "none"
        document.getElementById('pay-bill-section').style.display = "none"
        document.getElementById('transaction-section').style.display = "none"
        document.getElementById('get-bonus-section').style.display = "block"
    })
document.getElementById('pay-bill-click')
    .addEventListener('click', function () {
        document.getElementById('add-money-section').style.display = "none"
        document.getElementById('cash-out-section').style.display = "none"
        document.getElementById('transfer-money-section').style.display = "none"
        document.getElementById('get-bonus-section').style.display = "none"
        document.getElementById('transaction-section').style.display = "none"
        document.getElementById('pay-bill-section').style.display = "block"
    })
document.getElementById('transaction-click')
    .addEventListener('click', function () {
        document.getElementById('add-money-section').style.display = "none"
        document.getElementById('cash-out-section').style.display = "none"
        document.getElementById('transfer-money-section').style.display = "none"
        document.getElementById('get-bonus-section').style.display = "none"
        document.getElementById('pay-bill-section').style.display = "none"
        document.getElementById('transaction-section').style.display = "block"
    })