window.addEventListener("DOMContentLoaded", ()=>{
    toggleBuyBtn()
})

let counterProduct = 1
const count = document.querySelector(".count")

const toggleBuyBtn = ()=>{
    const p1 = document.querySelector(".p1")
    p1.addEventListener("click", (e)=>{
        if(e.target.className.includes("buyBtn")){
            const btns = p1.querySelector(".btns")
            const buyBtn = p1.querySelector(".buyBtn")

            btns.classList.toggle("hide")
            buyBtn.classList.toggle("hide")
            
            const btnMin = p1.querySelector(".btnMin")
            btnMin.addEventListener("click", minProducts)
            count.innerText = counterProduct
         }
    })

}
const minProducts = ()=>{
    console.log("product");
    if(counterProduct => 0){
        counterProduct = counterProduct-1
        count.innerText = counterProduct

    }
}