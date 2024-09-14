//loops
//Ex.1 print 1 to 100
// for(let i=1;i<=100;i++){
//     console.log(i);
// }
//---------------------------------------------------
//Ex.2 print table of 5
// var n=5;
// for(var i=1;i<=10;i++)
// {
//     console.log(n + " * " + i +" = " + i * n);
// }
//-----------------------------------------------------
//Ex.3 learn break
// loop1 : for(let i=1;i<10;i++){
//     if(i==5){
//         break loop1;
//     }
//     console.log(i);
// }
//-----------------------------------------------------
//Ex.4 learn continue
// loop1 : for(let i=0;i<=10;i++){
//     if(i==5){
//         continue loop1;
//     }
//     console.log(i);
// }
//-----------------------------------------------------
//Ex.5 print all even number which is divisible by 6 from 20 to 50
// for(let i=20;i<=50;i++){
//     if(i%6==0){
//         console.log(i);
//     }
// }
//-----------------------------------------------------
//Ex.6 print all numbers between 1 to 500 which are divisible by 4 as well as 7
// for(i=1;i<=500;i++){
//     if(i%4==0 && i%7==0){
//         console.log(i);
//     }
// }
//-----------------------------------------------------
//Ex.7 print no is prime or not
// var flag=1;
// var n=97;
// for(let i=2;i<=n/2;i++){
//     if(n%i==0){
//         flag=0;
//     }
// }
// if(flag==1){
//     console.log("prime number");
// }
// else{
//     console.log("Not a prime number");
// }
//-----------------------------------------------------
//Ex.8 print 1 to 25 using nested for loop
// let count = 1;
// for(let i=1;i<=5;i++){
//     for(let j=1;j<=5;j++){
//         console.log(count++);
//     }
// }
//-----------------------------------------------------
//Ex.9 print pattern
// for(let i=1;i<=5;i++){
//     let patturn = " ";
//     for(j=1;j<=5-i+1;j++){
//         patturn += j+" ";
//     }
//     console.log(patturn);
// }
//-----------------------------------------------------
//Ex.10 Accept a password from user & give only 3 chance to unlock device
var pass;
for(let i=1;i<=3;i++){
    var pass =prompt("Enter pass :");
    if (pass === "1234"){
        console.log("Device unlocked");
        break;
    }
}