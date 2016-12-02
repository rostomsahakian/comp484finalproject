<?php
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Navigation
 *
 * @author rostom
 */
class Navigation {

    public function __construct() {
        
    }

    public function BuildNavigation() {
        /*
         * If session is off show front end menu
         */
        if (!isset($_SESSION['logged_in'])) {
            ?>
            <nav>
                <ul>
                    <li><a href="?cmd=home">Home</a></li>
                    <li><a href="?cmd=news">News</a></li>
                    <li><a href="?cmd=about">About</a></li>

                </ul>
            </nav>
            <div class="breadcrumb">
                <ul>
                    <li><a href="?cmd=home"><img src="../images/home.png" style="width:16px;"/></a></li>
                            <?php
                            if (isset($_GET['cmd'])) {
                                $bc = $_GET['cmd'];

                                switch ($bc) {
                                    case 'about';
                                        ?>
                                <li><img src="../images/arrow-right.png"/></li>
                                <li>About</li>
                                <?php
                                break;
                            case 'news':
                                ?>
                                <li><img src="../images/arrow-right.png"/></li>
                                <li>News</li>
                                <?php
                                break;
                            case 'login':
                                ?>
                                <li><img src="../images/arrow-right.png"/></li>
                                <li><img src="../images/lock_blue.png"/></li>
                                <?php
                                break;
                            case 'signup':
                                ?>
                                <li><img src="../images/arrow-right.png"/></li>
                                <li><img src="../images/user_blue.png"/></li>
                                <?php
                                break;
                            case 'account':
                                if (isset($_GET['do'])) {
                                    $bcdo = $_GET['do'];
                                    switch ($bcdo) {
                                        case 'default':
                                            ?>
                                            <li><img src="../images/arrow-right.png"/></li>
                                            <li><img src="../images/folder-close.png"/></li>
                                            <li><img src="../images/arrow-right.png"/></li>
                                            <li><?= $_SESSION['user_n'] ?></li>

                                            <?php
                                            break;
                                        case 'add-child':
                                            ?>
                                            <li><img src="../images/arrow-right.png"/></li>
                                            <li><a href="?cmd=account&do=default#default"> <img src="../images/user_blue.png"/></a></li>
                                            <li><img src="../images/arrow-right.png"/></li>
                                            <li><img src="../images/plus-sign.png"/></li>

                                            <?php
                                            break;
                                        case 'report':
                                            ?>
                                            <li><img src="../images/arrow-right.png"/></li>
                                            <li><a href="?cmd=account&do=default#default"> <img src="../images/user_blue.png"/></a></li>
                                            <li><img src="../images/arrow-right.png"/></li>
                                            <li><img src="../images/tasks.png"/></li>

                                            <?php
                                            break;
                                        case 'early-out':
                                            ?>
                                            <li><img src="../images/arrow-right.png"/></li>
                                            <li><a href="?cmd=account&do=default#default"> <img src="../images/user_blue.png"/></a></li>
                                            <li><img src="../images/arrow-right.png"/></li>
                                            <li><img src="../images/early-out.png"/></li>

                                            <?php
                                            break;
                                        case 'history':
                                            ?>
                                            <li><img src="../images/arrow-right.png"/></li>
                                            <li><a href="?cmd=account&do=default#default"> <img src="../images/user_blue.png"/></a></li>
                                            <li><img src="../images/arrow-right.png"/></li>
                                            <li><img src="../images/time.png"/></li>

                                            <?php
                                            break;
                                        case 'settings':
                                            if (isset($_GET['req'])) {
                                                $req = $_GET['req'];
                                                switch ($req) {
                                                    case 'cp':
                                                        ?>
                                                        <li><img src="../images/arrow-right.png"/></li>
                                                        <li><a href="?cmd=account&do=default#default"><img src="../images/user_blue.png"/></a></li>
                                                        <li><img src="../images/arrow-right.png"/></li>
                                                        <li><a href="?cmd=account&do=settings#settings"><img src="../images/gears.png"/></a></li>
                                                        <li><img src="../images/arrow-right.png"/></li>
                                                        <li><img src="../images/lock-alt.png"/></li>

                                                        <?php
                                                        break;
                                                    case 'upi':
                                                        ?>

                                                        <li><img src="../images/arrow-right.png"/></li>
                                                        <li><a href="?cmd=account&do=default#default"><img src="../images/user_blue.png"/></a></li>
                                                        <li><img src="../images/arrow-right.png"/></li>
                                                        <li><a href="?cmd=account&do=settings#settings"><img src="../images/gears.png"/></a></li>
                                                        <li><img src="../images/arrow-right.png"/></li>
                                                        <li><img src="../images/edit_blue.png"/></li>

                                                        <?php
                                                        break;
                                                    case 'upload':
                                                        ?>

                                                        <li><img src="../images/arrow-right.png"/></li>
                                                        <li><a href="?cmd=account&do=default#default"><img src="../images/user_blue.png"/></a></li>
                                                        <li><img src="../images/arrow-right.png"/></li>
                                                        <li><a href="?cmd=account&do=settings"><img src="../images/gears.png"/></a></li>
                                                        <li><img src="../images/arrow-right.png"/></li>
                                                        <li><img src="../images/upload.png"/></li>

                                                        <?php
                                                        break;
                                                }
                                            } else {
                                                ?>
                                                <li><img src="../images/arrow-right.png"/></li>
                                                <li><a href="?cmd=account&do=default"><img src="../images/user_blue.png"/></a></li>
                                                <li><img src="../images/arrow-right.png"/></li>
                                                <li><img src="../images/gears.png"/></li>

                                                <?php
                                            }
                                            break;
                                        case 'messages':
                                            ?>
                                            <li><img src="../images/arrow-right.png"/></li>
                                            <li><a href="?cmd=account&do=default"> <li><img src="../images/user_blue.png"/></li></a></li>
                                            <li><img src="../images/arrow-right.png"/></li>
                                            <li><img src="../images/chat.png"/></li>

                                            <?php
                                            break;
                                    }
                                }

                                break;
                        }
                    }
                    ?>

                </ul>
            </div>
            <?php
        }
    }

}
