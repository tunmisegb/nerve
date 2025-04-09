/*function setcookie(){
    var u =document.getElementById('username').value
    var p=document.getElementById('password').value

    document.cookie="myusername"+u+";path=http://127.0.0.1:5500/index.html";
    document.cookie="mypassword"+p+";path=http://127.0.0.1:5500/index.html"; 
}*/
const inputEmail = document.getElementById('inputEmail');
const inputPassword = document.getElementById('inputPassword');
const loGin = document.getElementById('loGin');
let mail;
loGin.onclick = function (){
    mail = inputEmail.value;
}