let password= "Harsha1234";
let containNumber=/\d/.test(password);
let containUppercase=/[A-Z]/.test(password);
var lengthCheck=password.length>=8;
if( containNumber && containUppercase && lengthCheck){
    console.log("strong password");
}else{
    console.log("weak password");
}