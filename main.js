const input_length=document.getElementsByClassName("input")[0];
const btn=document.getElementsByClassName("btn")[0];
const strpassword=document.getElementsByClassName("strong-password")[0];
const wkpassword=document.getElementsByClassName("weak-password")[0];
const funpassword=document.getElementsByClassName("funny-password")[0];
const copyButton=document.getElementsByClassName("img-btn")[0];
arr=[`Hello World`,`Cat`,`Dog`,`pat`,`pot`,`hot`,`jet`,`rat`,`can`,`hey`,`Down`,`Wolf`,`Bird`,`fail`,`rail`,
`Funny Password`,`Error`,
`Cool Person`,`Superstar`,`Narcissistic`,`Imagine`
,`Avengers`,`HerryPotor`,`11111`,`Master`,`Apple`,`Myself`,`Friday`,`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Saturday`,`Sunday`,`Rover`,`Rebbel`];
str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
num=`123456789`;
sp=`@#$%^&*!"_->`;
class Password{
    funnyPassword(){
      let fun=Math.floor(Math.random()*arr.length+1);
      input_length.value=arr[fun];  
    }
    strongPassword(n){
     let pass,pass1,pass2,final=0;
       for(let i=1;i<=n;i++){
         let fun=Math.floor(Math.random()*str.length+1);
           let fun1=Math.floor(Math.random()*sp.length+1);
           let fun2 =Math.floor(Math.random()*num.length+1);
           pass=str.charAt(fun);
          pass1= num.charAt(fun2);
          pass2= sp.charAt(fun1);
          final+=(pass+pass1+pass2);
       }
       final=final.substring(0,n)
      input_length.value=final;
    }
  weakPassword(n){
    let pass,pass1,pass2,final=0;
    for(let i=1;i<=n;i++){
      let fun=Math.floor(Math.random()*str.length+1);
        let fun2 =Math.floor(Math.random()*num.length+1);
        pass=str.charAt(fun);
       pass1= num.charAt(fun2);
       final+=(pass+pass1);
    }
    final=final.substring(0,n)
   input_length.value=final;
  }
}
const generatePassword=()=>{
   let pass= new Password();
   
   if((funpassword.checked) &&(!strpassword.checked) &&(!wkpassword.checked)){
    pass.funnyPassword();
   }
   else if((strpassword.checked) &&(!wkpassword.checked) &&(!funpassword.checked)){
    if(input_length.value<=3){
      return;
}
else{
    pass.strongPassword(input_length.value);
    setTimeout(()=>{
        input_length.value='';
    },4000)}
}
else if((wkpassword.checked) &&(!strpassword.checked) &&(!funpassword.checked)){
  if(input_length.value<=3){
    return;
}
else{
  pass.weakPassword(input_length.value);
 setTimeout(()=>{
    input_length.value='';
},4000)}
}
}
copyClipboard=()=>{
    input_length.select();
    document.execCommand("copy");
}
copyButton.addEventListener("click",copyClipboard);
btn.addEventListener("click",generatePassword);
