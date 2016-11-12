<!DOCTYPE html>
<!--
@author: Rostom Sahakian
Date: 11/10/2016
Description: This is the main page which will be acting as traffic controller.
The templates folder will have the header and footer which are static and the body will be dynamic
-->

<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');
include 'includes.php';
include 'templates/header.php';
$body->SearchSchools();
include 'templates/footer.php';
?>

