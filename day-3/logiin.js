let form=document.querySelector("form").addEventListener("submit",comparedata)
let dataLS=JSON.parse(localStorage.getItem("signupData"))
console.log(dataLS);
function comparedata(e){
  e.preventDefault();
  let obj={
    mail:document.getElementById("mail").value,
    pass:document.getElementById("pass").value,
}
let ans=false
dataLS.forEach(function(ele){
    
    if(obj.mail== ele.mail && obj.pass==ele.pass){
     ans=true
    //  break;
       return
    }
    
})
if(ans==true){
    window.location.href="http://127.0.0.1:5500/ossified-church-1296/day-2/index.html"
    
  }else{
      alert("Account does'nt exist. Signup Please")
              window.location.href="signup.html"
            }
    
   }