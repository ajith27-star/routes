import Navigation from './Navigation';

export default function Education(){
//   for ( let i=0; i<=50; i++){
//     if (i % 5 === 0) {
//         console.log(i);
//     }
// }
let result = [];
for (let i = 0; i <= 50; i +=5) {
  result.push(i);
}
console.log(result);

    return(
        <>
        <Navigation/>
        {/* <p>school-srvmhss school</p>
        <p>college-hindusthan college of arts and science </p>
        <p>degeree-bsc-information technology</p> */}

    
        </>
    )
}