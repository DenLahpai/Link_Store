<?php
require_once "../functions.php";


if (isset($_REQUEST['BrandsName'])) {
    //check if the brand already exists.
    $rowCount = table_Brands ('row_count_before_insert', 'BrandsName',  NULL, NULL, NULL, NULL, NULL);
    if ($rowCount != 0) {
        echo "<span style='color: red;'>The brand already exists in your database!</span>";
    }
    else {
        // inserting data to the table 
        $i = table_Brands ('insert', NULL, NULL, NULL, NULL, NULL, NULL);        
        if ($i == true) {
            // resizing and uploading image (a logo and a real image) and linking to the database
        }
        else {
            echo $i;
        }
    }
}
?>