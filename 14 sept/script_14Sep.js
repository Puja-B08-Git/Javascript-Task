//var v = alert("You have one notification!");

// var v = confirm("Do you want to quit")

//var v = prompt("Enter your value")
//---------------------------------------------------
//Ex.1
// var a = Number(prompt("Enter a:"));
// var b = Number(prompt("Enter b:"));
// alert(a + b);
//----------------------------------------------------

//Function:
//Name Function
//Ex.1
// function ShowDetails(name,age,city){
//     console.log("Name: " + name);
//     console.log("Age: " + age);
//     console.log("City: " + city);
// }
// ShowDetails("Rahul",23,"Pune");
//------------------------------------------------------
//Ex.2
// function DisplayGrade(m1,m2,m3,m4,m5,m6){
//     var total = m1+m2+m3+m4+m5+m6;
//     var per = total/6;
//     if(per<=100 && per>80){
//         console.log("Grade A");
//     }
//     else if(per<=80 && per>60){
//         console.log("Grade B");
//     }
//     else if(per<=60 && per>=40){
//         console.log("Grade C");
//     }
//     else if(per<=40 && per>=35){
//         console.log("Pass");
//     }
//     else{
//         console.log("fail");
//     }
// }
// var m1=Number(prompt("Enter marks for Marathi :"));
// var m2=Number(prompt("Enter marks for English :"));
// var m3=Number(prompt("Enter marks for Science :"));
// var m4=Number(prompt("Enter marks for Math :"));
// var m5=Number(prompt("Enter marks for Hindi :"));
// var m6=Number(prompt("Enter marks for Social Science :"));
// DisplayGrade(m1,m2,m3,m4,m5,m6);
//-----------------------------------------------------
//Ex.3
// function CalProfit(amt){
//     var Oil = amt * 0.05;
//     var Potato = amt * 0.15;
//     var bessan = amt * 0.1;
//     var pav = amt * 0.2;
//     var gas = amt * 0.05;
//     var other = amt * 0.2;
//     var total_Exp = Oil+Potato+bessan+pav+gas+other;
//     console.log("Oil :"+Oil+" Rs");
//     console.log("Potato :"+Potato+" Rs");
//     console.log("bessan :"+bessan+" Rs");
//     console.log("pav :"+pav+" Rs");
//     console.log("gas :"+gas+" Rs");
//     console.log("Other:"+other+" Rs");
// console.log("Total Expense:"+total_Exp+" Rs");
// var profit = amt-total_Exp;
// console.log("Profit:"+profit+" Rs");
// }
// CalProfit(10000);
//-----------------------------------------------------

// Homework

//Ex.1
// function Area(r){
//     let A = 3.14*r*r;
//    console.log("Area of circle : " + A);
// }
// Area(6);
//-----------------------------------------------------

//Ex.2
// function checkEvenOdd(n){
//     if(n===0){
//         console.log("Number is Zero");
//     }
//     else if(n%2==0){
//         console.log("Number is Even");
//     }
//     else{
//         console.log("Number is Odd");
//     }
// }
// checkEvenOdd(321);
//-----------------------------------------------------

//Ex.3
// function checkPrimeNum(n){
//     let flag=1;
//     for(let i=2;i<=n/2;i++){
//         if(n%i==0){
//             flag=0;
//         }
//     }
//     if(flag==1){
//         console.log("Number is Prime");
//     }
//     else{
//         console.log("Not Prime");
//     }
// }
// var n = Number(prompt("Enter a number : "));
// checkPrimeNum(n);
//-----------------------------------------------------

//Ex.4
// function checkPositiveAndNegative(n){
//     if(n>0){
//         console.log("Number is positive");
//     }
//     else if(n<0){
//         console.log("Number is negative");
//     }
//     else{
//         console.log("Zero");
//     }
// }
// checkPositiveAndNegative(-7);
//-----------------------------------------------------

//Ex.5
// function calculateFactorial(n){
//     let f1=1;
//     for (let i = n; i >= 1; i--) {
//         f1 = f1 * i;
//     }
//     console.log("Factorial = " + f1);
// }
// calculateFactorial(5);

//-----------------------------------------------------

//Ex.6
// function studentDetails(name,age,city,mobNo){
//     console.log("Name :"+name);
//     console.log("Age : "+age);
//     console.log("City : "+city);
//     console.log("mobile No : "+mobNo);
// }
// var name=(prompt("Enter name:"));
// var age=Number(prompt("Enter age:"));
// var city=(prompt("Enter city:"));
// var mobNo=Number(prompt("Enter mobNo:"));
// studentDetails(name,age,city,mobNo);


