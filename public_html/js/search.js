
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
        filter = document.getElementById('filter').style.display = "block";
        //Store the keyword form the search box in a variable  
        userInput = encodeURIComponent(document.getElementById("userInput").value);
        /*Send the request, make sure you give 3 parameters  
         1-Method, 2- url, 3- true or false   
         */
        xmlHttp.open("GET", "ajax.php?userInput=" + userInput, true);
        //set the function which takes care of response  
        xmlHttp.onreadystatechange = handleResponse;
        xmlHttp.send(null);
        window.onchange = changeFunc;
    } else {
    }
}



function handleResponse() {
    if (xmlHttp.readyState == 4 || xmlHttp.readyState == 0) {
        if (xmlHttp.status == 200) {
            xmlResponse = xmlHttp.responseText;
            document.getElementById("filter").innerHTML = xmlResponse;


        } else {
            alert("something went wrong");
        }
    }
}

function changeFunc() {
    var selectBox = document.getElementById("results");
    console.log(selectBox);
    try {
        if (typeof selectBox !== 'undefined') {
            // Now we know that foo is defined, we are good to go.

            var selectedValue = selectBox.options[selectBox.selectedIndex].value;
            document.getElementById("userInput").value = selectedValue;
            document.getElementById("district").value = selectedValue;
            filter = document.getElementById('filter').style.display = "none";
        }
    } catch (e) {
        console.log(e);
    }





}
