

let topData=JSON.parse(localStorage.getItem("loginData"))

// top ki details jo daalni h

if(topData != null){
    let login=document.getElementById("login_div")
    let signup=document.getElementById("signup_div")
    login.addEventListener("onclick",function(ele){

            ele.parentNode.remove();

    })
   login.innerText="LogOut";
   signup.innerText= "Welcome"+" "+topData[0].mail
}

else{
    window.location.href="http://127.0.0.1:5500/ossified_church_1296/day-3/signup.html"
    alert("SignUp Please")
}