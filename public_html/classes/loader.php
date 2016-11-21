<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
require_once 'autoLoader.php';

ob_start();

/**
 * Description of loader
 *
 * @author rostom
 */
class loader {

    public $header;
    public $body;
    public $navigation;
    public $tables;
    public $foorter;
    public $accounts;

    //put your code here
    public function __construct() {
        include '../templates/header.php';
        /*
         * Load classes in this section 
         */
        $this->tables = new CreateTables();
        $students = new Student();
        $this->navigation = new Navigation();
        $this->body = new body();
        $this->accounts = new Accounts();


        /*
         * call functions from private/CreateTables Here 
         */
        $this->tables->CreateStudentInfoTable();
        $this->tables->CreateSchoolDistrictTable();
        $this->tables->CreateSchoolstableNames();

        $this->navigation->BuildNavigation();

        if (isset($_GET['cmd']) && $_GET['cmd'] != "") {
            $cmd = $_GET['cmd'];

            switch ($cmd) {
                case 'about':
                    include '../pages/about.html';
                    break;
                case 'home':

                    $this->body->staticContent();
                    $this->body->SearchSchools();
                    break;
                case 'login':
                    $this->accounts->LoginForm();
                    break;
                case 'signup':
                    $this->accounts->SignUpForm();
                    break;
                case 'activate':
                    if (isset($_GET['aid']) && $_SESSION['signup'] == $_GET['aid']) {
                        $this->body->ActiveUser($_GET['uid']);
                    } else {
                        echo "<p style='padding:45px;'>The link has expired and can not be used any longer.</p>";
                    }

                    break;
                case 'reset':
                    if (isset($_GET['sid']) && $this->body->GetUID($_GET['sid'], base64_decode($_GET['uid']))) {
                        $this->accounts->PasswordResetForm();
                    } else {
                        echo "<p style='padding:45px;'>The link has expired and can not be used any longer. Please go to the login page and request a new link.</p>";
                    }
                    break;
                case 'logout':
                    $this->body->Logout("user_in");
                    break;
                case 'account':
                    if (isset($_SESSION['user_in'])) {
                        $this->accounts->UserAccountMainSection();
                    } else {
                        header("Location: ?cmd=home");
                    }
                    break;
                default :
                    include '../pages/404.html';
                    break;
            }
        }
        if (!isset($_GET['cmd'])) {
            $this->body->staticContent();
            $this->body->SearchSchools();
        }

        include '../templates/footer.php';
    }

    public function LoadPage() {
        
    }

}

$loader = new loader();
