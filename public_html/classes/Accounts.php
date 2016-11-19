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
                    <label>Last Grade Completed as of <?= date('Y') ?><span id="required_s">*</span></label>
                </div>
                <div>
                    <input type="text" name="last_grade" id="last_grade" placeholder="Last grade completed"/>
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
                        <li><a href="?cmd=account&do=add-child">Add Child Information</a></li>
                        <li><a href="?cmd=account&do=report">Report an Absence</a></li>
                        <li><a href="?cmd=account&do=report">Early Sign Out Request</a></li>
                        <li><a href="?cmd=account&do=history">History</a></li>
                        <li><a href="?cmd=account&do=settings">Account Settings</a></li>
                        <li><a href="?cmd=account&do=messages">Messages</a></li>
                        <li id="clock"><a href="#"></a></li>
                    </ul>
                </div>
            </div>
            <!--right side dynamic-->
            <div class="account-right">
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
                                    break;
                                case 'history':
                                    break;
                                case 'settings':
                                    break;
                                case 'messages':
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
        ?>
        <div class="default-state">
            <div class="default-state-left">
                <h3>Your Children Information</h3>
                <ul>
                    <li>Sam Smith</li>
                    <li>10 years old</li>
                    <li>Los Angeles School District</li>
                    <li>Kennedy Middle School</li>
                    <li>Will graduate 2022</li>
                </ul>
            </div>
            <div class="default-state-right">

            </div>
        </div>
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

}
