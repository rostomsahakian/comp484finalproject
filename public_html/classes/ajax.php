<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

require_once 'autoLoader.php';
$ajax = new body();

if (isset($_GET['userInput']) && !isset($_GET['district'])) {

    $ajax->GetSchoolDistricts($_GET['userInput']);
}
if (isset($_GET['district'])) {
    $ajax->GetSchoolId($_GET['district']);
    $ajax->ShowSchoolNames();
}
if (isset($_POST['uname']) && isset($_POST['pass'])) {
    $ajax->LoginProcess($_POST['uname'], $_POST['pass']);
}
if (isset($_POST['r_pass'])) {
    $ajax->ForgotPasswordProcess($_POST['r_pass']);
}
if (isset($_POST['dosignup'])) {
    $ajax->SignUpProcess($_POST);
}
if(isset($_POST['resetpass'])){
    $ajax->ResetPasswordProcess($_POST);
}
if(isset($_POST['schoold']) && isset($_POST['key'])){
    $ajax->GetSchoolNamesByDistrictID($_POST['schoold']);
}
if(isset($_POST['teacher'])){
    $ajax->DoAddChildrenIntoDatabase($_POST);
}
if(isset($_POST['editschool'])){
     $ajax->GetSchoolNamesByDistrictID($_POST['editschool']);
}
if(isset($_POST['doeditchild'])){
    $ajax->EditChildInformation($_POST);
}