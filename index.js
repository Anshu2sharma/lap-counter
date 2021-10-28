// document.getElementById('myelement').innerHTML="";



// const num =document.getElementById('myelement');

// let count = 1 ;

// setInterval(() => {
   //    count++;
   //   num.innerText= count;
   // }, 1000);
   
   
   let count = 0;
   const clicked = () => {
   
      const num = document.getElementById('myelement');
      
      count++;
      num.innerText = count;
   }
   
   let count1 = 0;
   const reset =()=>{
      const num = document.getElementById('myelement');
      num.innerText = count1;
      
   }