/****** function to login ******/
function login () {
    var Username = $("#Username");
    var Password = $("#Password");
    var StoresCode = $("#StoresCode");
    Username.removeClass('input-error');
    Password.removeClass('input-error');
    StoresCode.removeClass('input-error');
    var inputError = false;
    var errorMsg = ""; 
        
    if (Username.val() == "") {
        Username.addClass('input-error');
        inputError = true;
        errorMsg = "Please input all the field(s) in red!";
    }

    if (Password.val() == "") {
        Password.addClass('input-error');
        inputError = true;
        errorMsg = "Please input all the field(s) in red!";
    }

    if (StoresCode.val() == "") {
        StoresCode.addClass('input-error');
        inputError = true;
        errorMsg = "Please input all the filed(s) in red!";
    }

    if (inputError == true) {
        $('#response').html(errorMsg);
    }

    if (inputError == false) {
        $.post('includes/login.php', {
            Username: Username.val(),
            Password: Password.val(),
            StoresCode: StoresCode.val()
            }, function (data) {
                                
                if (data == 0) {
                    // Zero is returned when no error! Heading to home.html
                    $(location).attr('href', 'home.html');
                }
                if (data == 1) {
                    // One is returned for connection error
                    var errorMsg = "There was a connection error! Please try again!";
                }
                if (data == 2) {
                    // Two is returned for wrong input data
                    var errorMsg = "Wrong input data! Please try to <a href='reset_password.html'>reset your password!</a>";
                    $('#response').html(errorMsg);
                }
            }
        
        );
    }
}


/****** Function to Toggle items ******/
function Toggle (item) {
    $(item).slideToggle();
}
