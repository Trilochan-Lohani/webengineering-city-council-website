document.getElementById("form").addEventListener("submit", function(event) {
    var uname = document.getElementById("uname").value;
    var email = document.getElementById("email").value;
    var pnumber = document.getElementById("pnumber").value;
    var address = document.getElementById("address").value;
    var postcode = document.getElementById("postcode").value;
    var psw = document.getElementById("psw").value;
    var cpsw = document.getElementById("cpsw").value;
    
    // Validate Username
    if (uname.trim() === "") {
        alert("Username cannot be empty.");
        event.preventDefault();
        return;
    }

    // Convert the first letter of each word to uppercase
    uname = uname.replace(/\b\w/g, function(char) {
        return char.toUpperCase();
    });

        // Validate the username
    var unameRegex = /^[A-Za-z\s]+$/;
    if (!uname.match(unameRegex)) {
        alert("Please enter a valid username. It must contain alphabets and white spaces only.");
        event.preventDefault();
        return;
    }

    // Validate Email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
        alert("Please enter a valid email address.");
        event.preventDefault();
        return;
    }

    // Validate Phone Number
    var pnumberRegex = /^[0-9]{10}$/;
    if (!pnumber.match(pnumberRegex)) {
        alert("Please enter a valid phone number. It contains 10-digit");
        event.preventDefault();
        return;
    }

    // Validate Address
    if (address.trim() === "") {
        alert("Address cannot be empty.");
        event.preventDefault();
        return;
    }

    // Validate Postcode
    var postcodeRegex = /^[0-9a-zA-Z]{6}$/;
    if (!postcode.match(postcodeRegex)) {
        alert("Please enter a valid postcode with 6 characters of letters and numbers.");
        event.preventDefault();
        return;
    }

    // Validate Password
    var pswRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,15}$/;
    if (!psw.match(pswRegex)) {
        alert("Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be 6-15 characters long.");
        event.preventDefault();
        return;
    }

    // Confirm Password
    if (psw !== cpsw) {
        alert("Passwords do not match.");
        event.preventDefault();
        return;
    }
});