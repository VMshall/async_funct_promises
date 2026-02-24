function WaitFor3S(resolve){
    return new Promise(resolve, 3000);
 
}

function main(){
    console.log("3 seconds have passeed")
}

WaitFor3S(main)