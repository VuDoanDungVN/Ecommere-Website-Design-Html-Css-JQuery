<?php
$hostname = "localhost";
$username = "";
$password = "";
$dbname = "user_form";

$conn = mysqli_connect($hostname, $username, $password, $dbname);
if (!$conn) {
    echo "Database connection error" . mysqli_connect_error();
}
