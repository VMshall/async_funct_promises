//  try to create a promisified version of setTimeout , fetch , fs.readFile 

function readFileAsync() {
    return new Promise(function(resolve){
        fs.readFile("a.txt" , "utf-8", function (err, data) {
            resolve(data);

        })
    })
}