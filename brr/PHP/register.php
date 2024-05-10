<?php
    // Establish connection to the database
    $servername = "localhost"; 
    $username = "root"; 
    $password = ""; 
    $dbname = "brr_database";
    
    $conn = mysqli_connect($servername, $username, $password, $dbname);

    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    
    // Retrieve form data
    $uname = $_POST['uname'];
    $email = $_POST['email'];
    $pnumber = $_POST['pnumber'];
    $address = $_POST['address'];
    $postcode = $_POST['postcode'];
    $psw = $_POST['psw'];  

    // Check if user already exists
    $check_query = "SELECT * FROM user_register WHERE username = '$uname' OR email = '$email' OR phone = '$pnumber'";
    $result = mysqli_query($conn, $check_query);
    if (mysqli_num_rows($result) > 0) {
        echo "<script>alert('Error: User with the same username, email, or phone number already exists.');</script>";
        echo "<script>window.location.href = '../register.html';</script>"; // Redirect back to registration page
        exit(); // Stop execution if user already exists
    }

    // Insert data into the database
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $sql = "INSERT INTO user_register (username, email, phone, address, post_code, password) 
        VALUES ('$uname', '$email', '$pnumber', '$address', '$postcode', '$psw')";

        if (mysqli_query($conn, $sql)) {
            header("Location: ../index.html");
        } else {
            echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        }
    }

    // Close connection
    mysqli_close($conn);        
?>
