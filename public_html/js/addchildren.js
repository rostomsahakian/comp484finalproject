


window.addEventListener("load", AddChild, false);
function AddChild() {

    document.getElementById('addchild').onclick = AddChildRunValidations;
    document.getElementById("addchild").addEventListener("click", function (event) {
        event.preventDefault()
    });
}

/**********************************************************************
 * Making sure that the phone number is only number and auto tab
 **********************************************************************
 */
function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode != 46 && charCode > 31
            && (charCode < 48 || charCode > 57)) {
        return false;
    }


    return true;
}


function TabsAutomonth() {
//if on key up it has reached the max length the move to next field
    var first = document.getElementById("month").maxLength;
    var m = document.getElementById("month").value;
    if (m.length === first) {

        document.getElementById("day").focus();
        //alert(m.length);
    }
}

function TabsAutoday() {
//if on key up it has reached the max length the move to next field
    var second = document.getElementById("day").maxLength;
    var d = document.getElementById("day").value;
    if (d.length === second) {
        document.getElementById("year").focus();
    }
}
/*******************************************************************************
 * ADD Child AddingChildProcess
 * *****************************************************************************
 */

function AddChildRunValidations() {

    if (AddChildDoCheckFields() === false) {
        console.log("false");
    } else if (addchildcheckfname() === false) {
    } else if (addchildchecklname() === false) {
    } else if (addchildcheckstudentID() === false) {
    } else if (addchildcheckmonth() === false) {
    } else if (addchildcheckday() === false) {
    } else if (addchildcheckyear() === false) {
    } else if (addchildcheckgender() === false) {
    } else if (addchildcheckgrade() === false) {
    } else if (addchildcheckdistrict() === false) {
    } else if (addchildcheckschool() === false) {
    } else {

        try {

            AddingChildProcess();
        } catch (e) {
            alert(e);
        }

    }
}





var AddChildXmlHttp = createAddChildXmlHttpRequestObject();
// Create XML Http Request object  

function createAddChildXmlHttpRequestObject() {
    var AddChildXmlHttp;
    // For Internet Explorer   
    if (window.ActiveXObject) {
        try {
            AddChildXmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {
            alert("can't create IE object");
            AddChildXmlHttp = false;
        }
    } else {
        //For Google Chrome and other  
        try {
            AddChildXmlHttp = new XMLHttpRequest();
        } catch (e) {
            AddChildXmlHttp = false;
        }
    }
    if (!AddChildXmlHttp) {
        alert("can't create that object!");
    } else {
        return AddChildXmlHttp;
    }
}

//function which gets triggered on the event onkeyup in search box  
function AddingChildProcess() {
    if (AddChildXmlHttp.readyState == 4 || AddChildXmlHttp.readyState == 0) {
//filter = document.getElementById('filter').style.display = "block";
//Store the keyword form the search box in a variable  
        var childfname = encodeURIComponent(document.getElementById("cfname").value);
        var childmname = encodeURIComponent(document.getElementById("cmname").value);
        var childlname = encodeURIComponent(document.getElementById("clname").value);
        var childstudentid = encodeURIComponent(document.getElementById("studentid").value);
        var childDOBMonth = encodeURIComponent(document.getElementById("month").value);
        var childDOBDay = encodeURIComponent(document.getElementById("day").value);
        var childDOBYear = encodeURIComponent(document.getElementById("year").value);
        var parent_id = encodeURIComponent(document.getElementById("parent_id").value);
        var Gender = document.getElementsByName('gender');
        for (var i = 0, length = Gender.length; i < length; i++) {
            if (Gender[i].checked) {
// do whatever you want with the checked radio

                var childGender = encodeURIComponent(Gender[i].value);
                // only one radio can be logically checked, don't check the rest
                break;
            }
        }
        var childLastGrade = encodeURIComponent(document.getElementById("last_grade").value);
        var childSchoolDistrict = document.getElementById("schooldist");
        var district = encodeURIComponent(childSchoolDistrict.options[childSchoolDistrict.selectedIndex].value);
        var childSchoolName = document.getElementById("schoolName");
        var school = encodeURIComponent(childSchoolName.options[childSchoolName.selectedIndex].value);
        var childTeacher = encodeURIComponent(document.getElementById("teacher").value);
        var submitb = encodeURIComponent(document.getElementById('addchild').value);
        /*Send the request, make sure you give 3 parameters  
         1-Method, 2- url, 3- true or false   
         */
        AddChildXmlHttp.open("POST", "ajax.php", true);
        AddChildXmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        AddChildXmlHttp.onreadystatechange = AddChildHandleAjaxResponse;
        AddChildXmlHttp.send("cfname=" + childfname +
                "&cmname=" + childmname + "&clname=" + childlname + "&studentid=" + childstudentid + "&month=" + childDOBMonth + "&day=" + childDOBDay + "&year=" + childDOBYear + "&gender=" + childGender +
                "&last_grade=" + childLastGrade + "&dist=" + district + "&school=" + school +
                "&teacher=" + childTeacher + "&parent_id=" + parent_id + "&addchild=" + submitb);
    } else {
    }
}


function AddChildHandleAjaxResponse() {
    if (AddChildXmlHttp.readyState == 4 || AddChildXmlHttp.readyState == 0) {
        if (AddChildXmlHttp.status == 200) {
            xmlResponse = AddChildXmlHttp.responseText;
            var fname = encodeURIComponent(document.getElementById("cfname").value);
            var lname = encodeURIComponent(document.getElementById("clname").value);
            if (xmlResponse === "no") {
                document.getElementById("addchild_response").innerHTML = "<p style='color:#E12B2D;'>Unable to add</p>";
            } else if (xmlResponse == "unable to add") {
                document.getElementById("addchild_response").innerHTML = "<p style='color:#E12B2D;'>Error. We are unable to add your son to the system. If the error continues please contact our <a href='mailto:rostom.sahakian@gmail.com'>support team</p>.";
            } else {
                console.log(xmlResponse);
                 window.location.hash = "right-side-top";
                document.getElementById("addchild_response").innerHTML = "<p style='color:#6DA815;' id='added'>" + fname + " " + lname + " was added as your child.</p><p>If you have more children that you need to add, please click here <a href='?cmd=account&do=add-child'>Add more</a></p>";
                document.getElementById('addchildform').style.display = "none";
               
//                setTimeout(function () {
//                    window.location.href = "?cmd=account&do=default";
//                }, 1000);
            }

        } else {
            alert("something went wrong");
        }
    }
}

function AddChildDoCheckFields() {
    var status = false;
    var checkchildfname = document.getElementById("cfname").value;
    var checkchildlname = document.getElementById("clname").value;
    var checkchildstudentID = document.getElementById("studentid").value;

    var checkchildDOBMonth = document.getElementById("month").value;
    var checkchildDOBDay = document.getElementById("day").value;
    var checkchildDOBYear = document.getElementById("year").value;
    var checkGender = document.getElementsByName('gender');
    for (var i = 0, length = checkGender.length; i < length; i++) {
        if (checkGender[i].checked) {
            var checkchildGender = checkGender[i].value;
            break;
        } else {
            var checkchildGender = "";
        }

    }
    // console.log("gender=" + checkchildGender);
    var checkchildLastGrade = document.getElementById("last_grade").value;
    var checkchildSchoolDistrict = document.getElementById("schooldist");
    if (typeof checkchildSchoolDistrict != 'undefined') {
        var checkdistrict = checkchildSchoolDistrict.options[checkchildSchoolDistrict.selectedIndex].value;
    }
    var checkchildSchoolName = document.getElementById("schoolName");
    var checkschool = checkchildSchoolName.options[checkchildSchoolName.selectedIndex].value;
    if ((checkchildfname === "") && (checkchildlname === "") && (checkchildstudentID === "") && (checkchildDOBMonth === "") && (checkchildDOBDay === "") && (checkchildDOBYear === "")
            && (checkchildLastGrade === "") && (checkdistrict === "--") && (checkschool === "--") && (checkchildGender === "")) {
// 
        document.getElementById('cfname_e').innerHTML = "Child's first name is required!";
        document.getElementById('clname_e').innerHTML = "Child's last name is required";
        document.getElementById('studentid_e').innerHTML = "Student ID is required";
        document.getElementById('dob_e').innerHTML = "Child's date of birth is required";
        document.getElementById('gender_e').innerHTML = "Child's gender is required";
        document.getElementById('last_grade_e').innerHTML = "Last completed grade is required";
        document.getElementById('schooldist_e').innerHTML = "Please select your school district";
        document.getElementById('schoolName_e').innerHTML = "Please first select school district, then school name";

        document.getElementById('cfname_e').style.color = "#E12B2D";
        document.getElementById('clname_e').style.color = "#E12B2D";
        document.getElementById('studentid_e').style.color = "#E12B2D";
        document.getElementById('dob_e').style.color = "#E12B2D";
        document.getElementById('gender_e').style.color = "#E12B2D";
        document.getElementById('last_grade_e').style.color = "#E12B2D";
        document.getElementById('schooldist_e').style.color = "#E12B2D";
        document.getElementById('schoolName_e').style.color = "#E12B2D";
        document.getElementById('cfname').style.border = "1px solid #E12B2D";
        document.getElementById('clname').style.border = "1px solid #E12B2D";
        document.getElementById('month').style.border = "1px solid #E12B2D";
        document.getElementById('day').style.border = "1px solid #E12B2D";
        document.getElementById('year').style.border = "1px solid #E12B2D";
        document.getElementById('gender').style.border = "1px solid #E12B2D";
        document.getElementById('last_grade').style.border = "1px solid #E12B2D";
        document.getElementById('schooldist').style.border = "1px solid #E12B2D";
        document.getElementById('schoolName').style.border = "1px solid #E12B2D";
        document.getElementById('studentid').style.border = "1px solid #E12B2D";
        status = false;
    } else {
        document.getElementById('cfname_e').innerHTML = "";
        document.getElementById('clname_e').innerHTML = "";
        document.getElementById('studentid_e').innerHTML = "";
        document.getElementById('dob_e').innerHTML = "";
        document.getElementById('gender_e').innerHTML = "";
        document.getElementById('last_grade_e').innerHTML = "";
        document.getElementById('schooldist_e').innerHTML = "";
        document.getElementById('schoolName_e').innerHTML = "";
        document.getElementById('cfname').style.border = "";
        document.getElementById('clname').style.border = "";
        document.getElementById('studentid').style.border = "";
        document.getElementById('month').style.border = "";
        document.getElementById('day').style.border = "";
        document.getElementById('year').style.border = "";
        document.getElementById('gender').style.border = "";
        document.getElementById('last_grade').style.border = "";
        document.getElementById('schooldist').style.border = "";
        document.getElementById('schoolName').style.border = "";
        status = true;
    }
    return status;
}


function addchildcheckfname() {
    var status = false;
    var chfname = document.getElementById('cfname').value;
    if (chfname === "") {
        document.getElementById('cfname_e').innerHTML = "Child's first name is required!";
        document.getElementById('cfname_e').style.color = "#E12B2D";
        document.getElementById('cfname').style.border = "1px solid #E12B2D";
        status = false;
    } else {
        document.getElementById('cfname_e').innerHTML = "";
        document.getElementById('cfname').style.border = "";
        status = true;
    }
    return status;
}
function addchildchecklname() {
    var status = false;
    var chlname = document.getElementById('clname').value;
    if (chlname === "") {
        document.getElementById('clname_e').innerHTML = "Child's last name is required";
        document.getElementById('clname_e').style.color = "#E12B2D";
        document.getElementById('clname').style.border = "1px solid #E12B2D";
        status = false;
    } else {
        document.getElementById('clname_e').innerHTML = "";
        document.getElementById('clname').style.border = "";
        status = true;
    }
    return status;
}
function addchildcheckstudentID() {
    var status = false;
    var studentid = document.getElementById('studentid').value;
    if (studentid === "") {
        document.getElementById('studentid_e').innerHTML = "Child's last name is required";
        document.getElementById('studentid_e').style.color = "#E12B2D";
        document.getElementById('studentid').style.border = "1px solid #E12B2D";
        status = false;
    } else {
        document.getElementById('studentid_e').innerHTML = "";
        document.getElementById('studentid').style.border = "";
        status = true;
    }
    return status;
}
function addchildcheckmonth() {
    var status = false;
    var chdobmonth = document.getElementById('month').value;
    if (chdobmonth === "") {
        document.getElementById('dob_e').innerHTML = "Please enter DOB month.";
        document.getElementById('dob_e').style.color = "#E12B2D";
        document.getElementById('month').style.border = "1px solid #E12B2D";
        status = false;
    } else {
        document.getElementById('dob_e').innerHTML = "";
        document.getElementById('month').style.border = "";
        status = true;
    }
    return status;
}
function addchildcheckday() {
    var status = false;
    var dobday = document.getElementById('day').value;
    if (dobday === "") {
        document.getElementById('dob_e').innerHTML = "Please enter DOB day.";
        document.getElementById('dob_e').style.color = "#E12B2D";
        document.getElementById('day').style.border = "1px solid #E12B2D";
        status = false;
    } else {
        document.getElementById('dob_e').innerHTML = "";
        document.getElementById('day').style.border = "";
        status = true;
    }
    return status;
}
function addchildcheckyear() {
    var status = false;
    var dobyear = document.getElementById('year').value;
    if (dobyear === "") {
        document.getElementById('dob_e').innerHTML = "Please enter DOB year";
        document.getElementById('dob_e').style.color = "#E12B2D";
        document.getElementById('year').style.border = "1px solid #E12B2D";
        status = false;
    } else {
        document.getElementById('dob_e').innerHTML = "";
        document.getElementById('year').style.border = "";
        status = true;
    }
    return status;
}
function addchildcheckgender() {
    var status = false;
    var checkGender = document.getElementsByName('gender');
    for (var i = 0, length = checkGender.length; i < length; i++) {
        if (checkGender[i].checked) {
            var checkchildGender = checkGender[i].value;
            break;
        } else {
            var checkchildGender = "";
        }

    }
    console.log("check gender = " + checkchildGender);
    if (checkchildGender === "") {
        document.getElementById('gender_e').innerHTML = "Child's gender is required";
        document.getElementById('gender_e').style.color = "#E12B2D";
        document.getElementById('gender').style.border = "1px solid #E12B2D";
        status = false;
    } else {
        document.getElementById('gender_e').innerHTML = "";
        document.getElementById('gender').style.border = "";
        status = true;
    }
    return status;
}
function addchildcheckgrade() {
    var status = false;
    var chlgrade = document.getElementById('last_grade').value;
    if (chlgrade === "") {
        document.getElementById('last_grade_e').innerHTML = "Last completed grade is required";
        document.getElementById('last_grade_e').style.color = "#E12B2D";
        document.getElementById('last_grade').style.border = "1px solid #E12B2D";
        status = false;
    } else {
        document.getElementById('last_grade_e').innerHTML = "";
        document.getElementById('last_grade').style.border = "";
        status = true;
    }
    return status;
}
function addchildcheckdistrict() {
    var status = false;
    var chdistrict = document.getElementById('schooldist').value;
    if (chdistrict === "--") {
        document.getElementById('schooldist_e').innerHTML = "Please select your school district";
        document.getElementById('schooldist_e').style.color = "#E12B2D";
        document.getElementById('schooldist').style.border = "1px solid #E12B2D";
        status = false;
    } else {
        document.getElementById('schooldist_e').innerHTML = "";
        document.getElementById('schooldist').style.border = "";
        status = true;
    }
    return status;
}
function addchildcheckschool() {
    var status = false;
    var chschool = document.getElementById('schoolName').value;
    if (chschool === "--") {
        document.getElementById('schoolName_e').innerHTML = "Please first select school district, then school name";
        document.getElementById('schoolName_e').style.color = "#E12B2D";
        document.getElementById('schoolName').style.border = "1px solid #E12B2D";
        status = false;
    } else {
        document.getElementById('schoolName_e').innerHTML = "";
        document.getElementById('schoolName').style.border = "";
        status = true;
    }
    return status;
}












