
window.addEventListener("load", CheckFormStatus, false);

function CheckFormStatus() {

    document.getElementById('dologin').onclick = CallChecks;
    document.getElementById("dologin").addEventListener("click", function (event) {
        event.preventDefault()
    });
}




var xmlHttp = createXmlHttpRequestObject();
// Create XML Http Request object  

function createXmlHttpRequestObject() {
    var xmlHttp;
    // For Internet Explorer   
    if (window.ActiveXObject) {
        try {
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {
            alert("can't create IE object");
            xmlHttp = false;
        }
    } else {
        //For Google Chrome and other  
        try {
            xmlHttp = new XMLHttpRequest();
        } catch (e) {
            xmlHttp = false;
        }
    }
    if (!xmlHttp) {
        alert("can't create that object!");
    } else {
        return xmlHttp;
    }
}

//function which gets triggered on the event onkeyup in search box  
function process() {
    if (xmlHttp.readyState == 4 || xmlHttp.readyState == 0) {
        //filter = document.getElementById('filter').style.display = "block";
        //Store the keyword form the search box in a variable  
        username = encodeURIComponent(document.getElementById("uname").value);
        password = encodeURIComponent(document.getElementById("pass").value);
        /*Send the request, make sure you give 3 parameters  
         1-Method, 2- url, 3- true or false   
         */
        xmlHttp.open("POST", "ajax.php", true);
        xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlHttp.onreadystatechange = handleResponse;
        xmlHttp.send("uname=" + username + "&pass=" + password);


    } else {
    }
}

function CallChecks() {

    if (checkFields() === false) {
        console.log("false");

    } else if (checkUsername() === false) {

    } else if (CheckEmail() === false) {

    } else if (CheckPassword() === false) {

    } else {

        try {

            process();
        } catch (e) {
            alert(e);
        }

    }
}

function handleResponse() {
    if (xmlHttp.readyState == 4 || xmlHttp.readyState == 0) {
        if (xmlHttp.status == 200) {
            xmlResponse = xmlHttp.responseText;
            if (xmlResponse == "no") {
                document.getElementById("login_response").innerHTML = "<p style='color:#E12B2D;'>Authentication failed. You entered an incorrect username or password.</p>";
            } else if (xmlResponse == "user no activated") {
                document.getElementById("login_response").innerHTML = "<p style='color:#E12B2D;'>Your account has not been activated yet. Please check your email and follow the instructions.</p>";
            } else {
                document.getElementById("login_response").innerHTML = "<p style='color:#6DA815;'>We are loggin you in. One moment.</p>";
                setTimeout(function () {
                    window.location.href = "?cmd=account&do=default";
                }, 1000);
            }

        } else {
            alert("something went wrong");
        }
    }
}

function checkFields() {
    var status = false;
    var uname = document.getElementById('uname').value;
    var pass = document.getElementById('pass').value;
    if ((uname === "") && (pass === "")) {
        document.getElementById('uname_e').innerHTML = "User name is required!";
        document.getElementById('pass_e').innerHTML = "password is required";
        document.getElementById('uname_e').style.color = "#E12B2D";
        document.getElementById('uname').style.border = "1px solid #E12B2D";
        document.getElementById('pass').style.border = "1px solid #E12B2D";
        document.getElementById('pass_e').style.color = "#E12B2D";
        status = false;
    } else {
        document.getElementById('uname_e').innerHTML = "";
        document.getElementById('pass_e').innerHTML = "";
        document.getElementById('uname').style.border = "";
        document.getElementById('pass').style.border = "";

        status = true;
    }
    return status;
}

function checkUsername() {
    var status = false;
    var uname = document.getElementById('uname').value;

    if (uname === "") {
        document.getElementById('uname_e').innerHTML = "User name is required!";
        document.getElementById('uname_e').style.color = "#E12B2D";
        document.getElementById('uname').style.borderColor = "#E12B2D";
        document.getElementById('uname').style.border = "1px solid #E12B2D";

        status = false;
    } else {
        document.getElementById('uname_e').innerHTML = "";
        document.getElementById('uname').style.border = "";
        status = true;
    }
    return status;
}

function CheckPassword() {
    var status = false;
    var pass = document.getElementById('pass').value;
    if (pass === "") {
        document.getElementById('pass_e').innerHTML = "password is required";
        document.getElementById('pass_e').style.color = "#E12B2D"
        document.getElementById('pass').style.border = "1px solid #E12B2D";

        status = false;
    } else {
        document.getElementById('pass_e').innerHTML = "";
        document.getElementById('pass').style.border = "";

        status = true;

    }
    return status;
}
function CheckEmail() {
    var status = false;
    var uname = document.getElementById('uname').value;
    var atpos = uname.indexOf("@");
    var dotpos = uname.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= uname.length) {

        document.getElementById('uname_e').innerHTML = "Invalid email is entered. Please try again";
        document.getElementById('uname_e').style.color = "#E12B2D";
        document.getElementById('uname').style.border = "1px solid #E12B2D";
        status = false;
        /*
         * Here I will call the ajax fuction to process the form
         */

    } else {
        document.getElementById('uname_e').innerHTML = "";
        document.getElementById('uname').style.border = "";

        status = true;
    }
    return status;
}












