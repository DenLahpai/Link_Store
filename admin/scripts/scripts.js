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

/***** function to update password match ******/
function updatePassword () {
    var password = $("#password");
    var repassword = $("#repassword");
    var DOB = $("#DOB");
    var Email = $("#Email");

    if (password.val() === repassword.val()) {
        $.post("includes/update_password.php", {
            Password: password.val(),
            Email: Email.val(),
            DOB: DOB.val()
            }, function (data) {
                $("#response").html(data);
            }
        
        );
    }
    else {
        errorMsg = "<span style='color: red;'>The two passwords do NOT match!</span>";
        $("#response").html(errorMsg);
    }
}

/***** function to check if there is a session ******/
function checkSession () {
    $.post ("includes/check_session.php", 
        function (data) {
            if (data == 0) {
                // zero is returned as session is not set
                window.location.href = "index.html";
                var errorMsg = "<span style='color: red;'>Session Expired! Please login again!</span>"
                $("#response").html(errorMsg);
            }
            else {
                $(".nav-menu-middle").html(data);
            }
        }
    );    
}

/***** function to get row counts for the modules page ******/
function getRowCount (table) {
    $.post ("includes/row_count.php", {
            Table: table
        }, function (data) {
            $("#" + table + "RowCount").html(data);
        }
    
    );
}

/****** function to get data from the table  ******/
function selectRows (source, target) {
    var order = $("#order");
    var limit = $("#limit");
    var offset = $("#offset");
    var search = $("#search");
    $.post(source, {
        order: order.val(),
        limit: limit.val(),
        offset: offset.html(),
        search: search.val()
        }, function (data) {
            $(target).html(data);
        }

    );
}

/****** function to get data from the table  ******/
function pagination (table) {
    var limit = 10;    
    var page = Number($("#current_page").val());
    var Search = $("#Search").val();

    if (!Search) {
        var source = "row_count.php";
    }    
    else {
        var source = "search_row_count.php";
    }

    getData(table);

    $.post("includes/" + source, {  
        Table: table,
        Search: Search
        }, function (data) {
            var numRows = data;
            //calculating number of pages
            // var totalPages = Math.ceil(numRows / limit);
            var totalPages = 25;
                     
            if (page == 1) {
                var page1 = Number(page);
                var page2 = Number(page + 1);
                var page3 = Number(page + 2);
                var page4 = Number(page + 3);
                var page5 = Number(page + 4);
                var page6 = Number(page + 5);
                //hiding previous button
                $("#previous").hide();
            }

            else {
                var page1 = Number(page - 1);
                var page2 = Number(page);
                var page3 = Number(page + 1);
                var page4 = Number(page + 2);
                var page5 = Number(page + 3);
                var page6 = Number(page + 4);   
                // showing previous button
                $("#previous").show();             
            } 

            if (page == totalPages) {
                //hiding next button
                $("#next").hide();
            }
            else {
                //showing next button
                $("#next").show();
            }

            // setting up the page numbers
            $("#page1").val(page1);
            $("#page2").val(page2);
            $("#page3").val(page3);
            $("#page4").val(page4);
            $("#page5").val(page5);
            $("#page6").val(page6);

            var i = 1;
            while (i <= 6) {
                var page_num = $("#page" + i).val();
                if (page_num > totalPages) {
                    $("#page" + i).hide();
                }
                else {
                    $("#page" + i).show();  
                }
                if (page_num == page) {
                    $("#page" + i).css({"background": "#FFFFFF", "color": "rgba(0, 104, 255, 1)"});                    
                }
                else {
                    $("#page" + i).css({"background": "rgba(0, 104, 255, 1)", "color": "#FFFFFF"});
                }
                i++;
            }           
        }    
    );
    //getting data
}

function changeCurrentPage (num, table) {
    $("#current_page").val(num);
    pagination(table);      
}

function previousPage (table) {
    var page = Number($("#current_page").val());
    var new_page = page - 1;
    $("#current_page").val(new_page);
    pagination (table);  
}

function nextPage (table) {
    var page = Number($("#current_page").val());
    var new_page = page + 1;
    $("#current_page").val(new_page);
    pagination (table);
}


/****** function to get data from the table  ******/
function getData(table){
    var Search = $("#Search").val();
    var page = $("#current_page").val();
    var order = $("#order").val();
    if (!Search || Search == "" || Search == null) {
        var source = "select_Brands.php";
    } 
    else {
        var source = "search_Brands.php";
    }
    $.post("includes/" + source, {
        Search: Search,
        page: page,
        order: order
        }, function (data) {

        }
    
    );
}