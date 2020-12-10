<?php
require_once "handler.php";

//function to use data from the table Users 
function table_Users ($job, $var1, $var2, $var3, $sorting, $limit) {
    $db = new Database();
    switch ($job) {
        case 'check_with_two_param':
            # Checking if the users email and mobile provided in the forgot_password form are correct!
            $stm = "SELECT * FROM Users WHERE 
                $var1 = :var1 AND
                $var2 = :var2
            ;";
            $db->query($stm);
            $db->bind(':var1', $_POST["$var1"]);
            $db->bind(':var2', $_POST["$var2"]);
            return $db->rowCount();
            break;

        case 'select_users_with_one_column': 
            //var1 = Column name
            //var2 = data
            $stm = "SELECT * FROM Users WHERE $var1 = :var2 ;";
            $db->query($stm);
            $db->bind(':var2', $var2);
            return $db->resultset(); 
            break;
        
        default:
            # code...
            break;
    }
}
?>