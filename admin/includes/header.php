<?php 
require_once "../functions.php";
?>
<!-- nav-menu  -->
<div class="nav-menu">
    <!-- nav-menu-left  -->
    <div class="nav-menu-left">
        <div class="hamburger" onclick="Toggle ('.main-menu')">
            <div class="hambruger-content"></div>
            <div class="hamburger-content"></div>
            <div class="hamburger-content"></div>
        </div>
    </div>
    <!-- end-of-nav-menu-left  -->
    <!-- nav-menu-middle      -->
    <div class="nav-menu-middle">
        <? echo $_SESSION['StoresName']; ?>
    </div>
    <!-- end of nav-menu-middle  -->
    <!-- nav-menu-right  -->
    <div class="nav-menu-right" onclick="Toggle('.setting-menu')">
       <div>
           <span class="symbols" id="settings">&#9881;</span>
       </div>
    </div>
    <!-- end of nav-menu-right  -->   
</div>
<!-- end of nav-menu  -->
 <!-- main-menu  -->
 <div class="main-menu">
    <div>
        <button class="large-button">Home</button>        
    </div>
    <div>
        <button class="large-button">Logout</button>
    </div>
</div>
<!-- end of main-menu  -->
<!-- setting-menu  -->
<div class="setting-menu">
    <ul>
        <li><a href="change_password.html">Change Password</a></li>
        <li><a href="my_info.html">My Info</a></li>
    </ul>
</div>
<!-- end of setting menu  -->