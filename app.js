var otpGenerator=()=>{
        var ind=parseInt(document.querySelector("#otp").value);
        var otp="";
        for(var i=0;i<ind;i++){
          var temp=parseInt(Math.random()*10);
          otp=otp+temp;
        }
        document.querySelector("#otp").value=" ";
        
        document.querySelector(".res").innerHTML=otp;

}