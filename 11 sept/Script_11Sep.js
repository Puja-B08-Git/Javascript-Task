//Ex.1
// Even odd
// var num=8;
// if(num%2==0){
//     console.log("Even");
// }else{
//     console.log("Odd");
// }
// -----------------------------------------------
// Ex.2
// 10<num<20      ------> Accepted
// otherwise      ------> Rejected

// var num=15;
// if(num>10 && num<20){
//     console.log("Accepted");
// }else{
//     console.log("Rejected");
// }
// -----------------------------------------------
// Ex.3
//  check leap year

// var year = 2024;
// if(year >= 1500){
//     if(year % 4 == 0){
//         console.log("It is Leap year");
//     }else{
//         console.log("It is not a leap year");
//     }
// else{
//     console.log("Invalid entry");
// }
//-------------------------------------------------
// Ex.4
//Display the grade of student on his/her marks
// var marks=18;
// if(marks>=80){
//     console.log("Grade A");
// }
// else if(marks>=60 && marks<=79){
//     console.log("Grade B");
// }
// else if(marks>=35 && marks<=59){
//     console.log("Grade C");
// }
// else{
// console.log("Fail");
// }
//----------------------------------------------------
// Ex.5
//Character is vowel or not?
// var char="e";
// char=char.toLowerCase();
// if(char=="a" || char=="e" || char=="i" || char=="o" || char==u){
//     console.log(char," is a vowel");
// }
// else{
//     console.log(char," is not a vowel");
// }
//-----------------------------------------------------
//Ex.6
//find =ve and -ve using ternary operator
var num=0;
var result = num == 0 ? "Zero" : num > 0 ? "Positive" : "Negative";
console.log(result);
