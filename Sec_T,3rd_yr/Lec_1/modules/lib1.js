// console.log("inside the lib1");

function sum(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

// console.log(sum(10,20));
// console.log(sub(10,20));


module.exports={
    sum:sum,
    sub:sub
}