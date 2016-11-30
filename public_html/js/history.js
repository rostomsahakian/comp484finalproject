window.addEventListener("load", AbsentHistory, false);
function AbsentHistory() {

    document.getElementById('h_child').onchange = function () {

        document.getElementById('h_year').onchange = HistoryRunValidations;

        document.getElementById('h_year').value = "--";
        Historyprocess();
    };
//    document.getElementById("h_year").addEventListener("change", function (event) {
//        event.preventDefault();
//    });


}

function HistoryRunValidations() {

    if (CheckYear() === false) {


    } else {

        try {

            Historyprocess();
        } catch (e) {
            alert(e);
        }

    }
}
function CheckYear() {
    var errors = false;
    var getyear = document.getElementById("h_year");
    var hisYear = getyear.options[getyear.selectedIndex].value;
    console.log(hisYear);
    if (hisYear === "--") {
        document.getElementById('history_response').innerHTML = "<p style='color:#F20235;'>There were no records for year: " + hisYear + ".</p>";
        errors = false;
    } else {
        document.getElementById('history_response').innerHTML = "";
        errors = true;
    }
    return errors;
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
                        document.getElementById('jan').style.height = 10 * a + "px";
                        document.getElementById('jan_num').innerHTML = a;
                        if (a >= 4) {
                            document.getElementById('jan').style.background = "#D00D2D";
                        } else {
                            document.getElementById('jan').style.background = "#00B545";
                        }
                    }
                    if (checkmonths === "02") {
                        b++;
                        document.getElementById('feb').style.height = 10 * b + "px";
                        document.getElementById('feb_num').innerHTML = b;
                        if (b >= 4) {
                            document.getElementById('feb').style.background = "#D00D2D";
                        } else {
                            document.getElementById('feb').style.background = "#00B545";
                        }
                    }
                    if (checkmonths === "03") {
                        c++;
                        document.getElementById('mar').style.height = 10 * c + "px";
                        document.getElementById('mar_num').innerHTML = c;
                        if (c >= 4) {
                            document.getElementById('mar').style.background = "#D00D2D";
                        } else {
                            document.getElementById('mar').style.background = "#00B545";
                        }
                    }
                    if (checkmonths === "04") {

                        bigArray.push(checkmonths);
                        d++;
                        document.getElementById('apr').style.height = 10 * d + "px";
                        document.getElementById('apr_num').innerHTML = d;
                        if (d >= 4) {
                            document.getElementById('apr').style.background = "#D00D2D";
                        } else {
                            document.getElementById('apr').style.background = "#00B545";
                        }
                    }
                    if (checkmonths === "05") {
                        f++;
                        document.getElementById('may').style.height = 10 * f + "px";
                        document.getElementById('may_num').innerHTML = f;
                        if (f >= 4) {
                            document.getElementById('may').style.background = "#D00D2D";
                        } else {
                            document.getElementById('may').style.background = "#00B545";
                        }
                    }
                    if (checkmonths === "06") {
                        g++;
                        document.getElementById('jun').style.height = 10 * g + "px";
                        document.getElementById('jun_num').innerHTML = g;
                        if (g >= 4) {
                            document.getElementById('jun').style.background = "#D00D2D";
                        } else {
                            document.getElementById('jun').style.background = "#00B545";
                        }
                    }
                    if (checkmonths === "07") {
                        h++;
                        document.getElementById('jul').style.height = 10 * h + "px";
                        document.getElementById('jul_num').innerHTML = h;
                        if (h >= 4) {
                            document.getElementById('jul').style.background = "#D00D2D";
                        } else {
                            document.getElementById('jul').style.background = "#00B545";
                        }
                    }
                    if (checkmonths === "08") {
                        j++;
                        document.getElementById('aug').style.height = 10 * j + "px";
                        document.getElementById('aug_num').innerHTML = j;
                        if (j >= 4) {
                            document.getElementById('aug').style.background = "#D00D2D";
                        } else {
                            document.getElementById('aug').style.background = "#00B545";
                        }
                    }
                    if (checkmonths === "09") {
                        k++;
                        document.getElementById('sep').style.height = 10 * k + "px";
                        document.getElementById('sep_num').innerHTML = k;
                        if (k >= 4) {
                            document.getElementById('sep').style.background = "#D00D2D";
                        } else {
                            document.getElementById('sep').style.background = "#00B545";
                        }
                    }
                    if (checkmonths === "10") {
                        l++;
                        document.getElementById('oct').style.height = 10 * l + "px";
                        document.getElementById('oct_num').innerHTML = l;
                        if (l >= 4) {
                            document.getElementById('oct').style.background = "#D00D2D";
                        } else {
                            document.getElementById('oct').style.background = "#00B545";
                        }
                    }

                    if (checkmonths === "11") {
                        bigArray.push(checkmonths);

                        m++;
                        nov.style.height = 10 * m + "px";
                        document.getElementById('nov_num').innerHTML = m;
                        if (m >= 4) {
                            nov.style.background = "#D00D2D";
                        } else {
                            nov.style.background = "#00B545";
                        }
                    }

                    if (checkmonths === "12") {
                        n++;
                        document.getElementById('dec').style.height = 10 * n + "px";
                        document.getElementById('dec_num').innerHTML = n;
                        if (n >= 4) {
                            document.getElementById('dec').style.background = "#D00D2D";
                        } else {
                            document.getElementById('dec').style.background = "#00B545";
                        }
                    }

                }
            } else {
                document.getElementById('jan_num').innerHTML = "";
                document.getElementById('feb_num').innerHTML = "";
                document.getElementById('mar_num').innerHTML = "";
                document.getElementById('apr_num').innerHTML = "";
                document.getElementById('may_num').innerHTML = "";
                document.getElementById('jun_num').innerHTML = "";
                document.getElementById('jul_num').innerHTML = "";
                document.getElementById('aug_num').innerHTML = "";
                document.getElementById('sep_num').innerHTML = "";
                document.getElementById('oct_num').innerHTML = "";
                document.getElementById('nov_num').innerHTML = "";
                document.getElementById('dec_num').innerHTML = "";
                document.getElementById('jan').style.height = "0px";
                document.getElementById('feb').style.height = "0px";
                document.getElementById('mar').style.height = "0px";
                document.getElementById('apr').style.height = "0px";
                document.getElementById('may').style.height = "0px";
                document.getElementById('jun').style.height = "0px";
                document.getElementById('jul').style.height = "0px";
                document.getElementById('aug').style.height = "0px";
                document.getElementById('sep').style.height = "0px";
                document.getElementById('oct').style.height = "0px";
                nov.style.height = "0px";
                document.getElementById('dec').style.height = "0px";


            }

        } else {
            alert("something went wrong");
        }

    }
}

