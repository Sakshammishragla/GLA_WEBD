let alllikebtn = document.querySelectorAll('.like-btn')

async function likeButton(productId, btn) {
    await axios({
        method: 'post',
        url: `/products/${productId}/like`
    })


    console.log(btn.children[0]);

    if (btn.children[0].classList.contains('fa-regular')){
        btn.children[0].classList.remove("fa-regular")
        btn.children[0].classList.add("fa-solid")
    }
    else{
        btn.children[0].classList.add('fa-regular')
        btn.children[0].classList.remove('fa-solid')
    }
}

for (let btn of alllikebtn) {
    btn.addEventListener("click", () => {
        let productId = btn.getAttribute("product-id")
        console.log(productId);
        likeButton(productId, btn)
    })
}