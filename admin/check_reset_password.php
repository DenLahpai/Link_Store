<?php
require_once "functions.php";

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Reset Password</title>
</head>
<body>
    <!-- wrapper -->
    <div class="wrapper">
        <header></header>
        <!-- main-content -->
        <div class="main-content">
            <section id="page_title">
                <h1>Reset Password</h1>
            </section>
            <section id="Dob-check">
                <!-- dob-check-form -->
                <div class="form">
                    <form action="#" method="post">
                        <div>
                            Please enter your Date of Birth:
                        </div>
                        <div>
                            <input type="date" id="DOB">
                        </div>
                        <div>
                            <button type="button" class="medium-button">Submit</button>
                        </div>
                    </form>
                </div>
                <!-- end of dob-check-form -->
            </section>
            <section id="response"></section>
        </div>
        <!-- end of main-content -->
    </div>
    <!-- end of wrapper -->
</body>
<script src="scripts/jquery.js"></script>
<script src="scripts/scripts.js"></script>
<script>
$(document).ready(function () {
    //function to get head
    $.get("includes/head.html", function (data) {
        $("head").prepend(data);
    });

    // function to include footer
    $.get("includes/footer.php", function (data) {
        $("footer").prepend(data);
    }); 

});
</script>
</html>