<?php
require_once "../functions.php";

if (isset($_REQUEST['BrandsName'])) {

    if (isset($_FILES['Image']) || !empty($_FILES['Image'])) {
        $file = $_FILES['Image'];
        if ($file['error'] == 0) {
            
            //getting extension of the file
            $ext = explode('.', $file['name']);
            $file_ext = strtolower(end($ext));

            //setting new file name and file path
            $file_name = uniqid('', true).'.'.$file_ext;
            $file_path = "../../logos/".$file_name;

            //uploading the file
            move_uploaded_file($file['tmp_name'], $file_path);
            
            // creating and uploading thumbnail
            $thumb_path = "../../logos/thumbnails/".$file_name;
            CreateThumbnail($file_path, $thumb_path, 300, $quality = 100);
        }
        else {
            echo "<span style='color: red;'>There was an error uploading the image!</span>";
        }
    }
    else {
        echo "<span style='color: red;'>No image was found!</span>";
    } 
    //check if the brand already exists.
    $rowCount = table_Brands ('row_count_before_insert', 'BrandsName',  NULL, NULL, NULL, NULL, NULL);
    if ($rowCount != 0) {
        echo "<span style='color: red;'>The brand already exists in your database!</span>";
    }
    else {
        // inserting to the table Brands
        $i = table_Brands ('insert', $file_name, NULL, NULL, NULL, NULL, NULL);
        if ($i == true) {
            return true;
        }
        else {
            echo "<span style='color: red;'>There was a connection error! Please try again!</span>";
        }        
    }
}
?> 