<?php

/*
 * DB INFO
 * Change if the data is different
 */
define("DB_USERNAME", "comp484");
define("DB_PASSWORD", "Comp484FinalProject@");
define("DB_NAME", "comp484"); //change this
define("DB_HOST", "localhost");


define("ABSOLUTH_PATH_CLASSES", "../classes/");
define("ABSOLUTH_PATH_TEMPLATES", "../templates/");
define("ABSOLUTH_PATH_PRIVATE", "../private/");
define("ABSOLUTH_PATH_IMAGES", "../UserData/");
define("DATE_ADDED", date("F j,Y, g:i a"));
$date = new DateTime("now", new DateTimeZone('America/Los_Angeles'));
define("TIME_LA_ZONE", $date->format("H:i:s"));
define("DATE_LA_ZONE", $date->format('m/d/Y'));

