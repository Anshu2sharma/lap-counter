


let num1 = 0;

const clicked = () => {
   // console.log("clicked ");
   const num = document.getElementById('myelement');
   num1++;
   num.innerText = num1;
}


const unclicked = () => {
   // console.log("clicked ");
   const num = document.getElementById('myelement');
   if (num1>0) {
      num1--;
      
   }else(num1)
   num.innerText = num1;
}





 let num=0;
 
 setInterval(() => {
   const timer = document.getElementById('timer');   
   timer.innerHTML=num++;
 }, 1000);

 
