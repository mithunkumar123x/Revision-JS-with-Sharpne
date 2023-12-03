/*
// const cart = ["shoes" , "pants" , "kurta"];

// api.createOrder(cart , function () {

//     api.proceedToPayment()

// })
        // function () {
        //     api.showOrderSummary(function () {
        //         api.updateWallet()
        //     })
        // })  -> that is also called INVERSION OF CONTROl


// That is UNREADABLE & UNMAINTABLE
/*
0. Importance of Callbacks
1. Issues with Callbacks 
  a. callback hell
  b. Inversion of Control
  



createOrder(cart , function(orderId){
    proceedToPayment(orderId);
});  // we were passing to function to another function

const promise = createOrder(cart);

promise.then(function (orderId) {
    proceedToPayment(orderId) // in this we were attaching a callback function 
})

/* promises gives us gurrantee to after taking orderId than it will call the callback function
 a. it will call it only once
  */

//  const GITHUB_API = "https://api.github.com/users/mithunkumar123x";

//  const user = fetch(GITHUB_API);

// console.log(user);


// // CALL BACK HELL

// createOrder(cart,function (orderId) {

//     proceedToPayment(orderId, function (paymentInfo) {
            
//             showOrderSummary(paymentInfo,function () {
                
//                 updateWalletBalance();
//             });
//         });

// });



// createOrder(cart)
//  .then((orderId) => ValiditCart(orderId));
//  .then((orderId) => proceedToPayment(orderId));
//  .then((paymentInfo) => showOrderSummary(paymentInfo));
//  .then((paymentInfo) => updateWalletBalance(paymentInfo));


const cart = ["shoes", "pants" , "kurtas"];


const promise = createOrder(cart);// 

 // console.log(promise);

promise
 .then(function (orderId) {
    console.log(orderId);
    return orderId;

    //proceed to payment
 })

 .catch(function (err) {
    console.log(err.message);
  })

 .then(function (orderId) {
    return proceedToPayment(orderId)
 })

 .then(function (paymentInfo) {
    console.log(paymentInfo);
 })

 .then(function (orderId) {
    console.log("No matter what happen ,I will definetely be called.");
 })

 

/// Producer

function createOrder(cart) {

    const pr = new Promise(function (resolve , reject) {

    // createOrder
    // validatecart
    // orderId

    if(!ValiditeCart(cart)) {

        const err = new Error("cart is not valid");
        reject(err);
    }

    // logic for createOrder
    const orderId = 123654;
    if(orderId) {
        setTimeout(function () {
            resolve(orderId)
        },5000)
       
    }
 
    });

    return pr;

    function createOrder(cart) {
        
    }

    function  proceedToPayment(orderId) {
        
        return new Promise(function (resolve , reject) {
            resolve("Payment Successful")
        });
    }

    

    function ValiditeCart(cart) {
        return true;
    }
}




// createOrder,proceedToPayment , showOrderSummary , updateWallet










 




