window.addEventListener("load", GetSchoolsSub, false);


var getSchools = ceateXMLObjecttoGetSchools();
// Create XML Http Request object  

function ceateXMLObjecttoGetSchools() {
    var getSchools;
    // For Internet Explorer   
    if (window.ActiveXObject) {
        try {
            getSchools = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {
            alert("can't create IE object");
            getSchools = false;
        }
    } else {
        //For Google Chrome and other  
        try {
            getSchools = new XMLHttpRequest();
        } catch (e) {
            getSchools = false;
        }
    }
    if (!getSchools) {
        alert("can't create that object!");
    } else {
        return getSchools;
    }
}
function getSchoolName() {
    if (getSchools.readyState == 4 || getSchools.readyState == 0) {
        filter = document.getElementById('schoolName').style.display = "block";
        //Store the keyword form the search box in a variable  
        var getdistrict = document.getElementById("schooldist");
        var schooldistrict = getdistrict.options[getdistrict.selectedIndex].value;

        /*Send the request, make sure you give 3 parameters  
         1-Method, 2- url, 3- true or false   
         */
        getSchools.open("POST", "ajax.php", true);
        getSchools.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        getSchools.onreadystatechange = handleSchoolResponse;
        getSchools.send("schoold=" + schooldistrict + "&key=true");

    } else {
        alert(getSchools);
    }

}
function handleSchoolResponse() {
    if (getSchools.readyState == 4 || getSchools.readyState == 0) {
        if (getSchools.status == 200) {
            getchoolxmlResponse = getSchools.responseText;
            if (getchoolxmlResponse != "<option value='--'>No Results</option>") {

                document.getElementById("schoolName").innerHTML = getchoolxmlResponse;
            } else {
                document.getElementById("schoolName").innerHTML = "<option value='--'>No results</option>";
            }

        } else {
            alert("something went wrong");
        }
    }
}
function GetSchoolsSub() {
    try {
        x = document.getElementById('schooldist');
        if (typeof x !== 'undifined') {
            x = document.getElementById('schooldist').onchange = getSchoolName;
        }
    } catch (error) {
        console.log(error);
    }

}

