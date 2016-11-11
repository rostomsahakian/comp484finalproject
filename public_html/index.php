<!DOCTYPE html>
<!--
@author: Rostom Sahakian
Date: 11/10/2016
Description: This is the main page which will be acting as traffic controller.
The templates folder will have the header and footer which are static and the body will be dynamic
-->

<?php
include 'templates/header.php';
include 'includes.php';



error_reporting(E_ALL);
ini_set('display_errors', '1');

// check for session if session exists then go to beck-end else remain of front-end
///echo "trafic control";
//$file = new body();

$pt = array("m_fname" => "rosie");
$students->StudentParent($pt);
include 'templates/footer.php';
?>

