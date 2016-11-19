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
            <?php
        }
    }

}
