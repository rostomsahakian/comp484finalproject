<?php

/*
  This where we will declare any file (Class/file) needed which will be called in the index.php.
 */


include 'classes/School.php';
include 'classes/Student.php';
include 'classes/Teachers.php';
include 'private/DBCon.php';
include 'private/Defines.php';
include 'private/CreateTables.php';
include 'classes/Navigation.php';
include 'templates/body.php';
/*
 * Load classes in this section 
 */
$tables = new CreateTables();
$students = new Student();
$navigation = new Navigation();
$body = new body();
/*
 * call functions from private/CreateTables Here 
 */
$tables->CreateStudentInfoTable();
$tables->CreateSchoolDistrictTable();
$tables->CreateSchoolstableNames();