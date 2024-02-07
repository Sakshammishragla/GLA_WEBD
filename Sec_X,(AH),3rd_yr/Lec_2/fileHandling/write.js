const fs=require('fs')
const path=require('path')

let movieDir=path.join(__dirname,'movie.json')
console.log(movieDir);

// console.log(__dirname);

fs.writeFile(
     movieDir,
    '[{"movie":"golmaal","rating":8},{"movie":"animal","rating":87},{"movie":"12 Fail","rating":8}]',
    {
        encoding:"utf-8",
        flag:'w'
    },
    ((err)=>{
        if(!err) console.log("Success!");
        else console.log(err);
    })
)