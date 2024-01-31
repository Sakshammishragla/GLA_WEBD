// console.log("Inside the lib 2");

function sum(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

// console.log(sum(20,30));
// console.log(sub(10,20));

module.exports={
    sum:sum,
    sub:sub
}