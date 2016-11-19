var xm = cx();
// Create XML Http Request object  

function cx() {
    var xm;
    // For Internet Explorer   
    if (window.ActiveXObject) {
        try {
            xm = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {
            alert("can't create IE object");
            xm = false;
        }
    } else {
        //For Google Chrome and other  
        try {
            xm = new XMLHttpRequest();
        } catch (e) {
            xm = false;
        }
    }
    if (!xm) {
        alert("can't create that object!");
    } else {
        return xm;
    }
}
function getSchoolName() {
    if (xm.readyState == 4 || xm.readyState == 0) {
        filter = document.getElementById('sresults').style.display = "block";
        //Store the keyword form the search box in a variable  
        userSchools = encodeURIComponent(document.getElementById("district").value);
        /*Send the request, make sure you give 3 parameters  
         1-Method, 2- url, 3- true or false   
         */
        xm.open("GET", "ajax.php?district=" + userSchools, true);
        //set the function which takes care of response  
        xm.onreadystatechange = handleSchoolResponse;

        xm.send(null);
    } else {
        alert(xm);
    }

}
function handleSchoolResponse() {
    if (xm.readyState == 4 || xm.readyState == 0) {
        if (xm.status == 200) {
            xmlResponse = xm.responseText;
            if (xmlResponse != "No results") {
                document.getElementById("sresults").innerHTML = xmlResponse;
            } else {
                document.getElementById("nresults").style.display = "none";
            }

        } else {
            alert("something went wrong");
        }
    }
}

function GetSchoolsSub() {
    try {
        x = document.getElementById('subd');
        if (typeof x !== 'undifined') {
            x = document.getElementById('subd').onclick = getSchoolName;
        }
    } catch (error) {
        console.log(error);
    }

}
window.addEventListener("load", GetSchoolsSub, false);

