console.log("Inside the lib1");

function add(a,b){
return a+b;
}

function sub(a,b){
    return a-b;
}

// console.log(add(10,20));
// console.log(sub(10,20));

module.exports={
    add:add,
    sub:sub
}