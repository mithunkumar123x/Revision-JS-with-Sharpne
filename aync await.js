/***************** ASYNC AND AWAIT ***********/

/**
 * WHAT IS async?
 * what is await?
 * how async await work behind the scene ?
 * examples of using async / await .
 * Async await vs Promise.then/.catch
 * 
 */




const p = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("Promise Resolved Value !!!");
    }, 10000);
});

//  await can only be used inside an async function
async function handlePromises() {
    console.log("Hello World!!");
    // JS engine wait for promise to resolved
    const val = await p;
    console.log("Namastey Javascript");
    console.log(val);

    const val2 = await p ;
    console.log("Namastey Javascript");
    console.log(val2);
}

handlePromises();






/*
function getdata() {
    p.then((res) => console.log(res));
}

getdata();

*/

// always return promise 
// async function getData() {
//     return p;
// }

// const dataPromise = getData();

// dataPromise.then((res) => console.log(res));

// async and await combo are handle to promises.


