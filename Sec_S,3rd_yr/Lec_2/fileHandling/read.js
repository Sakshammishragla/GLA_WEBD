const fs=require('fs')
const path=require('path')

let moviePath=path.join(__dirname,"movie.json")

fs.readFile(
  moviePath,
  {
    encoding:'utf-8'
  },
  ((err,data)=>{
    if(err) console.log(err);
    else console.log(data);
  })
)