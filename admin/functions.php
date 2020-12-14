<?php
require_once "handler.php";

//function to use data from the table Users 
function table_Users ($job, $var1, $var2, $var3, $order, $limit) {
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

        case 'reset_password':
            $stm = "UPDATE Users SET Password = :Password WHERE
                Email = :Email AND
                DOB = :DOB
            ;";    
            $db->query($stm);
            $db->bind(':Password', md5($_REQUEST['Password']));
            $db->bind(':Email', $_REQUEST['Email']);
            $db->bind(':DOB', $_REQUEST['DOB']);
            if ($db->execute()) {
                $msg = "Your password has been updated successfully! Please <a href='index.html'>login</a> with your new password!";
                return $msg;
            }
            else {
                $msg = "<span style='color: red;'>There was a connection problem! Please try again!</span>";
                return $msg;
            }
            break;    
        
        default:
            # code...
            break;
    }
    $db = NULL;
}

//function to use data from the table Brands 
function table_Brands ($job, $var1, $var2, $var3, $order, $limit, $offset) {
    $db = new Database();

    switch ($job) {
        case 'select_all':
            # code...
            $stm = "SELECT * FROM Brands $sorting LIMIT $limit OFFSET $offset ;";
            $db->query($stm);
            if ($db->execute()) {
                return $db->resultset();
            }
            else {
                $msg = 'error';
                return $msg;
            }
            break;
                
        default:
            # code...
            break;
    }
}
?>