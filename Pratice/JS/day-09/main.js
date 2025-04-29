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