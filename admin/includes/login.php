<?php
require_once "../functions.php";

$db = new Database ();

$stm = "SELECT * FROM Users 
    WHERE BINARY Username = :Username
    AND BINARY Password = :Password
    AND BINARY StoresCode = :StoresCode
;";
$db->query($stm);
$db->bind(':Username', $_POST['Username']);
$db->bind(':Password', md5($_POST['Password']));
$db->bind(':StoresCode', $_POST['StoresCode']);
$rowCount = $db->rowCount();

if ($rowCount == 1) {
    // Zero is returned for no error!
    echo 0;
    $rows = $db->resultsetArray();
    foreach ($rows as $_SESSION) {
        // Storing data from $stm to the SESSION.
    }
}

if ($rowCount == 0) {
    // Two is returned for wrong username, password or store code...
    echo 2;
}

?>