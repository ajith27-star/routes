import Navigation from './Navigation';
export default function Problem2() {
  // add two numbers to odd 0r even check the programs?
  // let m=0
  // let n=2
  // if(m+n%2===0){
  //     console.log("even")
  // }
  // else{
  //     console.log("odd")
  // }


  // fibonacci series?
  // let a=0;
  // let b=1;
  // let sum;
  // for (let i=1; i<300; i++){
  //     if(a<300){
  //         console.log(a)
  //     }
  //     sum=a+b;
  //     a=b;
  //     b=sum;

  // }

  // kth characters?
  //  let a="ajith"
  //  let n=1;
  //  let result=""    //PRAVEENKUMAR AJITH
  //   for(let i=0;i<a.length; i++){
  //     if((i+1)%n===0){

  //         result+=a[i].toUpperCase();
  //     }
  //     else{
  //       result+=a[i]
  //     }
  //   }
  //     console.log("result",result)


  //  print the digits of the integer in a single line saperate by space 348?
  // let num = 348;
  // let digits = num.toString().split('').join(" - ");
  //   console.log(digits);
  // let b=num.toString()

  // let baseValue =10;
  // let percentage =2;
  // let result =(100*percentage)/baseValue;
  //   console.log(result);


  // let a = 2
  // let n = 18
  // for (let i = 0; i < n; i++) {
  //   console.log(a)
  // }



   //   let a=4444;
   //   let b=a.toString()
   //   let sum=0;
   //   for(let i=0;i<b.length;i++){
   //      sum += parseInt(b.charAt(i))      
   //   }
   //     console.log(sum)


//    let m=525
//    let n=525    
//    let total=m+n;
//    let check;
//    if(total%2===0){
//     check="even";
//    }else{
//     check="odd";
//    }
//    let a={total,istrue:check}
   
//  console.log(a)



const generateHalfPyramid = () => {
 let R=5
  for (let i = R; i >= 1; i--) {  
    let row = '';
    for (let j = 1; j <= i; j++) {  
      row += j;  
    }
    console.log(row);  
  }
}

generateHalfPyramid();





const alphabet=(s)=> {
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
      sum += s.charCodeAt(i); 
  }
   return sum; 
}
let sampleString = "abc";
let result = alphabet(sampleString);

console.log(result);




const reverseQueue=(queue)=> {
   queue.reverse();
  console.log(queue.join(' ')); 
}
let queue=[1, 2, 3, 4, 5, 6]
reverseQueue(queue);

}
