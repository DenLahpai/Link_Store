<?php 
require_once "../functions.php";
?>
<!-- nav-menu  -->
<div class="nav-menu">
    <!-- nav-menu-left  -->
    <div class="nav-menu-left">
        <div class="hamburger" onclick="Toggle ('.main-menu')">
            <p>&#9776;</p>
        </div>
    </div>
    <!-- end-of-nav-menu-left  -->
    <!-- nav-menu-middle      -->
    <div class="nav-menu-middle">
      
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
        <button class="large-button" onclick="window.location.href='home.html';">Home</button>        
    </div>
    <div>
        <button class="large-button" onclick="window.location.href='logout.php';">Logout</button>
    </div>
</div>
<!-- end of main-menu  -->
<!-- setting-menu  -->
<div class="setting-menu">
    <ul>
        <li>Change Password</li>
        <li>My Info</li>
    </ul>
</div>
<!-- end of setting menu  -->