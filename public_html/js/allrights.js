/*
 * @author: Arin Zargarian
 * @date: 11/26/2016
 */

function AllRightsReserved() {
    var today = new Date();
    var year = today.getFullYear();
    console.log(year);
    document.getElementById('rightsres').innerHTML = 'All Rights Reserved ' + year;


}
window.addEventListener("load", AllRightsReserved, false);
