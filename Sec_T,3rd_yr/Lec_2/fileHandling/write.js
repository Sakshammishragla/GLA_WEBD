const fs=require('fs')
const path=require('path')

let moviePath=path.join(__dirname,'movie.json')
console.log(moviePath);
// console.log(__dirname);

fs.writeFile(
    moviePath,
    '[{"movie":"Animal","rating":8},{"movie":"12 Fail","rating":9},{"movie":"welcome","rating":6}]',
    {
        encoding:'utf-8',
        flag:"w"
    },
    ((err)=>{
        if(!err) console.log("Success");
        else console.log(err);
    })
)