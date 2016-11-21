


window.addEventListener("load", ReportChild, false);
function ReportChild() {

    document.getElementById('report_a').onclick = ReportAbsenceRunValidations;
    document.getElementById("report_a").addEventListener("click", function (event) {
        event.preventDefault();
    });
}


/*******************************************************************************
 * Report Absence
 * *****************************************************************************
 */

function ReportAbsenceRunValidations() {


    if (ReportAbsenceDoCheckFields() === false) {
    } else if (ReportAbsencecheckName() === false) {
    } else if (ReportAbsencecheckFromDate() === false) {
    } else if (ReportAbsencecheckToDate() === false) {
    } else if (ReportAbsencecheckReason() === false) {
    } else if (ReportAbsencePassword() === false) {
    } else {

        try {

            ReportAbsenceProcess();
        } catch (e) {
            alert(e);
        }

    }
}





var ReportAbsenceXmlHttp = createReportAbsenceXmlHttpRequestObject();
// Create XML Http Request object  

function createReportAbsenceXmlHttpRequestObject() {
    var ReportAbsenceXmlHttp;
    // For Internet Explorer   
    if (window.ActiveXObject) {
        try {
            ReportAbsenceXmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {
            alert("can't create IE object");
            ReportAbsenceXmlHttp = false;
        }
    } else {
        //For Google Chrome and other  
        try {
            ReportAbsenceXmlHttp = new XMLHttpRequest();
        } catch (e) {
            ReportAbsenceXmlHttp = false;
        }
    }
    if (!ReportAbsenceXmlHttp) {
        alert("can't create that object!");
    } else {
        return ReportAbsenceXmlHttp;
    }
}

//function which gets triggered on the event onkeyup in search box  
function ReportAbsenceProcess() {
    if (ReportAbsenceXmlHttp.readyState == 4 || ReportAbsenceXmlHttp.readyState == 0) {
//filter = document.getElementById('filter').style.display = "block";
//Store the keyword form the search box in a variable  
        var checkchildname = document.getElementById("child_name");
        var childname_ajax = encodeURIComponent(checkchildname.options[checkchildname.selectedIndex].value);
        var checkdateFrom_ajax = encodeURIComponent(document.getElementById("start_dt").value);
        var checkdateTo_ajax = encodeURIComponent(document.getElementById("another_dt").value);
        var checkReason_ajax = encodeURIComponent(document.getElementById("reason").value);
        var checkPassword_ajax = encodeURIComponent(document.getElementById("ppass").value);
        var checkParent_ajax = encodeURIComponent(document.getElementById("parent_id").value);


        /*Send the request, make sure you give 3 parameters  
         1-Method, 2- url, 3- true or false   
         */
        ReportAbsenceXmlHttp.open("POST", "ajax.php", true);
        ReportAbsenceXmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        ReportAbsenceXmlHttp.onreadystatechange = ReportAbsenceHandleAjaxResponse;
        ReportAbsenceXmlHttp.send("child_name=" + childname_ajax + "&dateFrom=" + checkdateFrom_ajax + "&dateTo=" + checkdateTo_ajax + "&reason=" + checkReason_ajax + "&pass=" + checkPassword_ajax + "&parent_id=" + checkParent_ajax);
    } else {
    }
}


function ReportAbsenceHandleAjaxResponse() {
    if (ReportAbsenceXmlHttp.readyState == 4 || ReportAbsenceXmlHttp.readyState == 0) {
        if (ReportAbsenceXmlHttp.status == 200) {
            xmlResponse = ReportAbsenceXmlHttp.responseText;
            var ccheckchildname = document.getElementById("child_name");
            var childname = ccheckchildname.options[ccheckchildname.selectedIndex].text;
            if (xmlResponse === "wrong password") {
                document.getElementById("report_response").innerHTML = "<p style='color:#E12B2D;'>Password did not match our records. Try again!</p>";
            } else if (xmlResponse == "unable to add") {
                document.getElementById("report_response").innerHTML = "<p style='color:#E12B2D;'>Error. We are unable to add this report. If the error continues please contact our <a href='mailto:rostom.sahakian@gmail.com'>support team</p>.";
            } else {
                console.log(xmlResponse);
                document.getElementById("report_response").innerHTML = "<p style='color:#6DA815;'>Absence for " + childname + " has been filed.</p>";

                setTimeout(function () {
                    window.location.href = "?cmd=account&do=default";
                }, 2000);
            }

        } else {
            alert("something went wrong");
        }
    }
}

function ReportAbsenceDoCheckFields() {
    var status = false;

    var checkchildname = document.getElementById("child_name");
    var childname = encodeURIComponent(checkchildname.options[checkchildname.selectedIndex].value);

    var checkdateFrom = document.getElementById("start_dt").value;
    var checkdateTo = document.getElementById("another_dt").value;

    var checkReason = document.getElementById("reason").value;

    var checkPassword = document.getElementById("ppass").value;

    if ((childname === "--") && (checkdateFrom === "") && (checkdateTo === "") && (checkReason === "") && (checkPassword === "")) {
// 
        document.getElementById('childname_e').innerHTML = "Child's name is required!";
        document.getElementById('datefrom_e').innerHTML = "From what day your child will be absent?";
        document.getElementById('dateto_e').innerHTML = "Until when is your child going to be absent?";
        document.getElementById('reason_e').innerHTML = "Reason for this absence is required";
        document.getElementById('ppass_e').innerHTML = "Your account password is required";

        document.getElementById('childname_e').style.color = "#E12B2D";
        document.getElementById('datefrom_e').style.color = "#E12B2D";
        document.getElementById('dateto_e').style.color = "#E12B2D";
        document.getElementById('reason_e').style.color = "#E12B2D";
        document.getElementById('ppass_e').style.color = "#E12B2D";

        document.getElementById('child_name').style.border = "1px solid #E12B2D";
        document.getElementById('start_dt').style.border = "1px solid #E12B2D";
        document.getElementById('another_dt').style.border = "1px solid #E12B2D";
        document.getElementById('reason').style.border = "1px solid #E12B2D";
        document.getElementById('ppass').style.border = "1px solid #E12B2D";

        status = false;
    } else {
        document.getElementById('childname_e').innerHTML = "";
        document.getElementById('datefrom_e').innerHTML = "";
        document.getElementById('dateto_e').innerHTML = "";
        document.getElementById('reason_e').innerHTML = "";
        document.getElementById('ppass_e').innerHTML = "";

        document.getElementById('child_name').style.border = "";
        document.getElementById('start_dt').style.border = "";
        document.getElementById('another_dt').style.border = "";
        document.getElementById('reason').style.border = "";
        document.getElementById('ppass').style.border = "";
        status = true;
    }
    return status;
}


function ReportAbsencecheckName() {
    var status = false;
    var chname = document.getElementById('child_name').value;
    if (chname === "--") {
        document.getElementById('childname_e').innerHTML = "Child's name is required!";
        document.getElementById('childname_e').style.color = "#E12B2D";
        document.getElementById('child_name').style.border = "1px solid #E12B2D";
        status = false;
    } else {
        document.getElementById('childname_e').innerHTML = "";
        document.getElementById('child_name').style.border = "";
        status = true;
    }
    return status;
}
function ReportAbsencecheckFromDate() {
    var status = false;
    var chFrom = document.getElementById('start_dt').value;
    if (chFrom === "") {
        document.getElementById('datefrom_e').innerHTML = "From what day your child will be absent?";
        document.getElementById('datefrom_e').style.color = "#E12B2D";
        document.getElementById('start_dt').style.border = "1px solid #E12B2D";
        status = false;
    } else {
        document.getElementById('datefrom_e').innerHTML = "";
        document.getElementById('start_dt').style.border = "";
        status = true;
    }
    return status;
}
function ReportAbsencecheckToDate() {
    var status = false;
    var chTo = document.getElementById('another_dt').value;
    if (chTo === "") {
        document.getElementById('dateto_e').innerHTML = "Until when is your child going to be absent?";
        document.getElementById('dateto_e').style.color = "#E12B2D";
        document.getElementById('another_dt').style.border = "1px solid #E12B2D";
        status = false;
    } else {
        document.getElementById('dateto_e').innerHTML = "";
        document.getElementById('another_dt').style.border = "";
        status = true;
    }
    return status;
}
function ReportAbsencecheckReason() {
    var status = false;
    var chdobmonth = document.getElementById('reason').value;
    if (chdobmonth === "") {
        document.getElementById('reason_e').innerHTML = "Reason for this absence is required.";
        document.getElementById('reason_e').style.color = "#E12B2D";
        document.getElementById('reason').style.border = "1px solid #E12B2D";
        status = false;
    } else {
        document.getElementById('reason_e').innerHTML = "";
        document.getElementById('reason').style.border = "";
        status = true;
    }
    return status;
}
function ReportAbsencePassword() {
    var status = false;
    var dobday = document.getElementById('ppass').value;
    if (dobday === "") {
        document.getElementById('ppass_e').innerHTML = "Password is required.";
        document.getElementById('ppass_e').style.color = "#E12B2D";
        document.getElementById('ppass').style.border = "1px solid #E12B2D !important";
        status = false;
    } else {
        document.getElementById('ppass_e').innerHTML = "";
        document.getElementById('ppass').style.border = "";
        status = true;
    }
    return status;
}











