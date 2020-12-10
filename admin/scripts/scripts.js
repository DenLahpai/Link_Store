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
        errorMsg = "<span style='color: red'>Please input all the field(s) in red!</span>";
    }

    if (Password.val() == "") {
        Password.addClass('input-error');
        inputError = true;
        errorMsg = "<span style='color: red'>Please input all the field(s) in red!</span>";
    }

    if (StoresCode.val() == "") {
        StoresCode.addClass('input-error');
        inputError = true;
        errorMsg = "<span style='color: red'>Please input all the filed(s) in red!</span>";
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
                    var errorMsg = "<span style='color: red'>There was a connection error! Please try again!</span>";
                }
                if (data == 2) {
                    // Two is returned for wrong input data
                    var errorMsg = "<span style='color: red'>Wrong input data! Forgot <a href='forgot_password.html'> your password?</a></span>";
                    $('#response').html(errorMsg);
                }
            }
        
        );
    }
}


/****** function to validate email  ******/
// Note function copied from Stackoverflow.com
function validateEmail(sEmail) {
    var reEmail = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;

    if(!sEmail.match(reEmail)) {
    alert("Invalid email address!");
    return false;
    }
    return true;
}


/****** Function to Toggle items ******/
function Toggle (item) {
    $(item).slideToggle();
}

/****** Function to request for forgotten password ******/
function forgotPasswordRequest() {
    var Email = $("#Email");
    var Mobile = $("#Mobile");

    Email.removeClass('input-error');
    Mobile.removeClass('input-error');
    var inputError = false;
    var errorMsg = ""; 

    if (Email.val() == "") {
        var inputError = true;
        errorMsg = "<span style='color:red'>Please input all the filed(s) in red!</span>";
        Email.addClass('input-error');
        $("#response").html(errorMsg);
    }

    if (Mobile.val() == "") {
        var inputError = true;
        errorMsg = "<span style='color:red'>Please input all the field(s) in red!</span>";
        Mobile.addClass('input-error');
        $("#response").html(errorMsg);
    }

    if (inputError == false) {
        errorMsg = "";
        $.post("includes/forgot_password.php", {
            Email: Email.val(), 
            Mobile: Mobile.val()
            }, function (data) {
                $("#response").html(data);
                //TODO need to continue after uploading on a webserver
            }        
        );        
    }
}

/***** function to check if 2 passwords match ******/
function checkPasswords () {
    var password = $("#password");
    var repassword = $("#repassword");
    var errorMsg = "";
    $("#button-submit").attr("disabled", "disabled");
    
    if (password.val() === repassword.val()) {
        $("#button-submit").removeAttr("disabled", "disabled");
    }
    else {
        errorMsg = "<span style='color: red;'>The two passwords do NOT match!</span>";
        $("#response").html(errorMsg);
    }
}