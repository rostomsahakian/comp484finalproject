<!DOCTYPE html>
<!--
@author: Rostom Sahakian
Date: 11/10/2016
Description: This is the main page which will be acting as traffic controller.
The templates folder will have the header and footer which are static and the body will be dynamic
-->

<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Comp484</title>
        <link href="../css/navstyles.css" rel="stylesheet"/>
        <link href="../css/styles.css" rel="stylesheet"/>
        <link href="../css/media.css" rel="stylesheet"/>
        <script src='../js/allrights.js' type='text/javascript'></script>


        <?php
        if ($_REQUEST == NULL || $_GET['cmd'] == "home") {
            ?>
        <script type="text/javascript" src="../js/youtubeVideo.js"></script>

            <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
            <?php
        } else if (isset($_GET['cmd'])) {

            $manCmd = $_GET['cmd'];

            switch ($manCmd) {
                case 'login':
                    ?>


                    <script src='../js/main.js' type='text/javascript'></script>
                    <script src='../js/login.js' type='text/javascript'></script>
                    <script src='../js/forgotpass.js' type='text/javascript'></script>
                    <?php
                    break;
                case 'signup':
                    ?>
                    <script src='../js/signup.js' type='text/javascript'></script>

                    <?php
                    break;
                case 'reset':
                    ?>
                    <script src='../js/resetpass.js' type='text/javascript'></script>

                    <?php
                    break;
                case 'news':
                    ?>
                    <script type="text/javascript" src="https://www.google.com/jsapi"></script>
                    <script type="text/javascript">
                        google.load("feeds", "1") //Load Google Ajax Feed API (version 1)
                    </script>
                    <?php
                    break;
                case 'account':
                    ?>
                    <script src='../js/clock.js' type='text/javascript'></script>
                    <?php
                    if (isset($_GET['do'])) {
                        $innerCommand = $_GET['do'];
                        switch ($innerCommand) {
                            case 'add-child':
                                ?>
                                <script src='../js/getschool.js' type='text/javascript'></script>
                                <script src='../js/addchildren.js' type='text/javascript'></script>

                                <?php
                                break;
                            case 'edit_child':
                                ?>
                                <script src='../js/getschoolstoedit.js' type='text/javascript'></script>
                                <script src='../js/editchildinfo.js' type='text/javascript'></script>
                                <?php
                                break;
                            case 'report':
                                ?>
                                <link rel="stylesheet" type="text/css" href="../js/datepicker/datepicker.css" /> 
                                <script type="text/javascript" src="../js/datepicker/datepicker.js"></script>
                                <script type="text/javascript" src="../js/ReportAbsence.js"></script>


                                <?php
                                break;
                            case 'early-out':
                                ?>
                                <script type="text/javascript" src="../js/EarlyChekcout.js"></script>
                                <?php
                                break;
                            case 'history':
                                ?>
                                <script type="text/javascript" src="../js/history.js"></script>

                                <?php
                                break;
                        }
                    }
                    ?>



                    <?php
                    break;
            }
        }
        ?>




    </head>
    <body>
        <div class="wrapper">
            <div class="header">
                <div class="left">
                    <a href="http://www.cde.ca.gov" target="_blank"><img src="../images/cde_logo.gif" alt="California Department of Education logo" title="logo"/></a>  
                </div>

                <div class="right">
                    <form>
                        <input type="text" id="header_search" name="header_search" placeholder="search this site"/>
                        <button type="submit" id="header_sub" name="header_sub">Search</button>
                    </form>
                </div>
            </div>
            <div class="accounts">
                <?php
                if (isset($_SESSION['user_in'])) {
//                    //$userinfo = new body();
//                    $data = body::GetUserInformation($_SESSION['user_i']);
//                    //var_dump($userinfo);
//                    foreach ($data as $uinfo) {

                    $username = $_SESSION['user_n'];
//                    }
                }
                ?>
                <ul>
                    <li><a href="?cmd=<?php
                        $link = isset($_SESSION['user_in']) ? "account" : "login";
                        echo $link . "&do=default";
                        ?>"><img src="../images/user.png" id="login_image"/>&nbsp;<?php
                           $menu = isset($_SESSION['user_in']) ? $username : "Login";
                           echo $menu
                           ?></a>&nbsp;|</li>
                    <li ><a href="?cmd=<?php
                        $link2 = isset($_SESSION['user_in']) ? "logout" : "signup";
                        echo $link2;
                        ?>" id="last_li"><img src="../images/<?= isset($_SESSION['user_in']) ? "logout" : "signup" ?>.png" id="login_image"/>&nbsp;<?php
                            $menu2 = isset($_SESSION['user_in']) ? "Logout" : "Signup";
                            echo $menu2
                            ?></a></li>
                </ul>
            </div>

