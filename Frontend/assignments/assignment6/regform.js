function validateForm() {
    var name = document.forms.myForm.fname.value;
    var email = document.forms.myForm.email.value;
    var phone = document.forms.myForm.phone.value;
    var pass = document.forms.myForm.pass.value;
    var cpass = document.forms.myForm.cpass.value;

    var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    var regPhone = /^\d{10}$/;
    var regName = /\d+$/g;

    var flag = true

    if (name == "" || !regName.test(name)) {
        document.getElementById("errfname").innerHTML = "Please enter a valid name";
        flag = false;
    } else {
        document.getElementById("errfname").innerHTML = "";
    }
     
    if (email == "" || !regEmail.test(email)) {
        document.getElementById("erremail").innerHTML = "Please enter a valid e-mail address.";
        flag = false;
    } else {
        document.getElementById("erremail").innerHTML = "";
    }
    
    if (phone == "" || !regPhone.test(phone)) {
        document.getElementById("errphone").innerHTML = "Please enter a valid phone number.";
        flag = false;
    } else {
        document.getElementById("errphone").innerHTML = "";
    }

    if (pass == "") {
        document.getElementById("errpass").innerHTML = "Please enter your password";
        flag = false;
    } else if(pass.length < 6){
        document.getElementById("errpass").innerHTML = "Password should be atleast 6 character long";
        flag = false;
    } else {
        document.getElementById("errpass").innerHTML = "";
    }

    if (cpass == "") {
        document.getElementById("errcpass").innerHTML = "Please enter your password";
        flag = false;
    }  else if(pass != cpass) {
        document.getElementById("errcpass").innerHTML = "Passwords do not match";
        flag = false;
    } else {
        document.getElementById("errcpass").innerHTML = "";
    }
    
    return flag
}
