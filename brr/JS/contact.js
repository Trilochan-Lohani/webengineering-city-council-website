const firebaseConfig = {
    apiKey: "AIzaSyDzOaKVXh37n6kkvR_BzV_QuuuYx3gpwz4",
    authDomain: "brr-councilweb.firebaseapp.com",
    databaseURL: "https://brr-councilweb-default-rtdb.firebaseio.com",
    projectId: "brr-councilweb",
    storageBucket: "brr-councilweb.appspot.com",
    messagingSenderId: "29808561032",
    appId: "1:29808561032:web:0ee3b84016fd8cffb5c83d"
  };

  document.getElementById("Contactform").addEventListener("submit", function(event) {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;

    // Validate First Name and Last Name
    var nameRegex = /^[a-zA-Z\s]+$/;
    if (!fname.match(nameRegex) || !lname.match(nameRegex)) {
        alert("Please enter a valid first and last name with only alphabets and white spaces.");
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

    // Validate Subject
    if (subject.length > 256) {
        alert("Subject cannot exceed 256 characters.");
        event.preventDefault();
        return;
    }

    console.log(fname, lname, email, subject);
});
