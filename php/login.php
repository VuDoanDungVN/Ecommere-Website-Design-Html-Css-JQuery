<?php
if (isset($_POST['username']) && isset($_POST['userpassword'])) {
    function validate($data)
    {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
    $username = validate($_POST['username']);
    $userpass = validate($_POST['userpassword']);
    if (empty($username)) {
        header("Location : index.pap?error=User Name is required");
        exit();
    } else {
        if (empty($userpass)) {
            header("Location : index.pap?error=Password Name is required");
            exit();
        } else {
            echo "Valid input!";
        }
    }
} else {
    header("Location: index.php");
    exit();
}
