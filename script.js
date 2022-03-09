window.addEventListener("DOMContentLoaded", ()=>{
    toggleBuyBtn()
})

const product = Array.from(document.querySelectorAll(".product"))
let counterProduct = 0

const toggleBuyBtn = ()=>{
    for(let i = 0; i<product.length ; i++){
        product[i].addEventListener("click", (e)=>{
            if(e.target.className.includes("buyBtn")){
                const count = product[i].querySelector(".count")
                const buyBtn = product[i].querySelector(".buyBtn")
                const btns = product[i].querySelector(".btns")
                buyBtn.classList.add("hide")
                btns.classList.remove("hide")
                count.innerText = counterProduct+1
                
                minProducts(product[i], count, buyBtn, btns)
                addProducts(product[i], count)


             }
        })
    }
}
const minProducts = (product, count, buyBtn, btns)=>{
    
    const btnMin = product.querySelector(".btnMin")
    btnMin.addEventListener("click", ()=>{
        if(counterProduct > 0){
            counterProduct -= 1
            count.innerText = counterProduct
        }else{
            buyBtn.classList.remove("hide")
            btns.classList.add("hide")
        }
        console.log("minProducts", counterProduct);
    })
}

const addProducts = (product, count)=>{
    
    const btnAdd = product.querySelector(".btnAdd")
    btnAdd.addEventListener("click", ()=>{
            counterProduct += 1
            count.innerText = counterProduct
            console.log("addproducts", counterProduct);
    })
}