/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function AllRightsReserved() {
    var today = new Date();
    var year = today.getFullYear();
    console.log(year);
    document.getElementById('rightsres').innerHTML = 'All Rights Reserved ' + year;


}
window.addEventListener("load", AllRightsReserved, false);
