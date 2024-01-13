// function z() {

//     var b = 900;
//     function x() {
//         var a = 7;
    
//     function y() {
//             console.log(a , b);
//         }
        
//          y();
          
//     }

//     x();
// }

// z();


// function init() {
//     let name = "Mozilla";

//     function displayName() {
//         console.log(name);
//     }

//     displayName();
// }
// init();

// function outer() {
//     let username = "Mithun";

//    // console.log("OUTER" , secret);

//     function inner() {
//         let secret = "my125"
//         console.log("inner" , username)
//     }

//     function innerTwo () {
//         console.log("innerTwo" , username);
//         console.log(secret);
//     }

   

//     inner();

//     innerTwo();
// }
// outer();



// document.getElementById('orange').onclick = function () {
//     document.body.style.backgroundColor = "orange"
// }

// document.getElementById('green').onclick = function () {
//     document.body.style.backgroundColor = "green"
// }


 // real world scenario of closure 
function clickHandler(color) {
 
//        document.body.style.backgroundColor = `${color}`
      
   return function () {
      document.body.style.backgroundColor = `${color}`
        }

    }

    document.getElementById('orange').onclick = clickHandler("orange")


    document.getElementById('green').onclick = clickHandler("green")





































