let alllikebtn=document.querySelectorAll('.like-btn')

async function likeButton(productId){
  await axios({
    method:'post',
    url:`/products/${productId}/like`
   })
}

for(let btn of alllikebtn){
    btn.addEventListener("click",()=>{
        let productId=btn.getAttribute("product-id")
        console.log(productId);
        likeButton(productId)
    })
}