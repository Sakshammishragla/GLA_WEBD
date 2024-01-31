const fs=require('fs')
const path=require('path')

let moviePath=path.join(__dirname,'movie.json')
// console.log(__dirname);
// console.log(moviePath);

fs.writeFile(
    moviePath,
    '[{"movie":"sholay","rating":8},{"movie":"Animal","rating":9},{"movie":"12 Fail","rating":8}]',
    {
        encoding:'utf-8',
        flag:"w"
    },
    ((err)=>{
        if(!err) console.log("Success");
        else console.log(err);
    })
)