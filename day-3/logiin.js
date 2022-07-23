let form=document.querySelector("form").addEventListener("submit",comparedata)
let dataLS=JSON.parse(localStorage.getItem("signupData"))

let loginLS=JSON.parse(localStorage.getItem("loginData")) || []

// console.log(dataLS);
function comparedata(e){
  loginLS=[]
  e.preventDefault();
  let obj={
    mail:document.getElementById("mail").value,
    pass:document.getElementById("pass").value,
}
let ans=false
dataLS.forEach(function(ele){
    
    if(obj.mail== ele.mail && obj.pass==ele.pass){
      ans=true
      console.log(obj);
   loginLS.push(obj)
    localStorage.setItem("loginData",JSON.stringify(loginLS))
   alert("matched")
       return
    }
    
    
})
if(ans==true){
    window.location.href="http://127.0.0.1:5500/ossified_church_1296/day-2/index.html"
    
  }else{
      alert("Account does'nt exist. Signup Please")
              window.location.href="signup.html"
            }
    
   }