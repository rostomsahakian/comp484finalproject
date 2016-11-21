<?php
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of body
 *
 * @author rostom
 */
class body {

    public $schoolDistrict;
    public $flag = 0;
    private $_mysqli;
    private $_db;
    public $id;
    public $schoolNames;
    public $uid;
    public $user_data;

    public function __construct() {
        $this->_db = DBCon::getInstance();
        $this->_mysqli = $this->_db->getConnection();
//        if (isset($_POST['child_name'])) {
//            $this->DoReportAbsenceToSystem($_POST);
//        }
    }

    public function GeneratePage() {
        
    }

    public function SearchSchools() {
        ?>
        <div class="main_wrapper">
            <div class="searchForm">

                <form action='' id="s" method="get" >
                    <div class="district_label">
                        <label>Search By School District</label>
                    </div>
                    <div>
                        <input type="text" id="userInput" placeholder ="Search" onkeyup="process()" name="userInput" autocomplete="off">
                        <input type="button"  name="subdistrict" id="subd" value="Search District"/>
                        <input type="hidden" name="district" id="district" />

                    </div>
                </form>
            </div>

            <div id="filter">

            </div> <!--Div to display drop down suggestion -->

            <?php
            $this->GetSchoolNames();
            ?>
            <form name="search_schools">


            </form>
        </div>


        <?php
    }

    public function GetSchoolNamesByDistrictID($id) {
        $sql = "SELECT * FROM `comp484_schoolname` WHERE `district_id` ='" . $id . "'";
        $result = $this->_mysqli->query($sql);
        if ($result->num_rows > 0) {
            echo '<option value="--">--Select School--</option>';
            while ($row = $result->fetch_array(MYSQLI_ASSOC)) {

                echo '<option value=' . $row['id'] . '>' . $row['school_name'] . '</option>';
            }
        } else {
            echo "<option value='--'>No Results</option>";
        }
    }

    public function GetSchoolDistricts($userInput) {

        $sql = "SELECT * FROM `comp484_schooldistrict` WHERE `district` LIKE '%" . $userInput . "%';";
        $result = $this->_mysqli->query($sql);
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
                $this->schoolDistrict[] = $row['district'];
            }
        } else {
            $this->schoolDistrict[] = '';
        }
        if (!empty($userInput)) {
            /*
             * If true on preg_grep mathces
             */
            if ($found = preg_grep('~' . $userInput . '~i', $this->schoolDistrict)) {
                $i = 0;
                echo "<select id='results' multiple='multiple'  >";
                while ($i < sizeof($this->schoolDistrict)) {
                    if (isset($found[$i])) {
                        echo "<option value='" . $this->schoolDistrict[$i] . "'> " . $this->schoolDistrict[$i] . "</option>";
                    }
                    $i++;
                }
                echo '</select>';
            } else {
                echo "<select id='result' multiple='multiple'>";
                echo "<option>no results</option>";
                echo '</select>';
            }
        }
    }

    public function GetSchoolNames() {
        ?>
        <div class="schoolForm">

            <form name="sForm" id="sForm" method="get">
                <div class="School_label">
                    <label>Search By School</label>
                </div>
            </form>
        </div>

        <div id="sresults">

        </div> <!--Div to display drop down suggestion -->
        <?php
    }

    public function GetSchoolId($value) {
        $sql = "SELECT * FROM `comp484_schooldistrict` WHERE `district` = '" . $value . "'";
        $result = $this->_mysqli->query($sql);
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
                $this->id[] = $row['id'];
            }
        }
    }

    public function SetSchoolsId() {
        return $this->id;
    }

    public function ShowSchoolNames() {
        $ids = $this->SetSchoolsId();

        foreach ($ids as $id) {
            
        }
        $sql = "SELECT * FROM `comp484_schoolname` WHERE `district_id` = '" . $id . "';";
        $result = $this->_mysqli->query($sql);
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
                $this->schoolNames[] = $row['school_name'];
            }
        } else {

            $this->schoolNames[] = 'No results';
        }
        echo "<select id='nresults'>";
        foreach ($this->schoolNames as $schoolName) {

            echo "<option value='" . $schoolName . "'>" . $schoolName . "</option>";
        }
        echo "</select>";
    }

    public function staticContent() {
        ?>
        <div class="main_content">
            <h1>Reporting Absences System</h1>
            <p>The form below will show you the reports of absences in each school. Please type in the district that you are interested in then choose the school from that district.</p>
        </div>
        <?php
    }

    public function LoginProcess($uname, $password) {
        $sql = "SELECT * FROM `comp484_users_info` WHERE `username` = '" . $uname . "' AND `password` = '" . md5($password) . "'";
        //echo $sql;
        $result = $this->_mysqli->query($sql);
        if ($result->num_rows > 0) {
            /*
             * Get userid and check its status
             */
            while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
                $check_status = "SELECT status FROM `comp484_user_status` WHERE `userid` ='" . $row['id'] . "'";
                $check_status_res = $this->_mysqli->query($check_status);
                if ($check_status_res->num_rows > 0) {
                    while ($getstat = $check_status_res->fetch_array(MYSQLI_ASSOC)) {
                        if ($getstat['status'] == 0 || $getstat['status'] == "0") {
                            echo "user no activated";
                        } else {
                            $get_user_data = "SELECT * FROM `comp484_user_name` WHERE `userid` = '" . $row['id'] . "'";
                            $get_user_data_res = $this->_mysqli->query($get_user_data);
                            if ($get_user_data_res->num_rows > 0) {
                                while ($udata = $get_user_data_res->fetch_array(MYSQLI_ASSOC)) {
                                    $_SESSION['user_in'] = uniqid();
                                    $_SESSION['user_e'] = $uname;
                                    $_SESSION['user_i'] = $row['id'];
                                    $_SESSION['user_n'] = $udata['fname'];
                                }
                            }

                            echo "user good";
                        }
                    }
                }
            }
        } else {
            echo "no";
        }
    }

    public function GetUserInformation($id) {
        $get = "SELECT comp484_user_contact.phone1, comp484_user_contact.phone2, comp484_user_name.fname,comp484_user_name.mname,comp484_user_name.lname,comp484_user_relation.relation FROM comp484_user_contact, comp484_user_name, comp484_user_relation "
                . "WHERE comp484_user_name.userid = '" . $id . "' AND comp484_user_name.userid = comp484_user_contact.userid AND comp484_user_name.userid = comp484_user_relation.userid";
        $result = $this->_mysqli->query($get);
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
                $this->user_data[] = $row;
            }
            return $this->user_data;
        }
    }

    public function ForgotPasswordProcess($email) {
        $sql = "SELECT * FROM `comp484_users_info` WHERE `username` = '" . $email . "'";
        //echo $sql;
        $result = $this->_mysqli->query($sql);
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
                $isFrom = "do_not_reply@cde.ca.gov";
                $isEncoded = base64_encode($email);
                $sid = uniqid();
                ///$_SESSION['link'] = $sid;
                $email_message = ""
                        . "<html>"
                        . "<head>"
                        . "<title>California Department of Education - Account Password Recovery</title>"
                        . "</head>"
                        . "<body style='background-color:#fff; color:#000;'>"
                        . "<div style=' padding-right: 15px;padding-left: 15px; margin-right: auto; margin-left: auto; border:1px solid #000; border-radius:5px;'>"
                        . "<div style='margin-bottom:12px;'><img src='http://dev.comp484finalp.webulence.com/images/cde_logo.gif'></div>"
                        . "<br/>"
                        . "<p>Please follow the link below to reset your password.</p>"
                        . "<p><a href='http://dev.comp484finalp.webulence.com/classes/loader.php?cmd=reset&uid=" . $isEncoded . "&url=mailserver&sid=" . $sid . "' title='reset'>http://dev.comp484finalp.webulence.com/classes/loader.php?cmd=reset&uid=" . $isEncoded . "&url=mailserver&sid=" . $sid . "</a></p>"
                        . "<br/>"
                        . "<p>Sincerely,</p>"
                        . "<p>California Department of Education</p>"
                        . "<p>1430 N Street</p>"
                        . "<p>Sacramento, CA 95814 </p>"
                        . "</div>"
                        . "</body>"
                        . "</html>";
                $this->SendEmail($email, "California Department of Education - Password Reset", $email_message, $isFrom);
                $insert_link = "INSERT INTO `comp484_reset_pass` (sid, uid) VALUES ('" . $sid . "', '" . $row['id'] . "')";
                $insert_link_res = $this->_mysqli->query($insert_link);
            }
            echo "found";
        } else {
            echo "no";
        }
    }

    public function SignUpProcess($pinfo) {
        $status1 = false;
        $status2 = false;
        $status3 = false;
        $status4 = false;
        $date_added = date('m/d/Y');
//        foreach ($data as $pinfo) {
        /*
         * First check if the user exists then enter
         */
        $sql_user_check = "SELECT * FROM `comp484_users_info` WHERE `username` ='" . $pinfo['username'] . "'";
        $query_res = $this->_mysqli->query($sql_user_check);
        if ($query_res->num_rows > 0) {
            echo "user exsits";
        } else {

            /*
             * Insert into comp484_users_info
             */
            $insert_info = "INSERT INTO `comp484_users_info` (username, password, added_date) VALUES ('" . $pinfo['username'] . "','" . md5($pinfo['pass1']) . "','" . $date_added . "')";


            $result1 = $this->_mysqli->query($insert_info);

            if ($result1 == "1") {
                $getid = "SELECT `id` FROM `comp484_users_info` WHERE `username` = '" . $pinfo['username'] . "'";

                $getid_res = $this->_mysqli->query($getid);

                if ($getid_res->num_rows == 1) {
                    while ($id = $getid_res->fetch_array(MYSQLI_ASSOC)) {
                        /*
                         * Insert into comp484_user_name
                         */
                        $this->uid = $id['id'];

                        $insert_username = "INSERT INTO `comp484_user_name` (fname, mname,lname,userid) VALUES ('" . $pinfo['fname'] . "','" . $pinfo['mname'] . "','" . $pinfo['lname'] . "','" . $id['id'] . "' )";
                        $result2 = $this->_mysqli->query($insert_username);
                        if ($result2) {
                            $status1 = true;
                        }
                        /*
                         * Insert into comp484_contact 
                         */
                        $insert_contact = "INSERT INTO `comp484_user_contact` (phone1, phone2,userid) VALUES ('" . $pinfo['tel1'] . "','" . $pinfo['tel2'] . "','" . $id['id'] . "')";
                        $result3 = $this->_mysqli->query($insert_contact);
                        if ($result3) {
                            $status2 = true;
                        }
                        /*
                         * Insert into comp484_user_relation
                         */
                        $insert_relation = "INSERT INTO `comp484_user_relation` (relation, userid) VALUES ('" . $pinfo['relation'] . "', '" . $id['id'] . "')";
                        $result4 = $this->_mysqli->query($insert_relation);
                        if ($result4) {
                            $status3 = true;
                        }
                        /*
                         * insert into comp484_user_status
                         */
                        $user_status = "INSERT INTO `comp484_user_status` (userid, role) VALUES ('" . $id['id'] . "', 'parent')";
                        $result5 = $this->_mysqli->query($user_status);
                        if ($result5) {
                            $status4 = true;
                        }
                    }
                }
            }
        }
        $idEncoded = base64_encode($this->uid);
        $email = $pinfo['username'];
        $isFrom = "do_not_reply@cde.ca.gov";
        $aid = uniqid();
        $_SESSION['signup'] = $aid;
        if ($status1 && $status2 && $status3 && $status4) {
            $email_message = ""
                    . "<html>"
                    . "<head>"
                    . "<title>California Department of Education - Account Activation</title>"
                    . "</head>"
                    . "<body style='background-color:#fff; color:#000;'>"
                    . "<div style=' padding-right: 15px;padding-left: 15px; margin-right: auto; margin-left: auto; border:1px solid #000; border-radius:5px;'>"
                    . "<div style='margin-bottom:12px;'><img src='http://dev.comp484finalp.webulence.com/images/cde_logo.gif'></div>"
                    . "<h4>Dear {$pinfo['fname']},</h4>"
                    . "<br/>"
                    . "<p>Thank you for signing up with our RAS (Reporting Absences System).</p>"
                    . "<p>Every minute of a child’s time at school is important. Children who are absent for even one day, or who arrive later than their classmates, "
                    . "miss valuable instruction time and can easily fall behind in school. "
                    . "They also miss important socialization time and fun with their peers. </p>"
                    . "<p>In the state of California, school attendance is mandatory for all students ages six through eighteen. "
                    . "California State Law says that a child is absent if he/she is ill or if there is a death in the immediate family (1-3 day limit). "
                    . "All other absences are unexcused. Any tardy over 30 minutes, except for medical reasons, is also unexcused. "
                    . "If your child has three unexcused absences or tardies, he/she will be considered truant (policy on truancy, visit the Student Services Department webpage). "
                    . "Students who continue to have excessive absences, tardies, or truancies will be referred to the District School Attendance Review Board. </p>"
                    . "<p>In order to provide the best education possible for school age children, it is imperative that students have regular attendance. "
                    . "This will not only help children gain the most their school experience, but it will also help the school district financially. "
                    . "There is a financial impact on district revenues from the state every day a student is absent. When a student is absent from school it "
                    . "results in a loss of funding for our district. The State of California does not reimburse school districts for days students </p>"
                    . "<p>In order to login to our system you must activate your account. Please follow the link below to complete the registeration process.</p>"
                    . "<p><a href='http://dev.comp484finalp.webulence.com/classes/loader.php?cmd=activate&uid=" . $idEncoded . "&url=mail&aid=" . $aid . "' title='activate'>http://dev.comp484finalp.webulence.com/classes/loader.php?cmd=activate&uid=" . $idEncoded . "&url=mail</a></p>"
                    . "<br/>"
                    . "<p>Sincerely,</p>"
                    . "<p>California Department of Education</p>"
                    . "<p>1430 N Street</p>"
                    . "<p>Sacramento, CA 95814 </p>"
                    . "</div>"
                    . "</body>"
                    . "</html>";
            $this->SendEmail($email, "California Department of Education - Account Activation", $email_message, $isFrom);
            echo "data entered successfully";
        }
    }

    public function SendEmail($to, $mail_subject, $message, $from) {

        $subject = $mail_subject;
        $headers = "MIME-Version: 1.0 \r\n";
        $headers .= "Content-type: text/html; charset=iso-8859-1 \r\n";
        $headers .= "From: $from \r\n";
        $headers .= "Reply-To: $to \r\n";
        mail($to, $subject, $message, $headers);
    }

    public function ActiveUser($uid) {
        $id = base64_decode($uid);

        $activate = "UPDATE `comp484_user_status` SET `status` = '1' WHERE `userid` = '" . $id . "'";
        $result = $this->_mysqli->query($activate);
        if ($result) {
            ?>
            <div class="for_h1">
                <h1>Registration</h1>
                <p>You account has been activated. You can login and use the RAS system.</p>
            </div>
            <?php
            unset($_SESSION['signup']);
        } else {
            ?>
            <div class="for_h1">
                <h1>Registration</h1>
                <p>there was an error try again. If the error continues please email our  <a href="mailto:rostom.sahakian@gmail.com">support team</a>.</p>
            </div>
            <?php
        }
    }

    public function ResetPasswordProcess($data) {

        $changePassword = "UPDATE `comp484_users_info` SET `password` = '" . md5($data['new_pass1']) . "' WHERE `username` ='" . trim($data['uid']) . "'";
        $result = $this->_mysqli->query($changePassword);
        if ($result) {
            //unset($_SESSION['link']);
            $getuid = "SELECT `id` FROM `comp484_users_info` WHERE `username` ='" . $data['uid'] . "'";
            $getuid_res = $this->_mysqli->query($getuid);
            if ($getuid_res->num_rows > 0) {
                while ($row = $getuid_res->fetch_array(MYSQLI_ASSOC)) {
                    $expire_link = "DELETE FROM `comp484_reset_pass` WHERE `sid` = '" . $data['sid'] . "' AND `uid` = '" . $row['id'] . "' ";
                    $expire_link_res = $this->_mysqli->query($expire_link);
                }
            }
            $isFrom = "do_not_reply@cde.ca.gov";
            $date_changed = date('l jS \of F Y h:i:s A');
            $email_message = ""
                    . "<html>"
                    . "<head>"
                    . "<title>California Department of Education - Account Password Recovery</title>"
                    . "</head>"
                    . "<body style='background-color:#fff; color:#000;'>"
                    . "<div style=' padding-right: 15px;padding-left: 15px; margin-right: auto; margin-left: auto; border:1px solid #000; border-radius:5px;'>"
                    . "<div style='margin-bottom:12px;'><img src='http://dev.comp484finalp.webulence.com/images/cde_logo.gif'></div>"
                    . "<br/>"
                    . "<p>Your password was reset on {$date_changed}.</p>"
                    . "<br/>"
                    . "<p>Sincerely,</p>"
                    . "<p>California Department of Education</p>"
                    . "<p>1430 N Street</p>"
                    . "<p>Sacramento, CA 95814 </p>"
                    . "</div>"
                    . "</body>"
                    . "</html>";
            $this->SendEmail($data['uid'], "California Department of Education - Password Reset", $email_message, $isFrom);
            echo "password updated";
        } else {
            echo "unable to locate user";
        }
    }

    public function GetUID($sid, $uid) {
        $sql = "SELECT * FROM `comp484_users_info` WHERE `username` = '" . $uid . "'";
        $result = $this->_mysqli->query($sql);
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_array(MYSQLI_ASSOC)) {

                $find_link = "SELECT * FROM `comp484_reset_pass` WHERE `sid` = '" . $sid . "' AND `uid` = '" . $row['id'] . "'";
                $find_link_res = $this->_mysqli->query($find_link);
                if ($find_link_res->num_rows > 0) {
                    return true;
                } else {
                    return false;
                }
            }
        } else {
            echo "not found";
        }
    }

    public function Logout($session_name) {
        unset($_SESSION[$session_name]);
        header("Location: ?cmd=home");
    }

    public function DoAddChildrenIntoDatabase($childData) {

        $fname = trim($childData['cfname']);
        $mname = $childData['cmname'];
        $lname = trim($childData['clname']);
        $studentID = $childData['studentid'];
        $month = $childData['month'];
        $day = $childData['day'];
        $year = $childData['year'];
        $gender = $childData['gender'];
        $lastGrade = $childData['last_grade'];
        $schoolDistrict = $childData['dist'];
        $schoolName = $childData['school'];
        $teacher = $childData['teacher'];
        $parent_id = $childData['parent_id'];
        $dob = $month . "/" . $day . "/" . $year;
        $birthDate = explode("/", $dob);
        //get age from date or birthdate
        $age = (date("md", date("U", mktime(0, 0, 0, $birthDate[0], $birthDate[1], $birthDate[2]))) > date("md") ? ((date("Y") - $birthDate[2]) - 1) : (date("Y") - $birthDate[2]));
        /*
         * First let's check if the child is not already in the system
         */
        $checkChild = "SELECT * FROM `comp484_children_info` WHERE `fname` = '" . $fname . "' AND `lname` = '" . $lname . "' AND `parent_id` = '" . $parent_id . "'";
        $checkChild_res = $this->_mysqli->query($checkChild);
        if ($checkChild_res->num_rows > 0) {
            echo "no";
        } else {
            $insert = "INSERT INTO `comp484_children_info` (fname, mname,lname,student_id,dob,age, gender,last_grade, district, schoolname, teacher, parent_id, date_added)"
                    . " VALUES "
                    . "("
                    . "'" . $fname . "', "
                    . "'" . $mname . "', "
                    . "'" . $lname . "', "
                    . "'" . $studentID . "', "
                    . "'" . $dob . "', "
                    . "'" . $age . "', "
                    . "'" . $gender . "',"
                    . "'" . $lastGrade . "',  "
                    . "'" . $schoolDistrict . "', "
                    . "'" . $schoolName . "', "
                    . "'" . $teacher . "', "
                    . "'" . $parent_id . "', "
                    . "'" . date("m/d/Y") . "'"
                    . ")";
//            echo "<br/>";
            echo $insert;
            $result = $this->_mysqli->query($insert);
            if ($result) {
                echo "user added";
            } else {
                echo "unable to add";
            }
        }
    }

    public function EditChildInformation($data) {
        $things_to_update = array();
        $sql = "SELECT * FROM `comp484_children_info` WHERE `id` = '" . $data['child_id'] . "'";
        $result = $this->_mysqli->query($sql);

        if ($result->num_rows > 0) {
            $edit_data = array();
            while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
                if ($data['efname'] != $row['fname']) {
                    $edit_data['fname'] = $data['efname'];
                }
                if ($data['emname'] != $row['mname']) {
                    $edit_data['mname'] = $data['emname'];
                }
                if ($data['elname'] != $row['lname']) {
                    $edit_data['lname'] = $data['elname'];
                }
                if ($data['studentid'] != $row['student_id']) {
                    $edit_data['student_id'] = $data['studentid'];
                }
                $dob = $data['emonth'] . "/" . $data['eday'] . "/" . $data['eyear'];
                if ($dob != $row['dob']) {
                    $edit_data['dob'] = $dob;
                }
                $birthDate = explode("/", $dob);
                //get age from date or birthdate
                $age = (date("md", date("U", mktime(0, 0, 0, $birthDate[0], $birthDate[1], $birthDate[2]))) > date("md") ? ((date("Y") - $birthDate[2]) - 1) : (date("Y") - $birthDate[2]));
                if ($age != $row['age']) {
                    $edit_data['age'] = $age;
                }
                if ($data['egender'] != $row['gender']) {
                    $edit_data['gender'] = $data['egender'];
                }
                if ($data['elast_grade'] != $row['last_grade']) {
                    $edit_data['last_grade'] = $data['elast_grade'];
                }
                if ($data['eschooldist'] != $row['district']) {
                    $edit_data['district'] = $data['eschooldist'];
                }
                if ($data['eschoolName'] != $row['schoolname']) {
                    $edit_data['schoolname'] = $data['eschoolName'];
                }
                if ($data['eteacher'] != $row['teacher']) {
                    $edit_data['teacher'] = $data['eteacher'];
                }
            }
        }
        array_push($things_to_update, $edit_data);
        //var_dump($things_to_update);
        foreach ($things_to_update as $field => $value) {
            if (!empty($value)) {
                foreach ($value as $f => $v) {

                    $update_data = "UPDATE `comp484_children_info` SET `" . $f . "` = '" . $v . "' WHERE `id` = '" . $data['child_id'] . "'";
                    $update_data_res = $this->_mysqli->query($update_data);
                    if ($update_data_res) {

                        echo "data updated";
                    } else {
                        echo "error";
                    }
                }
            } else {
                echo "nothing to update.";
            }
        }
    }

    public function DoReportAbsenceToSystem($data) {
        $getChildInfo = "SELECT * FROM `comp484_children_info` WHERE `id` ='" . $data['child_name'] . "'";
        $getChildInfo_res = $this->_mysqli->query($getChildInfo);
        if ($getChildInfo_res->num_rows > 0) {

            /*
             * needed
             * 1. studentID (db)
             * 2. parent_id (db)
             * 3. from ($data)
             * 4. to ($data)
             * 5. reason ($data)
             * 6. time of reporting ($data)
             * 7. date_reported ($data)
             * 8. school dist (db)
             * 9. school (db)
             * 10. teahcer (db)
             */
            /*
             * Check password status
             */

            while ($row = $getChildInfo_res->fetch_array(MYSQLI_ASSOC)) {
                $checkPass = "SELECT * FROM `comp484_users_info` WHERE `id` = '" . $data['parent_id'] . "' AND `password` ='" . md5(trim($data['pass'])) . "'";
                $checkPass_res = $this->_mysqli->query($checkPass);

                if ($checkPass_res->num_rows > 0) {
                    $date_reported = DATE_LA_ZONE;
                    $time_repored = TIME_LA_ZONE;
                    $insert_report = "INSERT INTO `comp484_report_absence` (student_id, parent_id, absent_from, absent_to, reason, date_reported, time_reported, school_district, school, teacher)"
                            . " VALUES "
                            . "("
                            . "'" . $row['student_id'] . "', "
                            . "'" . $data['parent_id'] . "', "
                            . "'" . $data['dateFrom'] . "', "
                            . "'" . $data['dateTo'] . "', "
                            . "'" . $data['reason'] . "', "
                            . "'" . $date_reported . "', "
                            . "'" . $time_repored . "', "
                            . "'" . $row['district'] . "', "
                            . "'" . $row['schoolname'] . "', "
                            . "'" . $row['teacher'] . "'"
                            . ")";
                    $insert_report_res = $this->_mysqli->query($insert_report);
                    if ($insert_report_res) {
                        echo "report added";
                    } else {
                        echo "unable to add";
                    }
                } else {
                    echo "wrong password";
                }
            }
        }
    }

}
