

window.addEventListener("load", CheckFP, false);

function CheckFP() {

    document.getElementById('doreset').onclick = FPCallChecks;
    document.getElementById("doreset").addEventListener("click", function (fp) {
        fp.preventDefault()
    });
}

var xmlReq = createxmlReqObject();
// Create XML Http Request object  

function createxmlReqObject() {
    var xmlReq;
    // For Internet Explorer   
    if (window.ActiveXObject) {
        try {
            xmlReq = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {
            alert("can't create IE object");
            xmlReq = false;
        }
    } else {
        //For Google Chrome and other  
        try {
            xmlReq = new XMLHttpRequest();
        } catch (e) {
            xmlReq = false;
        }
    }
    if (!xmlReq) {
        alert("can't create that object!");
    } else {
        return xmlReq;
    }
}

//function which gets triggered on the event onkeyup in search box  
function FPprocess() {
    if (xmlReq.readyState == 4 || xmlReq.readyState == 0) {
        //filter = document.getElementById('filter').style.display = "block";
        //Store the keyword form the search box in a variable  
        email = encodeURIComponent(document.getElementById("r_pass").value);
        /*Send the request, make sure you give 3 parameters  
         1-Method, 2- url, 3- true or false   
         */
        xmlReq.open("POST", "ajax.php", true);
        xmlReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlReq.onreadystatechange = handleFPResponse;
        xmlReq.send("r_pass=" + email);


    } else {
    }
}

function FPCallChecks() {
    if (CheckEntry() === false) {

    } else if (CheckFPEmail() === false) {

    } else {

        try {

            FPprocess();
        } catch (e) {
            alert(e);
        }

    }
}

function handleFPResponse() {
    if (xmlReq.readyState == 4 || xmlReq.readyState == 0) {
        if (xmlReq.status == 200) {
            xmlResponse = xmlReq.responseText;
            if (xmlResponse == "no") {
                document.getElementById("fp_error").innerHTML = "<p style='color:#E12B2D;'>Oops! we are unable to find that email. Please check your email and try again</p>";
            } else {
                document.getElementById("fp_error").innerHTML = "<p style='color:#F69C55;'>We are sending an email. Please follow the instructions and reset your password.</p>";
                setTimeout(function () {
                    window.location.href = "?cmd=login";
                }, 2000);
            }

        } else {
            alert("something went wrong");
        }
    }
}

function CheckFPEmail() {
    var status = false;
    var email = document.getElementById('r_pass').value;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {

        document.getElementById('fp_error').innerHTML = "Invalid email is entered. Please try again";
        document.getElementById('fp_error').style.color = "#E12B2D";
        document.getElementById('r_pass').style.border = "1px solid #E12B2D";
        ;
        status = false;
        /*
         * Here I will call the ajax fuction to process the form
         */

    } else {
        document.getElementById('fp_error').innerHTML = "";
        document.getElementById('r_pass').style.border = "";

        status = true;
    }
    return status;
}
function CheckEntry() {
    var status = false;
    var fpemail = document.getElementById('r_pass').value;

    if (fpemail === "") {
        document.getElementById('fp_error').innerHTML = "Email is required!";
        document.getElementById('fp_error').style.color = "#E12B2D";
        document.getElementById('r_pass').style.border = "1px solid #E12B2D";

        status = false;
    } else {
        document.getElementById('fp_error').innerHTML = "";
        document.getElementById('r_pass').style.border = "";
        status = true;
    }
    return status;
}


