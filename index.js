function random(resolve){  // resolved is automatically being called with main as an argument when the promise is created.
    setTimeout(resolve, 3000);
}

const p = new Promise(random);

function main(){
    console.log("Promise succeded");
}

p.then(main);

// // promises are represntation of eventally completed (or failed ) asynchronous operation and its resulting value.




/* Define your own Async function (should read the contents of the file , trim the extra spacing back and forth and also write back to the file ) */


// function onDone(){
//     console.log("file has been cleaned");
// }
// cleanfile(a.txt).then(onDone);