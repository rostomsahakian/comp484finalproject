
window.addEventListener("load", EditGetSchoolsSub, false);

setTimeout(function () {
    //alert(document.getElementById("eschooldist").value);
}, 2000);
var EditSchools = ceateXMLObjecttoEditSchools();
// Create XML Http Request object  

function ceateXMLObjecttoEditSchools() {
    var EditSchools;
    // For Internet Explorer   
    if (window.ActiveXObject) {
        try {
            EditSchools = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {
            alert("can't create IE object");
            EditSchools = false;
        }
    } else {
        //For Google Chrome and other  
        try {
            EditSchools = new XMLHttpRequest();
        } catch (e) {
            EditSchools = false;
        }
    }
    if (!EditSchools) {
        alert("can't create that object!");
    } else {
        return EditSchools;
    }
}

function EditSchoolName() {
    if (EditSchools.readyState == 4 || EditSchools.readyState == 0) {
        filter = document.getElementById('eschoolName').style.display = "block";
        //Store the keyword form the search box in a variable  
        var egetdistrict = document.getElementById("eschooldist");
        var eschooldistrict = egetdistrict.options[egetdistrict.selectedIndex].value;
        console.log(egetdistrict);
        /*Send the request, make sure you give 3 parameters  
         1-Method, 2- url, 3- true or false   
         */
        EditSchools.open("POST", "ajax.php", true);
        EditSchools.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        EditSchools.onreadystatechange = handleEditSchoolResponse;
        EditSchools.send("editschool=" + eschooldistrict);

    } else {
        alert(EditSchools);
    }

}
function handleEditSchoolResponse() {
    if (EditSchools.readyState == 4 || EditSchools.readyState == 0) {
        if (EditSchools.status == 200) {
            EditgetchoolxmlResponse = EditSchools.responseText;
            if (EditgetchoolxmlResponse != "<option value='--'>No Results</option>") {

                document.getElementById("eschoolName").innerHTML = EditgetchoolxmlResponse;
            } else {
                document.getElementById("eschoolName").innerHTML = "<option value='--'>No results</option>";
            }

        } else {
            alert("something went wrong");
        }
    }
}
function EditGetSchoolsSub() {

    try {

        document.getElementById('eschooldist').onchange = EditSchoolName;



    } catch (error) {
        console.log(error);
    }


}
