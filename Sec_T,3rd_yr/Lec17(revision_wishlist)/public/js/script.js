let alllikebtn = document.querySelectorAll(".like-btn")


async function likeButton(productId,button) {
    await axios({
        method: 'post',
        url: `/products/${productId}/like`
    })
    console.log(button);
}

for (let btn of alllikebtn) {
    btn.addEventListener("click", () => {
        let productId = btn.getAttribute('product-id')
        likeButton(productId,btn)
    })
}