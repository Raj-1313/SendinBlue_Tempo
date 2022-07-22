let form=document.querySelector("form").addEventListener("submit",getdata)
    
let array=JSON.parse(localStorage.getItem("signupData"))|| []
function getdata(ele){
ele.preventDefault();
let obj={
   mail:document.getElementById("email").value,
   pass:document.getElementById("password").value
}
 if(obj.pass=="" || obj.mail=="" ){
    alert("Invalid Input")
}

else{
    alert("Sign up succesfull")
  array.push(obj);
    localStorage.setItem("signupData",JSON.stringify(array));
    window.location.href="login.html"
}
}   