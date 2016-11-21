


window.addEventListener("load", EditChild, false);
function EditChild() {

    document.getElementById('doeditchild').onclick = EditChildRunValidations;
    document.getElementById("doeditchild").addEventListener("click", function (event) {
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
    var first = document.getElementById("emonth").maxLength;
    var m = document.getElementById("emonth").value;
    if (m.length === first) {

        document.getElementById("eday").focus();
        //alert(m.length);
    }
}

function TabsAutoday() {
//if on key up it has reached the max length the move to next field
    var second = document.getElementById("eday").maxLength;
    var d = document.getElementById("eday").value;
    if (d.length === second) {
        document.getElementById("eyear").focus();
    }
}
/*******************************************************************************
 * ADD Child EditingChildProcess
 * *****************************************************************************
 */

function EditChildRunValidations() {

    if (EditChildDoCheckFields() === false) {
        console.log("false");
    } else if (Editchildcheckfname() === false) {
    } else if (Editchildchecklname() === false) {
    } else if (EditchildcheckstudentID() == false) {
    } else if (Editchildcheckmonth() === false) {
    } else if (Editchildcheckday() === false) {
    } else if (Editchildcheckyear() === false) {
    } else if (Editchildcheckgender() === false) {
    } else if (Editchildcheckgrade() === false) {
    } else if (Editchildcheckdistrict() === false) {
    } else if (Editchildcheckschool() === false) {
    } else {

        try {

            EditingChildProcess();
        } catch (e) {
            alert("is it from ere" + e);
            console.log(e);
        }

    }
}





var EditChildXmlHttp = createEditChildXmlHttpRequestObject();
// Create XML Http Request object  

function createEditChildXmlHttpRequestObject() {
    var EditChildXmlHttp;
    // For Internet Explorer   
    if (window.ActiveXObject) {
        try {
            EditChildXmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {
            alert("can't create IE object");
            EditChildXmlHttp = false;
        }
    } else {
        //For Google Chrome and other  
        try {
            EditChildXmlHttp = new XMLHttpRequest();
        } catch (e) {
            EditChildXmlHttp = false;
        }
    }
    if (!EditChildXmlHttp) {
        alert("can't create that object!");
    } else {
        return EditChildXmlHttp;
    }
}

//function which gets triggered on the event onkeyup in search box  
function EditingChildProcess() {
    if (EditChildXmlHttp.readyState == 4 || EditChildXmlHttp.readyState == 0) {
//filter = document.getElementById('filter').style.display = "block";
//Store the keyword form the search box in a variable  
        var childfname = encodeURIComponent(document.getElementById("efname").value);
        var childmname = encodeURIComponent(document.getElementById("emname").value);
        var childstudentid = encodeURIComponent(document.getElementById("studentid").value);
        var childlname = encodeURIComponent(document.getElementById("elname").value);
        var childDOBMonth = encodeURIComponent(document.getElementById("emonth").value);
        var childDOBDay = encodeURIComponent(document.getElementById("eday").value);
        var childDOBYear = encodeURIComponent(document.getElementById("eyear").value);
        var parent_id = encodeURIComponent(document.getElementById("parent_id").value);
        var Gender = document.getElementsByName('egender');
        for (var i = 0, length = Gender.length; i < length; i++) {
            if (Gender[i].checked) {
// do whatever you want with the checked radio

                var childGender = encodeURIComponent(Gender[i].value);
                // only one radio can be logically checked, don't check the rest
                break;
            }
        }
        var childLastGrade = encodeURIComponent(document.getElementById("elast_grade").value);
        var childSchoolDistrict = document.getElementById("eschooldist");
        var district = encodeURIComponent(childSchoolDistrict.options[childSchoolDistrict.selectedIndex].value);
        var childSchoolName = document.getElementById("eschoolName");
        var school = encodeURIComponent(childSchoolName.options[childSchoolName.selectedIndex].value);
        var childTeacher = encodeURIComponent(document.getElementById("eteacher").value);
        var submitb = encodeURIComponent(document.getElementById('doeditchild').value);
        var child_id = encodeURIComponent(document.getElementById('child_id').value);
        /*Send the request, make sure you give 3 parameters  
         1-Method, 2- url, 3- true or false   
         */
        EditChildXmlHttp.open("POST", "ajax.php", true);
        EditChildXmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        EditChildXmlHttp.onreadystatechange = EditChildHandleAjaxResponse;
        EditChildXmlHttp.send("efname=" + childfname +
                "&emname=" + childmname + "&elname=" + childlname +"&studentid="+childstudentid+ "&emonth=" + childDOBMonth + "&eday=" + childDOBDay + "&eyear=" + childDOBYear + "&egender=" + childGender +
                "&elast_grade=" + childLastGrade + "&eschooldist=" + district + "&eschoolName=" + school +
                "&eteacher=" + childTeacher + "&eparent_id=" + parent_id + "&doeditchild=" + submitb + "&child_id=" + child_id);
    } else {
    }
}


function EditChildHandleAjaxResponse() {
    if (EditChildXmlHttp.readyState == 4 || EditChildXmlHttp.readyState == 0) {
        if (EditChildXmlHttp.status == 200) {
            xmlResponse = EditChildXmlHttp.responseText;
            var fname = encodeURIComponent(document.getElementById("efname").value);
            var lname = encodeURIComponent(document.getElementById("elname").value);
            if (xmlResponse === "nothing to update.") {
                document.getElementById("edithild_response").innerHTML = "<p style='color:#E12B2D;'>There is nothing to update.</p>";
            } else if (xmlResponse == "error") {
                document.getElementById("edithild_response").innerHTML = "<p style='color:#E12B2D;'>Error. We are unable to edit your child's info. If the error continues please contact our <a href='mailto:rostom.sahakian@gmail.com'>support team</p>.";
            } else if (xmlResponse === "data updated" || xmlResponse === "data updateddata updated") {
                console.log(xmlResponse);
                document.getElementById("edithild_response").innerHTML = "<p style='color:#6DA815;'>" + fname + " " + lname + "'s info was edited.</p>";
//                document.getElementById('hideedit').style.display = "none";
                setTimeout(function () {
                    window.location.href = "?cmd=account&do=default";
                }, 2000);
            } else {
                document.getElementById("edithild_response").innerHTML = "<p style='color:#E12B2D;'>Unable to update</p>";

            }

        } else {
            alert("something went wrong");
        }
    }
}

function EditChildDoCheckFields() {
    var status = false;
    var checkchildfname = document.getElementById("efname").value;
    var checkchildlname = document.getElementById("elname").value;
    var checkchildstudentID = document.getElementById("studentid").value;
    var checkchildDOBMonth = document.getElementById("emonth").value;
    var checkchildDOBDay = document.getElementById("eday").value;
    var checkchildDOBYear = document.getElementById("eyear").value;
    var checkGender = document.getElementsByName('egender');
    for (var i = 0, length = checkGender.length; i < length; i++) {
        if (checkGender[i].checked) {
            var checkchildGender = checkGender[i].value;
            break;
        } else {
            var checkchildGender = "";
        }

    }
    // console.log("gender=" + checkchildGender);
    var checkchildLastGrade = document.getElementById("elast_grade").value;
    var checkchildSchoolDistrict = document.getElementById("eschooldist");
    if (typeof checkchildSchoolDistrict != 'undefined') {
        var checkdistrict = checkchildSchoolDistrict.options[checkchildSchoolDistrict.selectedIndex].value;
    }
    var checkchildSchoolName = document.getElementById("eschoolName");
    var checkschool = checkchildSchoolName.options[checkchildSchoolName.selectedIndex].value;
    if ((checkchildfname === "") && (checkchildlname === "") && (checkchildstudentID === "") && (checkchildDOBMonth === "") && (checkchildDOBDay === "") && (checkchildDOBYear === "")
            && (checkchildLastGrade === "") && (checkdistrict === "--") && (checkschool === "--") && (checkchildGender === "")) {
// 
        document.getElementById('efname_e').innerHTML = "Child's first name is required!";
        document.getElementById('elname_e').innerHTML = "Child's last name is required";
        document.getElementById('studentid_e').innerHTML = "Student ID is required";
        document.getElementById('edob_e').innerHTML = "Child's date of birth is required";
        document.getElementById('egender_e').innerHTML = "Child's gender is required";
        document.getElementById('elast_grade_e').innerHTML = "Last completed grade is required";
        document.getElementById('eschooldist_e').innerHTML = "Please select your school district";
        document.getElementById('eschoolName_e').innerHTML = "Please first select school district, then school name";
        document.getElementById('efname_e').style.color = "#E12B2D";
        document.getElementById('elname_e').style.color = "#E12B2D";
        document.getElementById('studentid_e').style.color = "#E12B2D";
        document.getElementById('edob_e').style.color = "#E12B2D";
        document.getElementById('egender_e').style.color = "#E12B2D";
        document.getElementById('elast_grade_e').style.color = "#E12B2D";
        document.getElementById('eschooldist_e').style.color = "#E12B2D";
        document.getElementById('eschoolName_e').style.color = "#E12B2D";
        document.getElementById('efname').style.border = "1px solid #E12B2D";
        document.getElementById('elname').style.border = "1px solid #E12B2D";
        document.getElementById('emonth').style.border = "1px solid #E12B2D";
        document.getElementById('eday').style.border = "1px solid #E12B2D";
        document.getElementById('eyear').style.border = "1px solid #E12B2D";
        document.getElementById('egender').style.border = "1px solid #E12B2D";
        document.getElementById('elast_grade').style.border = "1px solid #E12B2D";
        document.getElementById('eschooldist').style.border = "1px solid #E12B2D";
        document.getElementById('eschoolName').style.border = "1px solid #E12B2D";
        document.getElementById('studentid').style.border = "1px solid #E12B2D";

        status = false;
    } else {
        document.getElementById('efname_e').innerHTML = "";
        document.getElementById('elname_e').innerHTML = "";
        document.getElementById('studentid_e').innerHTML = "";
        document.getElementById('edob_e').innerHTML = "";
        document.getElementById('egender_e').innerHTML = "";
        document.getElementById('elast_grade_e').innerHTML = "";
        document.getElementById('eschooldist_e').innerHTML = "";
        document.getElementById('eschoolName_e').innerHTML = "";
        document.getElementById('efname').style.border = "";
        document.getElementById('elname').style.border = "";
        document.getElementById('studentid').style.border = "";
        document.getElementById('emonth').style.border = "";
        document.getElementById('eday').style.border = "";
        document.getElementById('eyear').style.border = "";
        document.getElementById('egender').style.border = "";
        document.getElementById('elast_grade').style.border = "";
        document.getElementById('eschooldist').style.border = "";
        document.getElementById('eschoolName').style.border = "";
        status = true;
    }
    return status;
}


function Editchildcheckfname() {
    var status = false;
    var chfname = document.getElementById('efname').value;
    if (chfname === "") {
        document.getElementById('efname_e').innerHTML = "Child's first name is required!";
        document.getElementById('efname_e').style.color = "#E12B2D";
        document.getElementById('efname').style.border = "1px solid #E12B2D";
        status = false;
    } else {
        document.getElementById('efname_e').innerHTML = "";
        document.getElementById('efname').style.border = "";
        status = true;
    }
    return status;
}
function Editchildchecklname() {
    var status = false;
    var chlname = document.getElementById('elname').value;
    if (chlname === "") {
        document.getElementById('elname_e').innerHTML = "Child's last name is required";
        document.getElementById('elname_e').style.color = "#E12B2D";
        document.getElementById('elname').style.border = "1px solid #E12B2D";
        status = false;
    } else {
        document.getElementById('elname_e').innerHTML = "";
        document.getElementById('elname').style.border = "";
        status = true;
    }
    return status;
}
function EditchildcheckstudentID() {
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
function Editchildcheckmonth() {
    var status = false;
    var chdobmonth = document.getElementById('emonth').value;
    if (chdobmonth === "") {
        document.getElementById('edob_e').innerHTML = "Please enter DOB month.";
        document.getElementById('edob_e').style.color = "#E12B2D";
        document.getElementById('emonth').style.border = "1px solid #E12B2D";
        status = false;
    } else {
        document.getElementById('edob_e').innerHTML = "";
        document.getElementById('emonth').style.border = "";
        status = true;
    }
    return status;
}
function Editchildcheckday() {
    var status = false;
    var dobday = document.getElementById('eday').value;
    if (dobday === "") {
        document.getElementById('edob_e').innerHTML = "Please enter DOB day.";
        document.getElementById('edob_e').style.color = "#E12B2D";
        document.getElementById('eday').style.border = "1px solid #E12B2D";
        status = false;
    } else {
        document.getElementById('edob_e').innerHTML = "";
        document.getElementById('eday').style.border = "";
        status = true;
    }
    return status;
}
function Editchildcheckyear() {
    var status = false;
    var dobyear = document.getElementById('eyear').value;
    if (dobyear === "") {
        document.getElementById('edob_e').innerHTML = "Please enter DOB year";
        document.getElementById('edob_e').style.color = "#E12B2D";
        document.getElementById('eyear').style.border = "1px solid #E12B2D";
        status = false;
    } else {
        document.getElementById('edob_e').innerHTML = "";
        document.getElementById('eyear').style.border = "";
        status = true;
    }
    return status;
}
function Editchildcheckgender() {
    var status = false;
    var checkGender = document.getElementsByName('egender');
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
        document.getElementById('egender_e').innerHTML = "Child's gender is required";
        document.getElementById('egender_e').style.color = "#E12B2D";
        document.getElementById('egender').style.border = "1px solid #E12B2D";
        status = false;
    } else {
        document.getElementById('egender_e').innerHTML = "";
        document.getElementById('egender').style.border = "";
        status = true;
    }
    return status;
}
function Editchildcheckgrade() {
    var status = false;
    var chlgrade = document.getElementById('elast_grade').value;
    if (chlgrade === "") {
        document.getElementById('elast_grade_e').innerHTML = "Last completed grade is required";
        document.getElementById('elast_grade_e').style.color = "#E12B2D";
        document.getElementById('elast_grade').style.border = "1px solid #E12B2D";
        status = false;
    } else {
        document.getElementById('elast_grade_e').innerHTML = "";
        document.getElementById('elast_grade').style.border = "";
        status = true;
    }
    return status;
}
function Editchildcheckdistrict() {
    var status = false;
    var chdistrict = document.getElementById('eschooldist').value;
    if (chdistrict === "--") {
        document.getElementById('eschooldist_e').innerHTML = "Please select your school district";
        document.getElementById('eschooldist_e').style.color = "#E12B2D";
        document.getElementById('eschooldist').style.border = "1px solid #E12B2D";
        status = false;
    } else {
        document.getElementById('eschooldist_e').innerHTML = "";
        document.getElementById('eschooldist').style.border = "";
        status = true;
    }
    return status;
}
function Editchildcheckschool() {
    var status = false;
    var chschool = document.getElementById('eschoolName').value;
    if (chschool === "--") {
        document.getElementById('eschoolName_e').innerHTML = "Please first select school district, then school name";
        document.getElementById('eschoolName_e').style.color = "#E12B2D";
        document.getElementById('eschoolName').style.border = "1px solid #E12B2D";
        status = false;
    } else {
        document.getElementById('eschoolName_e').innerHTML = "";
        document.getElementById('eschoolName').style.border = "";
        status = true;
    }
    return status;
}














