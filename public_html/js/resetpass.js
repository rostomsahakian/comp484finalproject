/***************************************************
 * password reset process
 * *************************************************
 */
window.addEventListener("load", ResetCheckFormStatus, false);

function ResetCheckFormStatus() {

    document.getElementById('resetpass').onclick = ResetValidation;
    document.getElementById("resetpass").addEventListener("click", function (event) {
        event.preventDefault()
    });
}

var ResetxmlHttp = createXmlHttpRequestObject();
// Create XML Http Request object  

function createXmlHttpRequestObject() {
    var ResetxmlHttp;
    // For Internet Explorer   
    if (window.ActiveXObject) {
        try {
            ResetxmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {
            alert("can't create IE object");
            ResetxmlHttp = false;
        }
    } else {
        //For Google Chrome and other  
        try {
            ResetxmlHttp = new XMLHttpRequest();
        } catch (e) {
            ResetxmlHttp = false;
        }
    }
    if (!ResetxmlHttp) {
        alert("can't create that object!");
    } else {
        return ResetxmlHttp;
    }
}

//function which gets triggered on the event onkeyup in search box  
function Resetprocess() {
    if (ResetxmlHttp.readyState == 4 || ResetxmlHttp.readyState == 0) {
        //filter = document.getElementById('filter').style.display = "block";
        //Store the keyword form the search box in a variable  
        var doReset = encodeURIComponent(document.getElementById("resetpass").value);
        var n_pass = encodeURIComponent(document.getElementById('new_pass1').value);
        var u_email = encodeURIComponent(document.getElementById('uid').value);

        //password = encodeURIComponent(document.getElementById("pass").value);
        /*Send the request, make sure you give 3 parameters  
         1-Method, 2- url, 3- true or false   
         */
        ResetxmlHttp.open("POST", "ajax.php", true);
        ResetxmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        ResetxmlHttp.onreadystatechange = ResethandleResponse;
        ResetxmlHttp.send("resetpass=" + doReset + "&new_pass1=" + n_pass + "&uid=" + u_email);


    } else {
    }
}

function ResetValidation() {

    if (ResetCheckAllFields() === false) {
        console.log("false");
    } else if (ResetCheckPasswordMatch() === false) {
    } else if (ResetCheckPasswordisValid() === false) {
    } else if (ResetCheckPasswordisNotAllNumber() === false) {
    } else {

        try {

            Resetprocess();
        } catch (e) {
            alert(e);
        }

    }
}

function ResethandleResponse() {
    if (ResetxmlHttp.readyState == 4 || ResetxmlHttp.readyState == 0) {
        if (ResetxmlHttp.status == 200) {
            xmlResponse = ResetxmlHttp.responseText;
            if (xmlResponse == "unable to locate user") {
                document.getElementById("reset_process").innerHTML = "<p style='color:#E12B2D;'>There was an error. If error continues please contact our <a href='mailto:rostom.sahakian@gmail.com'>support team</a></p>";
            } else {
                document.getElementById("reset_process").innerHTML = "<p style='color:#6DA815;'>Your password has been updated.</p>";
                setTimeout(function () {
                    window.location.href = "?cmd=login";
                }, 3000);
            }

        } else {
            alert("something went wrong");
        }
    }
}
function ResetCheckAllFields() {
    var status = false;
    var newPass = document.getElementById('new_pass1').value;
    var newPass2 = document.getElementById('new_pass2').value;

    if (newPass === "" && newPass2 === "") {
        document.getElementById('newpass1_error').innerHTML = "password is required!";
        document.getElementById('newpass1_error').style.color = "#E12B2D";
        document.getElementById('new_pass1').style.border = "1px solid #E12B2D";
        document.getElementById('newpass2_error').innerHTML = "confirm password is required";
        document.getElementById('newpass2_error').style.color = "#E12B2D";
        document.getElementById('new_pass2').style.border = "1px solid #E12B2D";
        status = false;
    } else {
        document.getElementById('newpass1_error').innerHTML = "";
        document.getElementById('new_pass1').style.border = "";
        document.getElementById('newpass2_error').innerHTML = "";
        document.getElementById('new_pass2').style.border = "";
        status = true;

    }
    if (newPass === "") {
        document.getElementById('newpass1_error').innerHTML = "password is required!";
        document.getElementById('newpass1_error').style.color = "#E12B2D";
        document.getElementById('new_pass1').style.border = "1px solid #E12B2D";
        status = false;
    } else {
        document.getElementById('newpass1_error').innerHTML = "";
        document.getElementById('new_pass1').style.border = "";
        status = true;

    }
    if (newPass2 === "") {
        document.getElementById('newpass2_error').innerHTML = "confirm password is required";
        document.getElementById('newpass2_error').style.color = "#E12B2D";
        document.getElementById('new_pass2').style.border = "1px solid #E12B2D";
        status = false;
    } else {
        document.getElementById('newpass2_error').innerHTML = "";
        document.getElementById('new_pass2').style.border = "";
        status = true;
    }
    return status;
}
function ResetCheckPasswordMatch() {
    var status = false;
    var pass1 = document.getElementById('new_pass1').value;
    var pass2 = document.getElementById('new_pass2').value;
    if (pass2 !== pass1) {
        document.getElementById('newpass2_error').innerHTML = "passwords did not match. try again";
        document.getElementById('newpass2_error').style.color = "#E12B2D";
        document.getElementById('new_pass2').style.border = "1px solid #E12B2D";
        status = false;
    } else {
        document.getElementById('newpass2_error').innerHTML = "";
        document.getElementById('new_pass2').style.border = "";
        status = true;
    }
    return status;
}

function ResetCheckPasswordisValid() {
    var status = false;
    var passmain = document.getElementById('new_pass1').value;
    if (passmain.length < 5) {
        document.getElementById('newpass1_error').innerHTML = "password is to short. It must be atleast 5 charactars.";
        document.getElementById('newpass1_error').style.color = "#E12B2D";
        document.getElementById('new_pass1').style.border = "1px solid #E12B2D";
        status = false;
    } else {
        document.getElementById('newpass1_error').innerHTML = "";
        document.getElementById('new_pass1').style.border = "";
        status = true;
    }
    return status;
}
function ResetCheckPasswordisNotAllNumber() {
    var status = false;
    var pass_n = document.getElementById('new_pass1').value;
    var isnum = /^\d+$/.test(pass_n);
    if (isnum) {
        document.getElementById('newpass1_error').innerHTML = "password must be alphanumaric. Only numbers have been entered";
        document.getElementById('newpass1_error').style.color = "#E12B2D";
        document.getElementById('new_pass1').style.border = "1px solid #E12B2D";
        status = false;
    } else {
        document.getElementById('newpass1_error').innerHTML = "";
        document.getElementById('new_pass1').style.border = "";
        status = true;
    }
    return status;
}