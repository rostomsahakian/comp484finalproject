///* 
// * To change this license header, choose License Headers in Project Properties.
// * To change this template file, choose Tools | Templates
// * and open the template in the editor.
// */

//window.onload = AllRightsReserved;
function hideForgotpassword(){
    document.getElementById('resetform').style.display = "block";
}
function ShowForgotPassword() {

    document.getElementById('resetform').style.display = "none";
    
    document.getElementById('f_pass').onclick = hideForgotpassword;


}
window.onload = ShowForgotPassword;