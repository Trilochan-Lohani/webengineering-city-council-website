<?php
    // Establish connection to the database
    $servername = "localhost"; 
    $username = "root"; 
    $password = ""; 
    $dbname = "brr_database"; 

    // Database Connection
    $conn = mysqli_connect($servername, $username, $password, $dbname);

    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    
    // Retrieve form data
    $email = $_POST['email'];
    $password = $_POST['psw'];  

    // Check if email and password match
    $query = "SELECT * FROM user_register WHERE email = '$email' AND password = '$password'";
    $result = mysqli_query($conn, $query);

    if (mysqli_num_rows($result) == 1) {
        // Login successful
        session_start();
        $_SESSION['email'] = $email;
        
        // Retrieve username from database and store in session
        $user_data = mysqli_fetch_assoc($result);
        $_SESSION['username'] = $user_data['username'];
        $_SESSION['phone'] = $user_data['phone'];
        $_SESSION['Address'] = $user_data['Address'];
        $_SESSION['post_code'] = $user_data['post_code'];
        
        header("Location: ../dashboard.html"); // Redirect to dashboard or any other page after successful login
    } else {
        // Login failed
        echo "<script>alert('Invalid email or password. Please try again.');</script>";
        echo "<script>window.location.href = '../login.html';</script>"; // Redirect back to login page
    }

    // Close connection
    mysqli_close($conn);        
?>
