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

    //put your code here


    public function __construct() {
        ;
    }

    public function BuildNavigation() {
        /*
         * If session is off show front end menu
         */
        if (!isset($_SESSION['logged_in'])) {
            ?>
            <nav>
                <ul>
                    <li><a href="home.html">Home</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="news.html">News</a></li>
                    <li><input type="text" name="search" id="search"/></li>
                </ul>
            </nav>
            <?php
        }
    }

}
