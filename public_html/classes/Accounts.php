<?php
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Accounts
 *
 * @author rostom
 */
class Accounts {

    private $_mysqli;
    private $_db;
    public $districts;
    public $schoolName;
    public $message;
    public $child_info;

    //public $body;

    public function __construct() {
        $this->_db = DBCon::getInstance();
        $this->_mysqli = $this->_db->getConnection();
    }

    public function LoginForm() {
        ?>
        <div class="for_h1">
            <h1>Log in </h1>
        </div>
        <div class="login-main">
            <fieldset>
                <legend><img src="../images/user_w.png" id="dologinform"/>&nbsp;Login</legend>
                <div class="login-form">
                    <form method="post" action='' >
                        <div id="u_lable">
                            <label>Username<span id="required_s">*</span></label>
                        </div>
                        <div id="u_input">
                            <input type="text" name="uname" id="uname" placeholder="Your username"/>
                            <br/><span id="uname_e"></span>
                        </div>
                        <div id="p_lable">
                            <label>Password<span id="required_s">*</span></label>
                        </div>
                        <div id="p_input">
                            <input type="password" name="pass" id="pass" placeholder="Your password"/>
                            <br/><span id="pass_e"></span>
                        </div>
                        <div id="submit_info">
                            <button type="submit" name="dologin" id="dologin"  >login</button>
                            <input type="hidden" name="cmd" value="logmein"/>
                        </div>
                    </form>
                    <div id="login_response"></div>
                </div>
                <div class="forgot-pass">
                    <p>Please enter your username and password and login. If you have lost or forgotten you password please click forgot password.</p>
                    <ul>
                        <li><a href="#resetform" id="f_pass">Forgot Password</a></li>
                        <li><a href="?cmd=signup">Don't Have an account? Sign up!</a></li>

                    </ul>
                </div>
            </fieldset>
            <div class="reset-pass" id="resetform">
                <fieldset>
                    <legend><img src="../images/glass_user_w.png" id="f_p_image"/>&nbsp; Reset Password</legend>
                    <form>
                        <div>
                            <labe>Email</labe>
                        </div>
                        <div>
                            <input type="email" name="r_pass" id="r_pass" placeholder="Enter your email"/>
                            <br/><span id="fp_error"></span>
                        </div>
                        <div>
                            <button type="submit" name="doreset" id="doreset">Send Link</button>
                        </div>
                    </form>
                    <div>
                        <p>Please enter the email address that was registered with this account. We will send a link so you can reset your password.</p>
                    </div>
                </fieldset>
            </div>
        </div>

        <?php
    }

    public function SignUpForm() {
        ?>
        <div class="for_h1">
            <h1>Sign up</h1>
        </div>
        <div class="sign-up-main">
            <fieldset>
                <legend><img src="../images/signup_w.png" id="dologinform"/>&nbsp;Sign Up</legend>
                <form method="post">

                    <div>
                        <h3>Parent's / Guardian's Information</h3>
                        <hr/>
                    </div>
                    <div>
                        <label>Parent/Guardian First Name:<span id="required_s">*</span></label>
                    </div>
                    <div>
                        <input type="text" name="fname" id="fname" placeholder="Enter your first name"/>
                        <span id="fname_e"></span>
                    </div>
                    <div>
                        <label>Parent/Guardian Middle Name:</label>
                    </div>
                    <div>
                        <input type="text" name="mname" id="mname" placeholder="Enter your middle name"/>
                    </div>
                    <div>
                        <label>Parent/Guardian Last Name:<span id="required_s">*</span></label>
                    </div>
                    <div>
                        <input type="text" name="lname" id="lname" placeholder="Enter your last name"/>
                        <span id="lname_e"></span>
                    </div>
                    <div>
                        <label>Parent/Guardian Email<span id="required_s">**</span> (it will be used as your username):</label>
                    </div>
                    <div>
                        <input type="email" name="username" id="username" placeholder="Enter your email address"/>
                        <span id="uname_e"></span>
                    </div>
                    <div>
                        <label>Parent/Guardian relation to child:<span id="required_s">*</span></label>
                    </div>
                    <div>
                        <input type="text" name="relation" id="relation" placeholder="Your relation to the child/children"/>
                        <span id="relation_e"></span>
                    </div>
                    <div>
                        <label>Phone#1:<span id="required_s">*</span></label>
                    </div>
                    <div id="telephone">
                        <input type="tel" name="tel1" id="tel1" placeholder="(555)555-5555"  onkeypress="return isNumberKey(event)"  maxlength="10"/>
                        <span id="tel1_e"></span>
                    </div>
                    <div>
                        <label>Phone#2:</label>
                    </div>
                    <div id="telephone">
                        <input type="tel" name="tel2" id="tel2" placeholder="(555)555-5555"  onkeypress="return isNumberKey(event)" maxlength="10"/>
                    </div>
                    <div>
                        <h3>Password Section</h3>
                        <hr/>
                    </div>
                    <div>
                        <label>Password:<span id="required_s">*</span></label>
                    </div>
                    <div>
                        <input type="password" name="pass1" id="pass1" placeholder="Enter Password"/>
                        <span id="pass1_e"></span>
                    </div>
                    <div>
                        <label>Confirm Password:<span id="required_s">*</span></label>
                    </div>
                    <div>
                        <input type="password" name="pass2" id="pass2" placeholder="Confirm Password"/>
                        <span id="pass2_e"></span>
                    </div>
                    <div>
                        <button type="submit" name="dosignup" id="dosignup" >sign up</button>
                    </div>
                </form>
                <div id="signup_response"></div>
            </fieldset>
        </div>
        <?php
    }

    public function AddChildForm() {
        ?>
        <form method="post" id="addchildform">
            <div class="child-info">
                <p>Please add your children information by filling out the form below. If you have more than one child attending k-12 school, 
                    after finishing this form click "Add Child Information" once more.</p>

                <div>
                    <h3>Child's Information</h3>
                    <hr/>
                </div>
                <div>
                    <label>First Name:<span id="required_s">*</span></label>
                </div>
                <div>
                    <input type="text" name="cfname" id="cfname" placeholder="Child's first name"/>
                    <span id="cfname_e"></span>
                </div>

                <div>
                    <label>Middle Name:</label>
                </div>
                <div>
                    <input type="text" name="cmname" id="cmname" placeholder="Child's middle name"/>
                </div>

                <div>
                    <label>Last Name:<span id="required_s">*</span></label>
                </div>
                <div>
                    <input type="text" name="clname" id="clname" placeholder="Child's last name"/>
                    <span id="clname_e"></span>
                </div>
                <div>
                    <label>Student ID:<span id="required_s">*</span></label>
                </div>
                <div>
                    <input type="text" name="studentid" id="studentid" placeholder="Child's Student ID"/>
                    <span id="studentid_e"></span>
                </div>

                <div>
                    <label>Date of Birth:<span id="required_s">*</span></label>
                </div>
                <div>
                    <input type="tel" name="month" id="month" placeholder="mm" maxlength="2" style="width: 40px" onkeypress="return isNumberKey(event)" onkeyup="TabsAutomonth()" />/
                    <input type="tel" name="day" id="day" placeholder="dd" maxlength="2" style="width: 40px" onkeypress="return isNumberKey(event)" onkeyup="TabsAutoday()"/>/
                    <input type="tel" name="year" id="year" placeholder="yyyy" maxlength="4" style="width: 60px" onkeypress="return isNumberKey(event)" />
                    <span id="dob_e"></span>
                </div>

                <div>
                    <label>Gender:<span id="required_s">*</span></label>
                </div>
                <div>
                    <span>Female</span>
                    <input type="radio" name="gender" id="gender" value="female"/>
                    <span>Male</span>
                    <input type="radio" name="gender" id="gender" value="male"/>
                    <span id="gender_e"></span>
                </div>
                <div>
                    <label>Grade as of <?= date('Y') ?><span id="required_s">*</span></label>
                </div>
                <div>
                    <input type="text" name="last_grade" id="last_grade" placeholder="Current grade as of <?= date('Y') ?>"/>
                    <span id="last_grade_e"></span>
                </div>
                <div>
                    <label>School District:<span id="required_s">*</span></label>
                </div>
                <div id="sdistrict">
                    <select id="schooldist" name="schooldist">
                        <option value="--">--Select District--</option>
                        <?php
                        $districts = $this->GetAllDistricts();
                        foreach ($districts as $district) {
                            ?>
                            <option value="<?= $district['id'] ?>"><?= $district['district'] ?></option>
                            <?php
                        }
                        ?>
                    </select>
                    <span id="schooldist_e"></span>
                </div>
                <div>
                    <label>School (k-12):<span id="required_s">*</span></label>
                </div>
                <div>  
                    <select id="schoolName" name="schoolName">
                        <option value="--">--Select School--</option>
                    </select>
                    <span id="schoolName_e"></span>
                </div>
                <div>
                    <label>Teacher's Name (optional)</label>
                </div>
                <div>
                    <input type="text" name="teacher" id="teacher" placeholder="Teacher's name"/>
                </div>
                <div>
                    <input type="hidden" name="parent_id" id="parent_id" value="<?= isset($_SESSION['user_i']) ? $_SESSION['user_i'] : '' ?>"/>
                    <button type="submit" name="addchild" id="addchild" >Add Child</button>
                </div>
            </div>
        </form>
        <div id="addchild_response"></div>
        <?php
    }

    public function PasswordResetForm() {
        ?>
        <div class="for_h1">
            <h1> Accounts - Troubleshooting - Reset Password</h1> 
        </div>
        <div class="reset-pass-main" id="reset_pass_main">
            <fieldset>
                <legend><img src="../images/glass_user_w.png" id="reset_image"/>&nbsp; Reset Password</legend>
                <form method="post">
                    <div>
                        <labe>New Password:</labe>
                    </div>
                    <div>
                        <input type="password" name="new_pass1" id="new_pass1" placeholder="Enter a new password"/>
                        <br/><span id="newpass1_error"></span>
                    </div>
                    <div>
                        <labe>Confirm New Password:</labe>
                    </div>
                    <div>
                        <input type="password" name="new_pass2" id="new_pass2" placeholder="Enter confirm new password"/>
                        <br/><span id="newpass2_error"></span>
                    </div>
                    <div>
                        <input type="hidden" name="uid" id="uid" value="<?php
                        $uid = base64_decode($_GET['uid']);
                        echo $uid;
                        ?>"/>
                        <input type="hidden" name="sid" id="sid" value="<?= $_GET['sid'] ?>"/>
                        <button type="submit" name="resetpass" id="resetpass">Reset Password</button>
                    </div>
                </form>
                <div>
                    <p>Please enter a new password.</p>
                </div>
                <div id="reset_process"></div>
            </fieldset>
        </div>


        <?php
    }

    public function UserAccountMainSection() {
        ?>
        <div class="for_h1">
            <h1>Account</h1>
        </div>
        <div class="account-wrapper">
            <!--Left side static-->
            <div class="account-left">
                <div id="leftnavigation">
                    <ul>
                        <li><a href="?cmd=account&do=default">Edit Children's Information</a></li>
                        <li><a href="?cmd=account&do=add-child">Add Child Information</a></li>
                        <li><a href="?cmd=account&do=report">Report an Absence</a></li>
                        <li><a href="?cmd=account&do=early-out">Early Sign Out Request</a></li>
                        <li><a href="?cmd=account&do=history">History</a></li>
                        <li><a href="?cmd=account&do=settings">Account Settings</a></li>
                        <li><a href="?cmd=account&do=messages">Messages</a></li>
                        <li id="clock"><a href="#"></a></li>
                    </ul>
                </div>
            </div>
            <!--right side dynamic-->
            <div class="account-right" id="right-side-top">
                <fieldset>
                    <div class="account-right-wrapper">
                        <?php
                        if (isset($_GET['do'])) {
                            $do = $_GET['do'];

                            switch ($do) {
                                case 'add-child':
                                    $this->AddChildForm();
                                    break;
                                case 'report':
                                    $this->ReportAbsenceForm();
                                    break;
                                case 'early-out':
                                    $this->EarlySignOutForm();
                                    break;
                                case 'history':
                                    $this->ShowHistory();
                                    break;
                                case 'settings':
                                    break;
                                case 'messages':
                                    break;
                                case 'edit_child':
                                    $this->DoEditChildInfo($_GET['id']);
                                    break;
                                case 'delete':
                                    $this->AskQuestionFirst();


//                                    if ($this->DeleteChildInfo($_GET['id'])) {
//                                        $this->message = "<p style='color:#25A766'>Deletion successful.</p>";
//                                    }
                                    $this->DefualtStateAccounts();
                                    break;
                                default :
                                    $this->DefualtStateAccounts();
                                    break;
                            }
                        }
                        ?>
                    </div>


                </fieldset>
            </div> 
        </div>

        <?php
    }

    public function DefualtStateAccounts() {
        $selectchild = "SELECT * FROM `comp484_children_info` WHERE `parent_id` = '" . $_SESSION['user_i'] . "'";
        $result = $this->_mysqli->query($selectchild);
        if ($result->num_rows > 0) {
            $child = "";
            if ($result->num_rows === 1) {
                $child = "child";
            } else if ($result->num_rows > 1) {
                $child = "children";
            }
            ?>
            <div class="default-state">
                <div class="default-state-left">

                    <h3>Your Children's Information</h3>
                    <p>You have <?= $result->num_rows . " " . $child ?> registered with our system</p>
                    <?= $this->message; ?>
                    <?php
                    while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
                        $getdistrictname = "SELECT `district` FROM `comp484_schooldistrict` WHERE `id` ='" . $row['district'] . "' ";
                        $getdistrictname_res = $this->_mysqli->query($getdistrictname);
                        if ($getdistrictname_res->num_rows > 0) {
                            while ($district = $getdistrictname_res->fetch_array(MYSQLI_ASSOC)) {
                                $getschoolname = "SELECT `school_name` FROM `comp484_schoolname` WHERE `id` = '" . $row['schoolname'] . "'";
                                $getschoolname_res = $this->_mysqli->query($getschoolname);
                                if ($getschoolname_res->num_rows > 0) {
                                    while ($school = $getschoolname_res->fetch_array(MYSQLI_ASSOC)) {
                                        ?>

                                        <ul id="children_info">
                                            <li id="edit-button">
                                                <a href="?cmd=account&do=edit_child&id=<?= $row['id'] ?>" title="edit"><img src="../images/Penciledit.png"/></a>
                                                &nbsp;
                                                <a href="?cmd=account&do=delete&id=<?= $row['id'] ?>" title="delete"><img src="../images/delete.png"/></a>
                                                &nbsp;
                                                <a href="?cmd=account&do=report" title="report absent" ><img src="../images/absent.png" style="width: 20px;"/></a>
                                                &nbsp;
                                                <a href="?cmd=account&do=early-out" title="early checkout" ><img src="../images/early_chekcout.png" style="width: 20px;"/></a>


                                            </li>
                                            <li><b>Full Name:</b>&nbsp;<?= $row['fname'] . " " . $row['lname'] ?></li>
                                            <li><b>Student ID:</b>&nbsp;<?= $row['student_id'] ?></li>
                                            <li><b>Age:</b> &nbsp;<?= $row['age'] ?> years old</li>
                                            <li><b>School District:</b>&nbsp; <?= $district['district'] ?></li>
                                            <li><b>School Name:</b>&nbsp;<?= $school['school_name'] ?></li>
                                            <li><b>Gender</b>&nbsp;<?= $row['gender'] ?></li>
                                            <li><b>Grade:</b> &nbsp;<?= $row['last_grade'] ?></li>
                                            <li><b>Teacher's Name:</b>&nbsp; <?= $row['teacher'] ?></li>
                                        </ul>
                                        <?php
                                    }
                                }
                            }
                        }
                        ?>





                        <?php
                    }
                    ?>

                </div>
                <div class="default-state-right">

                </div>
            </div>
            <?php
        } else {
            ?>
            <div class="default-state">
                <div class="default-state-left">
                    <h3>Your Children Information</h3>
                    <p>You have not added any child into our system. You must add at least one child. <a href="?cmd=account&do=add-child" id="add-now-link"><img src="../images/add.png" title="add child"/>&nbsp;Add child now</a></p>
                </div>
                <div class="default-state-right">

                </div>
            </div>
            <?php
        }
        ?>

        <?php
    }

    public function GetAllDistricts() {
        $sql = "SELECT * FROM `comp484_schooldistrict` ORDER BY `district` ASC";
        $result = $this->_mysqli->query($sql);
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
                $this->districts[] = $row;
            }
        } else {
            $this->districts[] = '';
        }
        return $this->districts;
    }

    public function GetSchoolNameById($id) {
        $sql = "SELECT * FROM `comp484_schoolname` WHERE `district_id` ='" . $id . "'";
        $result = $this->_mysqli->query($sql);
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
                $this->schoolName[] = $row;
            }
        } else {
            $this->schoolName[] = NULL;
        }
        return $this->schoolName;
    }

    public function AskQuestionFirst() {
        if (isset($_GET['q'])) {
            if ($_GET['q'] == "Yes") {
                if ($this->DeleteChildInfo($_GET['id'])) {
                    $message = "<p style='color:#00B545'>Deletion was successful</p>";
                    $hide = "style='display:none;'";
                    echo $message;
                } else {
                    $message = "<p>Unable to delete.</p>";
                    $hide = "";
                    echo $message;
                }
            } else if ($_GET['q'] == "No") {
                $hide = "style='display:none;'";
            }
        } else {
            
        }
        ?>
        <div class="question" <?= $hide ?>>
            <form method="get">
                <p>Are you sure you want to delete?</p>
                <div>
                    <input type="submit" name="q" value="Yes" id="a_yes"/>
                    <input type="submit" name="q" value="No" id="a_no"/>
                    <input type="hidden" name="do" value="delete"/>
                    <input type="hidden" name="cmd" value="account"/>
                    <input type="hidden" name="id" value="<?= isset($_GET['id']) ? $_GET['id'] : "" ?>"/>
                </div> 
            </form>
        </div>
        <?php
    }

    public function DeleteChildInfo($id) {
        $sql = "DELETE FROM `comp484_children_info` WHERE `id` ='" . $id . "'";
        $result = $this->_mysqli->query($sql);
        if ($result) {
            return true;
        } else {
            return false;
        }
    }

    public function DoEditChildInfo($id) {
        $getdata = "SELECT * FROM `comp484_children_info` WHERE `id` ='" . $id . "'";
        $getdata_res = $this->_mysqli->query($getdata);
        if ($getdata_res->num_rows > 0) {
            while ($row = $getdata_res->fetch_array(MYSQLI_ASSOC)) {
                ?>

                <form method="post" id="edichildform">
                    <div class="child-info" id="hideedit">


                        <div>
                            <h3>Edit <?= $row['fname'] ?>'s Information</h3>
                            <hr/>
                        </div>
                        <div>
                            <label>First Name:<span id="required_s">*</span></label>
                        </div>
                        <div>
                            <input type="text" name="efname" id="efname" value="<?= isset($_POST['efname']) ? $_POST['efname'] : $row['fname'] ?>" placeholder="Child's first name"/>
                            <span id="efname_e"></span>
                        </div>

                        <div>
                            <label>Middle Name:</label>
                        </div>
                        <div>
                            <input type="text" name="emname" id="emname" value="<?= isset($_POST['emname']) ? $_POST['emname'] : $row['mname'] ?>" placeholder="Child's middle name"/>
                        </div>

                        <div>
                            <label>Last Name:<span id="required_s">*</span></label>
                        </div>
                        <div>
                            <input type="text" name="elname" id="elname" value="<?= isset($_POST['elname']) ? $_POST['elname'] : $row['lname'] ?>" placeholder="Child's last name"/>
                            <span id="elname_e"></span>
                        </div>
                        <div>
                            <label>Student ID:<span id="required_s">*</span></label>
                        </div>
                        <div>
                            <input type="text" name="studentid" id="studentid" value="<?= isset($_POST['studentid']) ? $_POST['studentid'] : $row['student_id'] ?>" placeholder="Student ID"/>
                            <span id="studentid_e"></span>
                        </div>
                        <div>
                            <label>Date of Birth:<span id="required_s">*</span></label>
                        </div>
                        <div>
                            <?php
                            $dob = explode("/", $row['dob']);
                            ?>
                            <input type="tel" name="emonth" id="emonth" value="<?= isset($_POST['emoth']) ? $_POST['emonth'] : $dob[0]; ?>" placeholder="mm" maxlength="2" style="width: 40px" onkeypress="return isNumberKey(event)" onkeyup="TabsAutomonth()" />/
                            <input type="tel" name="eday" id="eday" value="<?= isset($_POST['eday']) ? $_POST['eday'] : $dob[1]; ?>" placeholder="dd" maxlength="2" style="width: 40px" onkeypress="return isNumberKey(event)" onkeyup="TabsAutoday()"/>/
                            <input type="tel" name="eyear" id="eyear" value="<?= isset($_POST['eyear']) ? $_POST['eyear'] : $dob[2]; ?>" placeholder="yyyy" maxlength="4" style="width: 60px" onkeypress="return isNumberKey(event)" />
                            <span id="edob_e"></span>
                        </div>

                        <div>
                            <label>Gender:<span id="required_s">*</span></label>
                        </div>
                        <div>
                            <?php
                            $genders = array("Female" => "female", "Male" => "male");
                            foreach ($genders as $g => $gender) {
                                if ($gender === $row['gender']) {
                                    $checked = 'checked="checked"';
                                } else {
                                    $checked = "";
                                }
                                ?>
                                <span><?= $g ?></span>
                                <input type="radio" name="egender" id="egender" value="<?= $gender ?>" <?= $checked ?>/>
                                <?php
                            }
                            ?>
                            <span id="egender_e"></span>
                        </div>
                        <div>
                            <label>Grade as of <?= date('Y') ?><span id="required_s">*</span></label>
                        </div>
                        <div>
                            <input type="text" name="elast_grade" id="elast_grade" value="<?= isset($_POST['elast_grade']) ? $_POST['elast_grade'] : $row['last_grade'] ?>" placeholder="Current grade as of <?= date('Y') ?>"/>
                            <span id="elast_grade_e"></span>
                        </div>
                        <div>
                            <label>School District:<span id="required_s">*</span></label>
                        </div>
                        <div id="sdistrict">

                            <select id="eschooldist" name="eschooldist">

                                <option value="--">--Select District--</option>
                                <?php
                                $districts = $this->GetAllDistricts();
                                foreach ($districts as $district) {
                                    if ($district['id'] == $row['district']) {
                                        $selected = 'selected="selected"';
                                    } else {
                                        $selected = "";
                                    }
                                    ?>
                                    <option value="<?= $district['id'] ?>" <?= $selected ?>><?= $district['district'] ?></option>
                                    <?php
                                }
                                ?>
                            </select>
                            <span id="eschooldist_e"></span>
                        </div>
                        <div>
                            <label>School (k-12):<span id="required_s">*</span></label>
                        </div>
                        <div>  
                            <?php
                            $this->GetSchoolNameById($row['district']);
                            //var_dump($this->schoolName);
                            ?>
                            <select id="eschoolName" name="eschoolName">
                                <?php
                                foreach ($this->schoolName as $school) {
                                    if ($school['id'] == $row['schoolname']) {
                                        $s_selected = 'selected="selected"';
                                    } else {
                                        $s_selected = "";
                                    }
                                    ?>
                                    <option value="<?= $school['id'] ?>" <?= $s_selected ?>><?= $school['school_name'] ?></option>
                                    <?php
                                }
                                ?>
                                <!--                                <option value="--">--Select School--</option>-->
                            </select>
                            <span id="eschoolName_e"></span>
                        </div>
                        <div>
                            <label>Teacher's Name (optional)</label>
                        </div>
                        <div>
                            <input type="text" name="eteacher" id="eteacher" value="<?= isset($_POST['eteacher']) ? $_POST['eteacher'] : $row['teacher']; ?>" placeholder="Teacher's name"/>
                        </div>
                        <div>
                            <input type="hidden" name="age" id="age" value="<?= $row['age'] ?>"/>
                            <input type="hidden" name="child_id" id="child_id" value="<?= $row['id'] ?>"/>
                            <input type="hidden" name="eparent_id" id="parent_id" value="<?= isset($_SESSION['user_i']) ? $_SESSION['user_i'] : $row['parent_id'] ?>"/>
                            <button type="submit" name="doeditchild" id="doeditchild" >Edit Info</button>
                        </div>
                    </div>
                </form>
                <div id="edithild_response"></div>

                <?php
            }
        }
    }

    public function ReportAbsenceForm() {
        ?>
        <form method="post" id="report">     
            <div class="report-absence">
                <h3>Report Absences before 09:00 AM</h3>
                <p>!important Note: In the state of California, school attendance is mandatory for all students ages six through eighteen. 
                    California State Law says that a child is absent if he/she is ill or if there is a death in the immediate family (1-3 day limit). 
                    All other absences are unexcused. Any tardy over 30 minutes, except for medical reasons, is also unexcused. 
                    If your child has three unexcused absences or tardies, he/she will be considered truant (policy on truancy, visit the Student Services Department webpage). 
                    Students who continue to have excessive absences, tardies, or truancies will be referred to the District School Attendance Review Board. </p>
                <p>You must report absences before 09:00 am of the school day. Any thing after 09:00 am is considered an unexcused absence and will be reported to principle's office.</p>

                <div>
                    <label>Select the Child that will be absent:</label>
                </div>
                <div>
                    <?php
                    $this->GetAllChildrenInformation($_SESSION['user_i']);
                    ?>
                    <select name="child_name" id="child_name">
                        <option value="--">--Select Child--</option>
                        <?php
                        foreach ($this->child_info as $child) {
                            ?>
                            <option value="<?= $child['id'] ?>"><?= $child['fname'] . " " . $child['lname'] ?></option>
                            <?php
                        }
                        ?>
                    </select>
                    <br/>
                    <span id="childname_e"></span>
                </div>
                <div>
                    <label>Date(s) of Absence:</label>
                </div>
                <div>
                    <label>From:</label>
                </div>
                <div>
                    <input type="text" id='start_dt' class='datepicker'>
                    <br/>
                    <span id="datefrom_e"></span>

                </div>
                <div>
                    <label>To:</label>
                </div>
                <div>
                    <input type="text" id='another_dt' class='myclass datepicker'>
                    <br/>
                    <span id="dateto_e"></span>
                </div>
                <div>
                    <label>Reason for Absence </label>
                </div>
                <div>
                    <textarea name="reason" id="reason"></textarea>
                    <br/>
                    <span id="reason_e"></span>
                </div>
                <div>
                    <label>Password:</label>
                </div>
                <div>
                    <input type="password" name="ppass" id="ppass" placeholder="Re-enter your accounts password"/>
                    <?= isset($_POST['ppass']) ? $_POST['ppass'] : ""; ?>
                    <br/>
                    <span id="ppass_e"></span>
                </div>
                <div>
                    <input type="hidden" name="parent_id" id="parent_id" value="<?= $_SESSION['user_i'] ?>"/> 
                    <button type="submit" id="report_a" name="report_a">Report Absence</button>
                </div>
            </div>
        </form>
        <div id="report_response"></div>
        <?php
    }

    public function GetAllChildrenInformation($parentid) {
        $sql = "SELECT * FROM `comp484_children_info` WHERE `parent_id` = '" . $parentid . "'";
        $result = $this->_mysqli->query($sql);
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
                $this->child_info[] = $row;
            }
        } else {
            echo "no results";
        }
        return $this->child_info;
    }

    public function EarlySignOutForm() {
        ?>
        <div class="early-sign-out">
            <h3>Early Sign out Request</h3>
            <div>
                <p></p>
            </div>
            <form method="post" id="early_signout">
                <div>
                    <label>Select the Student for Early Checkout</label>
                </div>
                <div>
                    <?php
                    $this->GetAllChildrenInformation($_SESSION['user_i']);
                    ?>
                    <select name="student" id="student">
                        <option value="--">--Select Child--</option>
                        <?php
                        foreach ($this->child_info as $child) {
                            ?>
                            <option value="<?= $child['id'] ?>"><?= $child['fname'] . " " . $child['lname'] ?></option>
                            <?php
                        }
                        ?>
                    </select>
                </div>
                <div>
                    <label>Time of Check out</label>
                </div>
                <div>
                    <select name="hour" id="hour">
                        <?php
                        for ($h = 1; $h < 13; $h++) {
                            ?>
                            <option value="<?php
                            if ($h < 10) {
                                echo "0" . $h;
                            } else {
                                echo $h;
                            }
                            ?>"><?php
                                        if ($h < 10) {
                                            echo "0" . $h;
                                        } else {
                                            echo $h;
                                        }
                                        ?></option>
                            <?php
                        }
                        ?>
                    </select>
                    <select name="min" id="min">
                        <?php
                        for ($i = 0; $i < 60; $i++) {
                            ?>

                            <option value="<?php
                            if ($i < 10) {
                                echo "0" . $i;
                            } else {
                                echo $i;
                            }
                            ?>"><?php
                                        if ($i < 10) {
                                            echo "0" . $i;
                                        } else {
                                            echo $i;
                                        }
                                        ?></option>
                            <?php
                        }
                        ?>

                    </select>
                    <select name="amorpm">
                        <option value="am">AM</option>
                        <option value="pm">PM</option>
                    </select>

                </div>
                <div>
                    <label>Person Picking up the child</label>
                </div>
                <div>
                    <select name="picker" id="picker">
                        <option value="--">--Select--</option>
                        <option value="<?= $_SESSION['user_i'] ?>">Self</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div id="who" style="display: none;">
                    <div>
                        <label>Please Specify (Full Name , Driver's License#, Relation)</label>
                    </div>
                    <div>
                        <textarea id="other_person"></textarea>
                    </div>
                    <div>
                        <label>Upload the Image of the person's driver's license or a Valid Government issued ID</label>
                    </div>
                    <div>
                        <input type="file" name="dl" id="id"/>
                    </div>
                </div>

                <div>
                    <button type="submit" id="doecheck" name="doecheck">Sign out Early</button>
                </div>
            </form>
        </div>
        <?php
    }

    public function ShowHistory() {
        ?>
        <form method="post">
            <div class="history-form">
                <div>
                    <label>Select Child</label>
                </div>
                <div>
                    <?php
                    $this->GetAllChildrenInformation($_SESSION['user_i']);
                    ?>
                    <select name="h_child" id="h_child">
                        <option value="--">--Select Child--</option>
                        <?php
                        foreach ($this->child_info as $child) {
                            ?>
                            <option value="<?= $child['student_id'] ?>"><?= $child['fname'] . " " . $child['lname'] ?></option>
                            <?php
                        }
                        ?>
                    </select>
                </div>
                <div>
                    <label>Select the Year</label>
                </div>
                <div>
                    <select id="h_year" name="h_year">
                        <option value="--">--Select--</option>
                        <option value="2015">2015</option>
                        <option value="2016">2016</option>
                        <option value="2017">2017</option>
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                    </select>
                </div>
            </div>  
        </form>
        <div id="history_response">

        </div>
        <div class="main_bar" style="border-bottom: 1px solid #000000;">
            <ul class="bars">
                <li>
                    <div class="bars_warpper">
                        <div class="inside-shell" id="jan">
                        </div>
                    </div>

                </li>
                <li>
                    <div class="bars_warpper">
                        <div class="inside-shell" id="feb">
                        </div>
                    </div>
                </li>
                <li>
                    <div class="bars_warpper">
                        <div class="inside-shell" id="mar">
                        </div>
                    </div>
                </li>
                <li>
                    <div class="bars_warpper">
                        <div class="inside-shell" id="apr">
                        </div>
                    </div>
                </li>
                <li>
                    <div class="bars_warpper">
                        <div class="inside-shell" id="may">
                        </div>
                    </div>
                </li>
                <li>
                    <div class="bars_warpper">
                        <div class="inside-shell" id="jun">
                        </div>
                    </div>
                </li>
                <li>
                    <div class="bars_warpper">
                        <div class="inside-shell" id="jul">
                        </div>
                    </div>
                </li>
                <li>
                    <div class="bars_warpper">
                        <div class="inside-shell" id="aug">
                        </div>
                    </div>
                </li>
                <li>
                    <div class="bars_warpper">
                        <div class="inside-shell" id="sep">
                        </div>
                    </div>
                </li>
                <li>
                    <div class="bars_warpper">
                        <div class="inside-shell" id="oct">
                        </div>
                    </div>
                </li>
                <li>
                    <div class="bars_warpper">
                        <div class="inside-shell" id="nov">
                        </div>
                    </div>
                </li>
                <li>
                    <div class="bars_warpper">
                        <div class="inside-shell" id="dec">
                        </div>
                    </div>
                </li>

            </ul>
        </div>
        <div class="months">
            <ul>
                <li>Jan</li>
                <li>Feb</li>
                <li>Mar</li>
                <li>Apr</li>
                <li>May</li>
                <li>Jun</li>
                <li>Jul</li>
                <li>Aug</li>
                <li>Sep</li>
                <li>Oct</li>
                <li>Nov</li>
                <li>Dec</li>
            </ul>
        </div>

        <?php
    }

}
