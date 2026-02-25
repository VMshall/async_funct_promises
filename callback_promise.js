// function WaitFor3S(resolve){
//     return new Promise(resolve, 3000);
 
// }

// function main(){
//     console.log("3 seconds have passeed");
// }

// WaitFor3S(main);


function waitfor3s(resolve){
    setTimeout(resolve, 3000);
}
function setTimeoutPromisified(){
    return new Promise(waitfor3s);
}

function main(){
    console.log("3 seconds passed")
}


setTimeoutPromisified().then(main);

