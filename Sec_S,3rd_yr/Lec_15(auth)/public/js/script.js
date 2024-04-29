let allLikeBtn = document.querySelectorAll(".like-btn")


async function likeButton(productId, btn) {
    try {
        await axios({
            method: 'post',
            url: `/products/${productId}/like`
        })
         console.log(btn);
        if (btn.children[0].classList.contains('fa-regular')) {
            btn.children[0].classList.remove('fa-regular')
            btn.children[0].classList.add('fa-solid')
        }
        else {
            btn.children[0].classList.remove('fa-solid')
            btn.children[0].classList.add('fa-regular')
        }


    }
    catch {

    }

}


for (let btn of allLikeBtn) {
    btn.addEventListener("click", () => {
        let productId = btn.getAttribute('product-id')
        // console.log(btn);
        likeButton(productId, btn)
    })
}