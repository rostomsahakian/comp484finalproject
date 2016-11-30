/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



//
//function GetTime(){
//    var time_val = document.getElementById('c_time').value;
//    
//}
window.addEventListener("load", EarlyCheckout, false);
function EarlyCheckout() {

    document.getElementById('picker').onchange = showHiddenDiv;
    document.getElementById('hour').onchange = CheckTime;
    document.getElementById('min').onchange = CheckTime;


    console.log(CheckTime());

}
function showHiddenDiv() {
    var ifother = document.getElementById("picker");
    var other = encodeURIComponent(ifother.options[ifother.selectedIndex].value);
    if (other === "other") {
        document.getElementById('who').style.display = "block";

    } else {
        document.getElementById('who').style.display = "none";
    }
}

function CheckTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();

    var input_h = document.getElementById('hour');
    var hr = input_h.options[input_h.selectedIndex].value;
    var input_m = document.getElementById('min');
    var min = input_m.options[input_m.selectedIndex].value;

    var h = "";
    if (hours > 12) {
        h = hours - 12;

        if (h < 10) {
            h = "0" + h;
        } else if (h >= 10) {
            h = h;
        }
    } else {
        h = hours;
        if (h < 10) {
            h = "0" + h;
        } else if (h >= 10) {
            h = h;
        }
    }
    if (hr < h) {

        document.getElementById('hour').value = h;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
        if (min < minutes) {
            document.getElementById('min').value = minutes;
        }
    }


    console.log(minutes);

    console.log(min);


    console.log(h);
}