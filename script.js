window.addEventListener("DOMContentLoaded", ()=>{
    getAndChangeCards()
})


const getAndChangeCards = ()=>{
    const product = Array.from(document.querySelectorAll(".product"))

    for(let i = 0; i<product.length ; i++){
        product[i].addEventListener("click", (e)=>{
            const cartElements= getElements(product[i])
            
            if(e.target.className.includes("buyBtn")){
                toggleBtns(cartElements)
            }
            if(e.target.className.includes("btnMin")){
                minProducts(cartElements)
            }
            if(e.target.className.includes("btnAdd")){
                addProducts(cartElements)
            }
        })
    }
}

const getElements = (product)=>{
    const elements = {
    count : product.querySelector(".count"),
    buyBtn : product.querySelector(".buyBtn"),
    btns : product.querySelector(".btns"),
    counterProduct : Number(product.querySelector(".count").innerText),
    cartCount : document.getElementById("cartCount"),
    cartCountNumber : Number(document.getElementById("cartCount").innerText),
    }
    return elements
}

const minProducts = ({counterProduct, count, buyBtn, btns, cartCount, cartCountNumber})=>{
    if(counterProduct > 1){
        counterProduct -= 1
        count.innerText = counterProduct
        cartCountNumber -= 1
        cartCount.innerText = cartCountNumber
    }else{
        buyBtn.classList.remove("hide")
        btns.classList.add("hide")
        cartCountNumber -= 1
        cartCount.innerText = cartCountNumber
    }
}

const addProducts = ({counterProduct, count, cartCount, cartCountNumber})=>{
    counterProduct += 1
    count.innerText = counterProduct
    cartCountNumber += 1
    cartCount.innerText = cartCountNumber
    
}
const toggleBtns = ({buyBtn, btns, cartCount, cartCountNumber})=>{
    buyBtn.classList.add("hide")
    btns.classList.remove("hide")
    cartCountNumber += 1
    cartCount.innerText = cartCountNumber
}