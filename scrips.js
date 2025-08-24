// Login button functionality 
document.getElementById('loginBtn').addEventListener('click', function (e) {
    e.preventDefault();

    const mobileNum = 123456;
    const pinNum = 1234;

    const mobileNumber = document.getElementById("mobile-number").value;
    const mobileNumberValue = parseInt(mobileNumber);

    const pinNumber = document.getElementById("pin-number").value;
    const pinNumberValue = parseInt(pinNumber);

    if (mobileNumberValue === mobileNum && pinNumberValue === pinNum) {
        window.location.href = "./home.html"
    }
    else {
        alert("Invalid ")
    }

})