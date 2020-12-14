<?php
require_once "../functions.php";
if ($_REQUEST['Table']) {
    $Table = $_REQUEST['Table'];
    
    //getting row counts
    $db = new Database();
    $stm = "SELECT * FROM $Table ;";
    $db->query($stm);
    echo $db->rowCount();    

    $db = NULL;
}
?>