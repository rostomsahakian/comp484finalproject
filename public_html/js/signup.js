window.addEventListener("load", signupCheckFormStatus, false);

function signupCheckFormStatus() {

    document.getElementById('dosignup').onclick = signupValidation;
    document.getElementById("dosignup").addEventListener("click", function (event) {
        event.preventDefault()
    });
}


/***************************************************
 * Signup signupprocess
 * *************************************************
 */


var signupxmlHttp = createXmlHttpRequestObject();
// Create XML Http Request object  

function createXmlHttpRequestObject() {
    var signupxmlHttp;
    // For Internet Explorer   
    if (window.ActiveXObject) {
        try {
            signupxmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {
            alert("can't create IE object");
            signupxmlHttp = false;
        }
    } else {
        //For Google Chrome and other  
        try {
            signupxmlHttp = new XMLHttpRequest();
        } catch (e) {
            signupxmlHttp = false;
        }
    }
    if (!signupxmlHttp) {
        alert("can't create that object!");
    } else {
        return signupxmlHttp;
    }
}

//function which gets triggered on the event onkeyup in search box  
function signupprocess() {
    if (signupxmlHttp.readyState == 4 || signupxmlHttp.readyState == 0) {
        //filter = document.getElementById('filter').style.display = "block";
        //Store the keyword form the search box in a variable  
        dosignup = encodeURIComponent(document.getElementById("dosignup").value);
        var sfname = encodeURIComponent(document.getElementById('fname').value);
        var mname = encodeURIComponent(document.getElementById('mname').value);
        var slname = encodeURIComponent(document.getElementById('lname').value);
        var susername = encodeURIComponent(document.getElementById('username').value);
        var srelation = encodeURIComponent(document.getElementById('relation').value);
        var stelephone1 = encodeURIComponent(document.getElementById('tel1').value);
        var stelephone2 = encodeURIComponent(document.getElementById('tel2').value);
        var spassOne = encodeURIComponent(document.getElementById('pass1').value);
        //password = encodeURIComponent(document.getElementById("pass").value);
        /*Send the request, make sure you give 3 parameters  
         1-Method, 2- url, 3- true or false   
         */
        signupxmlHttp.open("POST", "ajax.php", true);
        signupxmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        signupxmlHttp.onreadystatechange = signuphandleResponse;
        signupxmlHttp.send("dosignup=" + dosignup + "&fname=" + sfname + "&mname="+mname+
                "&lname="+slname+"&username="+susername+"&relation="+srelation+"&tel1="+stelephone1+"&tel2="+stelephone2+"&pass1="+spassOne);


    } else {
    }
}

function signupValidation() {

    if (signupAllFieldsValidation() === false) {
        console.log("false");
    } else if (signupCheckPasswordMatch() === false) {
    } else if (signupCheckPasswordisValid() === false) {
    } else if (signupCheckPasswordisNotAllNumber() === false) {
    } else {

        try {

            signupprocess();
        } catch (e) {
            alert(e);
        }

    }
}

function signuphandleResponse() {
    if (signupxmlHttp.readyState == 4 || signupxmlHttp.readyState == 0) {
        if (signupxmlHttp.status == 200) {
            xmlResponse = signupxmlHttp.responseText;
            if (xmlResponse == "user exsits") {
                document.getElementById("signup_response").innerHTML = "<p style='color:#E12B2D;'>The email you have entered is already registered with us.</p>";
            } else {
                document.getElementById("signup_response").innerHTML = "<p style='color:#6DA815;'>We have send you and email. To activate your account please login to your email and follow the link.</p>";
                setTimeout(function () {
                    window.location.href = "?cmd=signup";
                }, 3000);
            }

        } else {
            alert("something went wrong");
        }
    }
}

function signupAllFieldsValidation() {
    var status = false;
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var username = document.getElementById('username').value;
    var relation = document.getElementById('relation').value;
    var telephone = document.getElementById('tel1').value;
    var passOne = document.getElementById('pass1').value;
    var passTwo = document.getElementById('pass2').value;

    if (fname === "" && lname === "" && username === "" && relation === "" && telephone === "" && passOne === "" && passTwo === "") {
        /*
         * errors
         */
        document.getElementById('fname_e').innerHTML = "first name is required";
        document.getElementById('lname_e').innerHTML = "last name is required";
        document.getElementById('uname_e').innerHTML = "Username is required!";
        document.getElementById('relation_e').innerHTML = "relation is required";
        document.getElementById('tel1_e').innerHTML = "Atleast one phone number is required";
        document.getElementById('pass1_e').innerHTML = "password is required";
        document.getElementById('pass2_e').innerHTML = "confirm password is required";
        /*
         * error call styles
         */
        document.getElementById('fname_e').style.color = "#E12B2D";
        document.getElementById('lname_e').style.color = "#E12B2D";
        document.getElementById('uname_e').style.color = "#E12B2D";
        document.getElementById('relation_e').style.color = "#E12B2D";
        document.getElementById('tel1_e').style.color = "#E12B2D";
        document.getElementById('pass1_e').style.color = "#E12B2D";
        document.getElementById('pass2_e').style.color = "#E12B2D";
        /*
         * input fields styles
         */
        document.getElementById('fname').style.border = "1px solid #E12B2D";
        document.getElementById('lname').style.border = "1px solid #E12B2D";
        document.getElementById('username').style.border = "1px solid #E12B2D";
        document.getElementById('relation').style.border = "1px solid #E12B2D";
        document.getElementById('tel1').style.border = "1px solid #E12B2D";
        document.getElementById('pass1').style.border = "1px solid #E12B2D";
        document.getElementById('pass2').style.border = "1px solid #E12B2D";


        status = false;
    } else {
        document.getElementById('fname_e').innerHTML = "";
        document.getElementById('lname_e').innerHTML = "";
        document.getElementById('uname_e').innerHTML = "";
        document.getElementById('relation_e').innerHTML = "";
        document.getElementById('tel1_e').innerHTML = "";
        document.getElementById('pass1_e').innerHTML = "";
        document.getElementById('pass2_e').innerHTML = "";

        document.getElementById('fname').style.border = "";
        document.getElementById('lname').style.border = "";
        document.getElementById('username').style.border = "";
        document.getElementById('relation').style.border = "";
        document.getElementById('tel1').style.border = "";
        document.getElementById('pass1').style.border = "";
        document.getElementById('pass2').style.border = "";
        status = true;
    }

    if (fname == "") {
        document.getElementById('fname_e').innerHTML = "first name is required";
        document.getElementById('fname_e').style.color = "#E12B2D";
        document.getElementById('fname').style.border = "1px solid #E12B2D";
        status = false;
    } else {
        document.getElementById('fname_e').innerHTML = "";
        document.getElementById('fname').style.border = "";
        status = true;
    }

    if (lname === "") {
        document.getElementById('lname_e').innerHTML = "last name is required";
        document.getElementById('lname_e').style.color = "#E12B2D";
        document.getElementById('lname').style.border = "1px solid #E12B2D";
        status = false;

    } else {
        document.getElementById('lname_e').innerHTML = "";
        document.getElementById('lname').style.border = "";
        status = true;
    }
    if (username === "") {
        document.getElementById('uname_e').innerHTML = "Username is required!";
        document.getElementById('uname_e').style.color = "#E12B2D";
        document.getElementById('username').style.border = "1px solid #E12B2D";
        status = false;
    } else {
        document.getElementById('uname_e').innerHTML = "";
        document.getElementById('username').style.border = "";
        status = true;
    }

    var atpos = username.indexOf("@");
    var dotpos = username.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= username.length) {

        document.getElementById('uname_e').innerHTML = "Invalid email is entered. Please try again";
        document.getElementById('uname_e').style.color = "#E12B2D";
        document.getElementById('username').style.border = "1px solid #E12B2D";
        status = false;

    } else {
        document.getElementById('uname_e').innerHTML = "";
        document.getElementById('username').style.border = "";

        status = true;
    }


    if (relation === "") {
        document.getElementById('relation_e').innerHTML = "relation is required";
        document.getElementById('relation_e').style.color = "#E12B2D";
        document.getElementById('relation').style.border = "1px solid #E12B2D";
        status = false;
    } else {
        document.getElementById('relation_e').innerHTML = "";
        document.getElementById('relation').style.border = "";
        status = true;
    }
    if (telephone === "") {
        document.getElementById('tel1_e').innerHTML = "Atleast one phone number is required";
        document.getElementById('tel1_e').style.color = "#E12B2D";
        document.getElementById('tel1').style.border = "1px solid #E12B2D";
        status = false;
    } else {
        document.getElementById('tel1_e').innerHTML = "";
        document.getElementById('tel1').style.border = "";
        status = true;
    }

    if (passOne === "") {
        document.getElementById('pass1_e').innerHTML = "password is required";
        document.getElementById('pass1_e').style.color = "#E12B2D";
        document.getElementById('pass1').style.border = "1px solid #E12B2D";
        status = false;
    } else {
        document.getElementById('pass1_e').innerHTML = "";
        document.getElementById('pass1').style.border = "";
        status = true;
    }

    if (passTwo === "") {
        document.getElementById('pass2_e').innerHTML = "confirm password is required";
        document.getElementById('pass2_e').style.color = "#E12B2D";
        document.getElementById('pass2').style.border = "1px solid #E12B2D";
        status = false;
    } else {
        document.getElementById('pass2_e').innerHTML = "";
        document.getElementById('pass2').style.border = "";
        status = true;
    }

    return status;
}
function signupCheckPasswordMatch() {
    var status = false;
    var pass1 = document.getElementById('pass1').value;
    var pass2 = document.getElementById('pass2').value;
    if (pass2 !== pass1) {
        document.getElementById('pass2_e').innerHTML = "passwords did not match. try again";
        document.getElementById('pass2_e').style.color = "#E12B2D";
        document.getElementById('pass2').style.border = "1px solid #E12B2D";
        status = false;
    } else {
        document.getElementById('pass2_e').innerHTML = "";
        document.getElementById('pass2').style.border = "";
        status = true;
    }
    return status;
}

function signupCheckPasswordisValid() {
    var status = false;
    var passmain = document.getElementById('pass1').value;
    if (passmain.length < 5) {
        document.getElementById('pass1_e').innerHTML = "password is to short. It must be atleast 5 charactars.";
        document.getElementById('pass1_e').style.color = "#E12B2D";
        document.getElementById('pass1').style.border = "1px solid #E12B2D";
        status = false;
    } else {
        document.getElementById('pass1_e').innerHTML = "";
        document.getElementById('pass1').style.border = "";
        status = true;
    }
    return status;
}
function signupCheckPasswordisNotAllNumber() {
    var status = false;
    var pass_n = document.getElementById('pass1').value;
    var isnum = /^\d+$/.test(pass_n);
    if (isnum) {
        document.getElementById('pass1_e').innerHTML = "password must be alphanumaric. Only numbers have been entered";
        document.getElementById('pass1_e').style.color = "#E12B2D";
        document.getElementById('pass1').style.border = "1px solid #E12B2D";
        status = false;
    } else {
        document.getElementById('pass1_e').innerHTML = "";
        document.getElementById('pass1').style.border = "";
        status = true;
    }
    return status;
}












