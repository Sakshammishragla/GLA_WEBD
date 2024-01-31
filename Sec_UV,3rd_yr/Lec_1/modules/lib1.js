console.log("Inside lib1");

function sum(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

// console.log(sum(10,30));
// console.log(sub(10,20))

module.exports={
    sum,
    sub
}