function setTimeoutPromisified(duration){
    return new Promise (function(resolve) {
        setTimeout(resolve, duration);   
     });
}
// // setTimeout => setTimoutPromisified (the above code was enough to make the settimeout to a promisified version )

// function callback(){
//     console.log("5 seconds have passed");

// }

// setTimeoutPromisified(5000).then(callback);



// /* callback hell example */

// setTimeout (function() {
//     console.log("hi");
//     setTimeout(function(){
//         console.log("hello");
//         setTimeout(function(){
//             console.log("hello there");
//         } ,5000);
//     } , 3000);
// } , 1000);

// console.log("Before callback hell");


/* promise chaining example */

setTimeoutPromisified(1000)
    .then(function(){
        console.log("hii");
        return setTimeoutPromisified(3000);
    })
    .then(function(){
        console.log("you there");
        return setTimeoutPromisified(5000);
    })
    .then(function(){
        console.log("yayyy");
    
});