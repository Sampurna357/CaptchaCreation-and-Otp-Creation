var otpGenerator=()=>{
        var ind=parseInt(document.querySelector("#otp").value);
        var otp="";
        for(var i=0;i<ind;i++){
          var temp=parseInt(Math.random()*10);
          otp=otp+temp;
        }
       
        var divtag=document.createElement('div');
        divtag.setAttribute("class","event");
        divtag.innerHTML=otp;

        document.querySelector(".res").append(divtag);

}
var validate=(event)=>{
       
      if(event.keyCode>=48 && event.keyCode<=57){
        return true;
      }
      else{
  
        return false;
      }

        
}