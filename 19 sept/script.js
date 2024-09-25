// function add(){
//     let sum=0;
//     for(let i=0;i<arguments.length;i++){
//         sum+=arguments[i];
//     }
//     return sum
// }
//-------------------------------------------
// (function add(){
//         let sum=0;
//         for(let i=0;i<arguments.length;i++){
//             sum+=arguments[i];
//         }
//         console.log(sum);
//     })(3,78,56);
//----------------------------------------------
function Multi(){
    let M=1;
    for(let i=0;i<arguments.length;i++){
        M*=arguments[i];
    }
    return M;
}