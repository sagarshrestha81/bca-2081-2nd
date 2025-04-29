function sub() {
    let formData = document.getElementById("myForm");
    const fullname = formData.fullnamemy.value;
    const email = formData.email.value;
    const password = formData.password.value;
    const err = [];
    console.log(fullname, email, password);

    message = document.getElementsByClassName("msg");
    for(i=0; i<message.length; i++){
        console.log(message[i])
        message[i].innerText = '';
    }
   

    if (!fullname) {
      msg=  document.getElementById("fullnameMsg");
      msg.innerHTML = 
      "<span class='err'>Please enter your name</span>";
    }
    if (!email) {
        msg= document.getElementById("emailMsg");
        msg.innerHTML=  "<span class='err'>Please enter your email</span>";
        console.log("Please enter your email");
    }
    if (!password) {
        msg= document.getElementById("passwordMsg");
        msg.innerHTML=  "<span class='err'>Please enter your password</span>";
        console.log("Please enter your password");
    }
    if(fullname && email && password){
        msg= document.getElementById("formMsg");
        msg.innerHTML=  "form submitted";
        formData.reset();

    }
}
function passwordChecking(){
    const password = document.getElementById("password").value;
    const msg = document.getElementById("passwordMsg");
    console.log(password);
    console.log(password.length);

    
    if(password.length > 8){
        msg.innerHTML=  "<span class='success'>Password is strong</span>";
        
    }else if(password.length > 6){
        msg.innerHTML=  "<span class='warning'>Password is medium</span>";
        
    }else if(password.length > 4 ){
        msg.innerHTML=  "<span class='err'>Password is weak</span>";
    }else{
        msg.innerHTML=  "<span class='err'>Please fill the password</span>";
    }


}