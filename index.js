function random(resolve){
    setTimeout(resolve, 3000);
}

const p = new Promise(random);

function main(){
    console.log("Promise succeded");
}

p.then(main);