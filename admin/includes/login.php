<?php
require_once "../functions.php";

$db = new Database ();

$stm = "SELECT  
    Users.Username, 
    Users.Name, 
    Users.Email,
    Users.Mobile,
    Stores.Name AS StoresName,
    Stores.Code AS StoresCode,
    Stores.Link AS StoresLink
    FROM Users 
    LEFT OUTER JOIN Stores ON Users.StoresId = Stores.Id
    WHERE BINARY Users.Username = :Username
    AND BINARY Users.Password = :Password
    AND BINARY Stores.Code = :Code
;";
$db->query($stm);
$db->bind(':Username', $_POST['Username']);
$db->bind(':Password', md5($_POST['Password']));
$db->bind(':Code', $_POST['Code']);
$rc = $db->rowCount();

if ($rc == 1) {
    // Zero is returned for no error!
    echo 0;
    $rows = $db->resultsetArray();
    foreach ($rows as $_SESSION) {
        // Storing data from $stm to the SESSION.
    }
}

if ($rc == 0) {
    // Two is returned for wrong username, password or store code...
    echo 2;
}

?>