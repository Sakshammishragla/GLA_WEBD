const fs=require('fs')
const path=require('path')
let moviePath=path.join(__dirname,"movie.json")

console.log(moviePath);


fs.writeFile(
    moviePath,
    '[{"movie":"Animal","imdb":8},{"movie":"12 Fail","imdb":10},{"movie":"salaar","imdb":9}]',
    {
        encoding:'utf-8',
        flag:'w'
    },
    ((err)=>{
        if(!err) console.log("Success")
        else console.log(err);
    })
)