//! This file is used to sign up for a new account.
//! This file is used to sign up for a new account.
//! This file is used to sign up for a new account.

<?php
  include("database.php");
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sign up</title>
</head>
<body>
  //? Sign up form.
  <form action="<?php $_SERVER["PHP_SELF"] ?>" method="post">
    <label>Username:</label> <br>
      <input type="text" name="username"> <br>
    <label>Password:</label> <br>
      <input type="password" name="password"> <br>
    <input type="submit" name="submit" value="Sign up">
  </form>

</body>
</html>

<?php
  //?Check if the button is clicked.
  if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $username = filter_input(INPUT_POST, "username", FILTER_SANITIZE_SPECIAL_CHARS);
    $password = filter_input(INPUT_POST, "password", FILTER_SANITIZE_SPECIAL_CHARS);
    
    //?Check if username and password are empty.
    if (empty($_POST["username"]) && empty($_POST["password"])) {
      echo "Please insert a username and password.";
    } 

    //?Check if username is empty.
    else if (empty($_POST["username"])) {
      echo "Please insert a username.";
    } 

    //?Check if password is empty.
    else if (empty($_POST["password"])) {
      echo "Please insert a password.";
    } 

    //?Insert all the information into database.
    else {

      /*hash password
      $hash = password_hash($password, PASSWORD_DEFAULT);
      */

      //?Query to insert data into database.
      $sql = "INSERT INTO pelanggan (namapelanggan, password_pelanggan) 
              VALUES ('$username', '$password')";
      mysqli_query($conn, $sql);
      echo "You are now registered!";
    }
  }

  //?Close connection.
  mysqli_close($conn);
?>