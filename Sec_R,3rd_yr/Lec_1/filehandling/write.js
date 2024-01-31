const fs=require('fs')

fs.writeFile(
    'movie.txt',
    `{'name':'hera pheri','rating':8},
    {'name':'phir hera pheri','rating':9},
    {'name':'koi mil gaya','rating':7}
    {'name':'welcome','rating':8}`,
    {
        encoding:"utf-8",
        flag:'w'
    },
    ((err)=>{
        if(!err) console.log("Success")
        else console.log(err);
    })
)