window.addEventListener("load", ReportChild, false);
function ReportChild() {

    document.getElementById('h_year').onchange = HistoryRunValidations;
    document.getElementById("h_year").addEventListener("change", function (event) {
        event.preventDefault();
    });
}

function HistoryRunValidations() {
    var getyear = document.getElementById("h_year");
    var historyYear = getyear.options[getyear.selectedIndex].value;

    if (historyYear === "--") {
        console.log(historyYear);

    } else {

        try {

            Historyprocess();
        } catch (e) {
            alert(e);
        }

    }
}


var xmlHttpHistory = HistoryXmlHttpRequestObject();
// Create XML Http Request object  

function HistoryXmlHttpRequestObject() {
    var xmlHttpHistory;
    // For Internet Explorer   
    if (window.ActiveXObject) {
        try {
            xmlHttpHistory = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {
            alert("can't create IE object");
            xmlHttpHistory = false;
        }
    } else {
        //For Google Chrome and other  
        try {
            xmlHttpHistory = new XMLHttpRequest();
        } catch (e) {
            xmlHttpHistory = false;
        }
    }
    if (!xmlHttpHistory) {
        alert("can't create that object!");
    } else {
        return xmlHttpHistory;
    }
}

//function which gets triggered on the event onkeyup in search box  
function Historyprocess() {
    if (xmlHttpHistory.readyState == 4 || xmlHttpHistory.readyState == 0) {
        //Store the keyword form the search box in a variable  
        var getyear = document.getElementById("h_year");
        var historyYear = encodeURIComponent(getyear.options[getyear.selectedIndex].value);

        var getChild = document.getElementById("h_child");
        var ChildID = encodeURIComponent(getChild.options[getChild.selectedIndex].value);
        /*Send the request, make sure you give 3 parameters  
         1-Method, 2- url, 3- true or false   
         */
        xmlHttpHistory.open("POST", "ajax.php", true);
        xmlHttpHistory.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlHttpHistory.onreadystatechange = handleHistoryResponse;
        xmlHttpHistory.send("h_year=" + historyYear + "&h_child=" + ChildID);


    } else {
    }
}

var bigArray = [];
function handleHistoryResponse() {
    var jsonData = [];
    if (xmlHttpHistory.readyState == 4 || xmlHttpHistory.readyState == 0) {
        if (xmlHttpHistory.status == 200) {
            var getyear = document.getElementById("h_year");
            var historyYear = encodeURIComponent(getyear.options[getyear.selectedIndex].value);



            var val = xmlHttpHistory.responseText;


            jsonData = JSON.parse(val);

            var a = 0; //jan
            var b = 0; //feb
            var c = 0; //mar
            var d = 0; //apr
            var f = 0; //may
            var g = 0; //jun
            var h = 0; //jul
            var j = 0; //aug
            var k = 0; //sep
            var l = 0; //oct
            var m = 0; //nov
            var n = 0; //dec

            var nov = document.getElementById('nov');
            var hide_m = document.getElementById('history_response');
            hide_m.style.display = "none";
            if (jsonData[0].id !== "no result") {
                for (i = 0; i < jsonData.length; i++) {
                    var reason = jsonData[i].reason;
                    var months = jsonData[i].date_reported;
                    var checkmonths = months.substr(0, 2);
                    console.log(checkmonths);


                    if (checkmonths === "01") {
                        a++;
                        document.getElementById('jan').style.height = 20 * a + "px";
                    }
                    if (checkmonths === "02") {
                        b++;
                        document.getElementById('feb').style.height = 20 * b + "px";
                    }
                    if (checkmonths === "03") {
                        c++;
                        document.getElementById('mar').style.height = 20 * c + "px";
                    }
                    if (checkmonths === "04") {

                        bigArray.push(checkmonths);
                        d++;
                        document.getElementById('apr').style.height = 20 * d + "px";
                    }
                    if (checkmonths === "05") {
                        f++;
                        document.getElementById('may').style.height = 20 * f + "px";
                    }
                    if (checkmonths === "06") {
                        g++;
                        document.getElementById('jun').style.height = 20 * g + "px";
                    }
                    if (checkmonths === "07") {
                        h++;
                        document.getElementById('jul').style.height = 20 * h + "px";
                    }
                    if (checkmonths === "08") {
                        j++;
                        document.getElementById('aug').style.height = 20 * j + "px";
                    }
                    if (checkmonths === "09") {
                        k++;
                        document.getElementById('sep').style.height = 20 * k + "px";
                    }
                    if (checkmonths === "10") {
                        l++;
                        document.getElementById('oct').style.height = 20 * l + "px";
                    }

                    if (checkmonths === "11") {
                        bigArray.push(checkmonths);

                        m++;
                        nov.style.height = 20 * m + "px";
                    }

                    if (checkmonths === "12") {
                        n++;
                        document.getElementById('dec').style.height = 20 * n + "px";
                    }

                }
            } else {
                document.getElementById('jan').style.height = "2px";
                document.getElementById('feb').style.height = "2px";
                document.getElementById('mar').style.height = "2px";
                document.getElementById('apr').style.height = "2px";
                document.getElementById('may').style.height = "2px";
                document.getElementById('jun').style.height = "2px";
                document.getElementById('jul').style.height = "2px";
                document.getElementById('aug').style.height = "2px";
                document.getElementById('sep').style.height = "2px";
                document.getElementById('oct').style.height = "2px";
                nov.style.height = "2px";
                document.getElementById('dec').style.height = "2px";

                console.log(checkmonths);
                jsonData = [];
                console.log(jsonData);
                document.getElementById('history_response').innerHTML = "<p style='color:#F20235;'>There were no records for year: " + historyYear + ".</p>";
                bigArray = [];
                console.log(bigArray);

            }

        } else {
            alert("something went wrong");
        }

    }
}

