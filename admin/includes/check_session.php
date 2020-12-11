<?php
require_once "../functions.php";

if (!isset($_SESSION['StoresName'])) {
    echo 0;
}

else {
    echo $_SESSION['StoresName'];
}
?>