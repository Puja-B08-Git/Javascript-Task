//while loop

//Ex.1
// let i=0;
// while(i<=10){
//     console.log(i);
//     i++;
// }
//-----------------------------------------------------
// let a;
// a=Number(prompt("Enter your number:"));
//-----------------------------------------------------
//Ex.2

// let i=0;
// loop1 : while (i <= 10){
//     i++;
//     console.log(i);
//     if(i==5){
//         break loop1;
//     }
// }
//-----------------------------------------------------
//Ex.3

// let i=0;
// loop1 : while (i <= 10){
// i++;
// if(i==5){
//     continue loop1;
// }
// console.log(i);
// }
//-----------------------------------------------------
//Ex. 4.1
// let i=1;
// let count = 1;
// while(i<=5){
//     let j=1;
//     while(j<=5){
//         console.log(count++);
//         j++;
//     }
//     i++;
// }
//-----------------------------------------------------
//Ex.4.2
// let i=1;
// let count = 1;
// while(i<=5){
//     let j=1;
//     for(let j=1;j<=5;j++){
//         console.log(count++);
//     }
//     i++;
// }
//-----------------------------------------------------
//Ex.4.3
// let count = 1;
// for (let i = 1; i <= 5; i++) {
//     let j = 1;
//     while (j <= 5) {
//         console.log(count++);
//         j++;
//     }
// }
//-----------------------------------------------------
// Ex.5
// num = Math.floor(Math.random()*100)+1;
// flag=1;
// count=0;
// while (flag==1){
//     count++;
//     guess = Number(prompt("Enter your number : "));
//     if(guess===num){
//         console.log("You win!");
//         flag=0;
//     }
//     else if(guess>num){
//         console.log("Guess small number  than" + guess);
//     }
//     else{
//         console.log("Guess big number than" + guess);
//     }
// }
// console.log("You take",count,"guesses!");
// document.write("Win!🥳");

//-----------------------------------------------------

//do-while loop

//Ex.1
// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while(i<=10);
//----------------------------------------------------

//Ex.2
// let i = 0;
// loop1: do {
//     i++;
//     console.log(i);
//     if (i == 5) {
//         break loop1;
//     }
// } while (i <= 10);
//-----------------------------------------------------

//Ex.3
// let i=0;
// loop1 : do{
// i++;
// if(i==5){
//     continue loop1;
// }
// console.log(i);
// }while (i <= 10)
//-----------------------------------------------------

//Ex.4.1
// let i=1;
// let count = 1;
// do{
//     let j=1;
//     while(j<=5){
//         console.log(count++);
//         j++;
//     }
//     i++;
// }while(i<=5)
//-----------------------------------------------------

//Ex.4.2
// let i=1;
// let count = 1;
// do{
//     let j=1;
//     for(let j=1;j<=5;j++){
//         console.log(count++);
//     }
//     i++;
// }while(i<=5)
//-----------------------------------------------------

//Ex.4.3
let count = 1;
for (let i = 1; i <= 5; i++) {
    let j = 1;
    do{
        console.log(count++);
        j++;
    }
}while (j <= 5)

 //----------------------------------------------------
 //Ex.5
//  num = Math.floor(Math.random()*100)+1;
// flag=1;
// count=0;
// do{
//     count++;
//     guess = Number(prompt("Enter your number : "));
//     if(guess===num){
//         console.log("You win!");
//         flag=0;
//     }
//     else if(guess>num){
//         console.log("Guess small number  than" + guess);
//     }
//     else{
//         console.log("Guess big number than" + guess);
//     }
// }while (flag==1)
// console.log("You take",count,"guesses!");
// document.write("Win!🥳");

