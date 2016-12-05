
window.addEventListener("load", EarlyCheckout, false);
function EarlyCheckout() {


    document.getElementById('doecheck').onclick = function () {

        var a = false;
        var b = false;
        var c = false;
        var d = false;
        var e = false;
        var f = false;
        if (DoValidateForm() === false) {
            a = false;
        } else {
            a = true;
        }
        if (CheckWhoIsPicking() === false) {
            b = false;
        } else {
            b = true;
        }
        if (CheckStudentName() === false) {
            c = false;
        } else {
            c = true;
        }
        if (CheckAMPM() === false) {
            d = false;
        } else {
            d = true;
        }
        if (CheckPicker() === false) {
            e = false;
        } else {
            e = true;
        }
        if (CheckPassword() === false) {
            f = false;
        } else {
            f = true;
        }
        console.log('--------------------------------------------------');

        console.log("EarlyCheckout = " + a + " " + b + " " + c + " " + d + " " + e + " " + f);
        if (a === true && b === true && c === true && d === true && e === true && f === true) {

            try {
                EarlysSignOutProcess();
            } catch (e) {
                alert(e);
            }
        }


    }
    document.getElementById("doecheck").addEventListener("click", function (event) {
        event.preventDefault()
    });
    document.getElementById('picker').onchange = showHiddenDiv;
    CheckHour();
    CheckMins();

}

function showHiddenDiv() {
    var ifother = document.getElementById("picker");
    var other = encodeURIComponent(ifother.options[ifother.selectedIndex].value);
    if (other === "other") {
        document.getElementById('who').style.display = "block";

    } else {
        document.getElementById('who').style.display = "none";
    }
}
function CheckHour() {
    var cTime = new Date();
    var hrs = cTime.getHours();
    console.log(hrs);
    if (hrs > 12) {
        var hour = hrs - 12;
        if (hour < 10) {
            var hr = "0" + hour;
            document.getElementById('hour').value = hr;
        } else {
            document.getElementById('hour').value = hour;
        }

    } else {
        document.getElementById('hour').value = hrs;
    }

}
function CheckMins() {
    var currentTime = new Date();
    var minutes = currentTime.getMinutes();
    if (minutes < 10) {
        var min = "0" + minutes;
        document.getElementById('min').value = min;
    } else {
        document.getElementById('min').value = minutes;
    }
}


function DoValidateForm() {
    var s = false;
    var passwo = document.getElementById('p_verify');
    var pass1 = passwo.value;
    var child = document.getElementById('student_to_signout');
    var student = child.options[child.selectedIndex].value;

    var t_amorpm = document.getElementById('amorpm');
    var e_amorpm = t_amorpm.options[t_amorpm.selectedIndex].value;

    var t_who = document.getElementById('picker');
    var e_who = t_who.options[t_who.selectedIndex].value;



    if (student === "--" && e_amorpm === "--" && e_who === "--" && pass1 === "") {

        s = false;
        document.getElementById('std_e').innerHTML = "Please select the student that will picked up early.";

        document.getElementById('amorpm_e').innerHTML = "AM or PM?";
        document.getElementById('picker_e').innerHTML = "Select who will be picking your child.";
        document.getElementById('passw_e').innerHTML = "Enter your passwor for verification.";

        document.getElementById('std_e').style.color = "#E12B2D";
        document.getElementById('amorpm_e').style.color = "#E12B2D";
        document.getElementById('picker_e').style.color = "#E12B2D";
        document.getElementById('passw_e').style.color = "#E12B2D";

        document.getElementById('student_to_signout').style.border = "1px solid #E12B2D";
        document.getElementById('amorpm').style.border = "1px solid #E12B2D";
        document.getElementById('picker').style.border = "1px solid #E12B2D";
        document.getElementById('p_verify').style.border = "1px solid #E12B2D";


    } else {
        // 
        document.getElementById('std_e').innerHTML = "";
        document.getElementById('hour_e').innerHTML = "";
        document.getElementById('min_e').innerHTML = "";
        document.getElementById('amorpm_e').innerHTML = "";
        document.getElementById('picker_e').innerHTML = "";
        document.getElementById('passw_e').innerHTML = "";
        document.getElementById('student_to_signout').style.border = "";
        document.getElementById('amorpm').style.border = "";
        document.getElementById('picker').style.border = "";
        document.getElementById('p_verify').style.border = "";
        s = true;
    }

    return s;
}

function CheckStudentName() {
    var sn = false;
    var child = document.getElementById('student_to_signout');
    var student = child.options[child.selectedIndex].value;
    if (student === "--") {
        sn = false;
        document.getElementById('std_e').innerHTML = "Please select the student that will picked up early.";
        document.getElementById('std_e').style.color = "#E12B2D";
        document.getElementById('student_to_signout').style.border = "1px solid #E12B2D";

    } else {
        sn = true;
        document.getElementById('std_e').innerHTML = "";
        document.getElementById('student_to_signout').style.border = "";
    }
    console.log("CheckStudentName = " + sn);

    return sn;
}

function CheckAMPM() {
    var sa = false;
    var t_amorpm = document.getElementById('amorpm');
    var e_amorpm = t_amorpm.options[t_amorpm.selectedIndex].value;
    if (e_amorpm === "--") {
        sa = false;
        document.getElementById('amorpm_e').innerHTML = "AM or PM?";
        document.getElementById('amorpm_e').style.color = "#E12B2D";
        document.getElementById('amorpm').style.border = "1px solid #E12B2D";

    } else {
        sa = true;
        document.getElementById('amorpm_e').innerHTML = "";
        document.getElementById('amorpm').style.border = "";
    }
    console.log("CheckAMPM = " + sa);

    return sa;
}
function CheckPicker() {
    var sp = false;
    var t_who = document.getElementById('picker');
    var e_who = t_who.options[t_who.selectedIndex].value;
    if (e_who === "--") {
        document.getElementById('picker_e').innerHTML = "Select who will be picking your child.";
        document.getElementById('picker_e').style.color = "#E12B2D";
        document.getElementById('picker').style.border = "1px solid #E12B2D";
        sp = false;
    } else {

        document.getElementById('picker_e').innerHTML = "";
        document.getElementById('picker').style.border = "";
        sp = true;
    }
    console.log("CheckPicker = " + sp);

    return sp;
}

function CheckPassword() {
    var sc = false;
    var passw = document.getElementById('p_verify').value;

    if (passw === "") {
        document.getElementById('passw_e').innerHTML = "Enter your passwor for verification..";
        document.getElementById('passw_e').style.color = "#E12B2D";
        document.getElementById('p_verify').style.border = "1px solid #E12B2D";
        sc = false;
    } else {
        sc = true;
        document.getElementById('passw_e').innerHTML = "";
        document.getElementById('p_verify').style.border = "";

    }
    console.log("CheckPassword= " + sc);

    return sc;
}

function CheckWhoIsPicking(person) {
    var status = false;
    var t_who = document.getElementById('picker');
    var person = t_who.options[t_who.selectedIndex].value;
    if (person === "other") {
        //Make sure the 4 items are included 1.full name 2. dl or id# 3.relation 4. dl image
        var fullname = document.getElementById('ofull_name').value;
        var otherpersonId = document.getElementById('other_person_id').value;
        var otherpersonRelation = document.getElementById('other_person_relation').value;

        var dlImageRef = document.getElementById('uploadimage').value;
        //var dlImage = dlImageRef.files[0];

        if (fullname === "" && otherpersonId === "" && otherpersonRelation === "" && dlImageRef === "") {
            status = false;
            document.getElementById('fullname_e').innerHTML = "Please enter the full name of person picking your child up";
            document.getElementById('oid_e').innerHTML = "Please enter either the driver or valid Identfication number.";
            document.getElementById('rel_e').innerHTML = "Please enter the relationship.";
            document.getElementById('file_e').innerHTML = "Please select an image of either driver license or valid government id.";
            document.getElementById('fullname_e').style.color = "#E12B2D";
            document.getElementById('oid_e').style.color = "#E12B2D";
            document.getElementById('rel_e').style.color = "#E12B2D";
            document.getElementById('file_e').style.color = "#E12B2D";

            document.getElementById('ofull_name').style.border = "1px solid #E12B2D";
            document.getElementById('other_person_id').style.border = "1px solid #E12B2D";
            document.getElementById('other_person_relation').style.border = "1px solid #E12B2D";
            document.getElementById('uploadimage').style.border = "1px solid #E12B2D";
        } else {
            status = true;
            document.getElementById('fullname_e').innerHTML = "";
            document.getElementById('oid_e').innerHTML = "";
            document.getElementById('rel_e').innerHTML = "";
            document.getElementById('file_e').innerHTML = "";

            document.getElementById('ofull_name').style.border = "";
            document.getElementById('other_person_id').style.border = "";
            document.getElementById('other_person_relation').style.border = "";
            document.getElementById('uploadimage').style.border = "";
        }
        if (fullname === "") {
            document.getElementById('fullname_e').innerHTML = "Please enter the full name of person picking your child up";
            document.getElementById('fullname_e').style.color = "#E12B2D";
            document.getElementById('ofull_name').style.border = "1px solid #E12B2D";

            status = false;
        } else {
            document.getElementById('ofull_name').style.border = "";
            document.getElementById('fullname_e').innerHTML = "";
            status = true;
        }
        if (otherpersonId === "") {
            document.getElementById('oid_e').innerHTML = "Please enter either the driver or valid Identfication number.";
            document.getElementById('oid_e').style.color = "#E12B2D";
            document.getElementById('other_person_id').style.border = "1px solid #E12B2D";


            status = false;
        } else {
            document.getElementById('oid_e').innerHTML = "";
            document.getElementById('other_person_id').style.border = "";

            status = true;
        }
        if (otherpersonRelation === "") {
            document.getElementById('rel_e').innerHTML = "Please enter the relationship.";
            document.getElementById('rel_e').style.color = "#E12B2D";
            document.getElementById('other_person_relation').style.border = "1px solid #E12B2D";

            status = false;
        } else {
            document.getElementById('rel_e').innerHTML = "";
            document.getElementById('other_person_relation').style.border = "";
            status = true;
        }
        if (dlImageRef === "") {
            document.getElementById('file_e').innerHTML = "Please select an image of either driver license or valid government id.";
            document.getElementById('file_e').style.color = "#E12B2D";
            document.getElementById('uploadimage').style.border = "1px solid #E12B2D";

            status = false;
        } else {
            document.getElementById('file_e').innerHTML = "";
            document.getElementById('uploadimage').style.border = "";

            status = true;
        }
    } else {
        status = true;
    }
    console.log("CheckWhoIsPicking = " + status);
    console.log('--------------------------------------------------');

    return status;
}
/***************************************************
 * Earl Sign out process
 * *************************************************
 */


var esignoutxmlHttp = createXmlHttpRequestObject();
// Create XML Http Request object  

function createXmlHttpRequestObject() {
    var esignoutxmlHttp;
    // For Internet Explorer   
    if (window.ActiveXObject) {
        try {
            esignoutxmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {
            alert("can't create IE object");
            esignoutxmlHttp = false;
        }
    } else {
        //For Google Chrome and other  
        try {
            esignoutxmlHttp = new XMLHttpRequest();
        } catch (e) {
            esignoutxmlHttp = false;
        }
    }
    if (!esignoutxmlHttp) {
        alert("can't create that object!");
    } else {
        return esignoutxmlHttp;
    }
}

//function which gets triggered on the event onkeyup in search box  
function EarlysSignOutProcess() {
    if (esignoutxmlHttp.readyState == 4 || esignoutxmlHttp.readyState == 0) {
        var data = new FormData();
        var child = document.getElementById('student_to_signout');
        var student = child.options[child.selectedIndex].value;

        var p_hr = document.getElementById('hour');
        var p_hour = p_hr.options[p_hr.selectedIndex].value;

        var p_min = document.getElementById('min');
        var p_minute = p_min.options[p_min.selectedIndex].value;

        var p_ampm = document.getElementById('amorpm');
        var ampm = p_ampm.options[p_ampm.selectedIndex].value;

        var timeCombo = p_hour + ":" + p_minute + " " + ampm;

        var picker = document.getElementById('picker');
        var picker_std = picker.options[picker.selectedIndex].value;
        var password = document.getElementById('p_verify').value;
        var parent_id = document.getElementById('parent_id').value;
        if (picker_std === "other") {
            var picker_fullname = document.getElementById('ofull_name').value;
            var picker_id = document.getElementById('other_person_id').value;
            var picker_relation = document.getElementById('other_person_relation').value;
            var picker_dl = document.getElementById('uploadimage');

            data.append('uploadimage', picker_dl.files[0]);
            data.append('fullname', picker_fullname);
            data.append('relation', picker_relation);
            data.append('pickerid', picker_id);
            data.append('picker', picker_std);
        } else {
            data.append('picker', picker_std);

        }

        data.append('student', student);
        data.append('pickuptime', timeCombo);
        data.append('password', password);
        data.append('parent_id', parent_id);
        //password = encodeURIComponent(document.getElementById("pass").value);
        /*Send the request, make sure you give 3 parameters  
         1-Method, 2- url, 3- true or false   
         */
        esignoutxmlHttp.open("POST", "ajax.php", true);
        esignoutxmlHttp.onreadystatechange = EarlySignOutHandleResponse;
        esignoutxmlHttp.send(data);


    } else {
    }
}
function EarlySignOutHandleResponse() {
    if (esignoutxmlHttp.readyState == 4 || esignoutxmlHttp.readyState == 0) {
        if (esignoutxmlHttp.status == 200) {
            xmlResponse = esignoutxmlHttp.responseText;
            if (xmlResponse === "invalid password") {
                document.getElementById("esignout_response").innerHTML = "<p style='color:#E12B2D;'>We were unable to verify your identity please check your password and try again.</p>";
            } else if (xmlResponse === "request added") {
                document.getElementById("esignout_response").innerHTML = "<p style='color:#6DA815;'>Early sign out request has been added. School will be noified.</p>";
                setTimeout(function () {
                    window.location.href = "?cmd=account&do=early-out";
                }, 3000);
            }

        } else {
            alert("something went wrong");
        }
    }
}


