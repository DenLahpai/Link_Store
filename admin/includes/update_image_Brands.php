<?php
require_once "../functions.php";

// checking if there is an image
if (isset($_FILES['Image']) || !empty($_FILES['Image'])) {
    $file = $_FILES['Image']; 
    
    //checking if there is an error in image
    if ($file['error'] == 0) {

        //getting the extension 
        $ext = explode('.', $file['name']);
        $file_ext = strtolower(end($ext));

        //setting new file name and file path
        $file_name = uniqid('', true).'.'.$file_ext;
        $file_path = "../../logos/".$file_name;

        //uploading the file
        move_uploaded_file($file['tmp_name'], $file_path);
                
        // creating and uploading thumbnail if image type is jpg or jpeg
        // no thumb created for png as CreateThumbnail would not allow png files.
        $extensions = array ('jpg', 'jpeg');
        if (in_array($file_ext, $extensions)) {
            $thumb_path = "../../logos/thumbnails/".$file_name;
            CreateThumbnail($file_path, $thumb_path, 300, $quality = 100);
        } 

        // updating the table
        $i = table_Brands ("update_image", $file_name, NULL, NULL, NULL, NULL, NULL);
        
        if ($i == true) {
            return true;
        }
        else {
            echo $i;
        }

    }
    else {
        echo "<span style='color: red;'>There was an error uploading the image!</span>";
    }
}
else {
    echo "<span style='color: red;'>No image found!</span>";
}
?>