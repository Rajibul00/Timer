

let sec = 0
let count = 0;
let flag = 0
let count2  =  document.getElementById('count');
let sec2  =  document.getElementById('sec');
let x ;
function stopwatch (){
    
if(timer==true){
   x =  setInterval(() => {
        count++;
        count2.innerText = count;
        if(count==100){
            count=0;
        sec++;
        sec2.innerText = sec
        };
        
        
        }, 10);
}
}
    





//Start
function start(){

  if(flag==0){
    timer = true
    stopwatch();
    flag++;
  }

console.log(flag);

}
//Pause
function pause(){
 if(flag==1){
    clearInterval(x);
    flag--
 }

 console.log(flag);
}
//Restart
function restart(){
  clearInterval(x);
  count2.innerText= 0;
  sec2.innerText=0
}
