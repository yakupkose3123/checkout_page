let minesButton1 = document.querySelector("#minesButton1");
let minesButton2 = document.querySelector("#minesButton2");
let minesButton3 = document.querySelector("#minesButton3");
let plusButton1 = document.querySelector("#plusButton1");
let plusButton2 = document.querySelector("#plusButton2");
let plusButton3 = document.querySelector("#plusButton3");
let removeButton1 = document.querySelector("#remove1");
let removeButton2 = document.querySelector("#remove2");
let removeButton3 = document.querySelector("#remove3");

/*Ürünlerin bütünü */
let product1 = document.querySelector("#product1");
let product2 = document.querySelector("#product2");
let product3 = document.querySelector("#product3");

/*ürün miktarları*/
let quantity1 = document.getElementById("product-quantity1");
let quantity2 = document.getElementById("product-quantity2");
let quantity3 = document.getElementById("product-quantity3");

let quantity1Num = Number(quantity1.innerText);
let quantity2Num = Number(quantity2.innerText);
let quantity3Num = Number(quantity3.innerText);
let quantityTotalNum = quantity1Num+quantity2Num+quantity3Num;


 /*ürünlerin birim fiyatları*/
let price1 = document.getElementById("price1");
let price2 = document.getElementById("price2");
let price3 = document.getElementById("price3");

let price1Num = Number(price1.innerText);
let price2Num = Number(price2.innerText);
let price3Num = Number(price3.innerText);

/*her bir ürünün toplam tutarı*/
let linePrice1 = document.querySelector(".product-line-price1");
let linePrice2 = document.querySelector(".product-line-price2");
let linePrice3 = document.querySelector(".product-line-price3");

/*son toplamlar*/

let subtotal = document.querySelector("#subText");
let tax = document.querySelector("#taxText");
let total = document.querySelector("#totalText");
let shipping = document.querySelector("#shippingText");

subtotal.innerHTML = (price1Num+price2Num+price3Num).toFixed(2);
tax.innerText = ((price1Num+price2Num+price3Num)*0.18).toFixed(2);
total.innerText = (((price1Num+price2Num+price3Num)*0.18)+15).toFixed(2);
if(quantityTotalNum!=0){
    shipping.innerText = "15";
}else{
    shipping.innerText = "0";
}




// console.log(price1);
// console.log(typeof price1);

removeButton1.addEventListener("click", () => {
    product1.style.display = "none";
    linePrice1.innerText = "0";
    quantity1 = 0;
    shippingCheck();
    subtotalCheck();
    taxCheck();
    totalCheck();
    
})

removeButton2.addEventListener("click", () => {
    product2.style.display = "none";
    linePrice2.innerText = "0";
    quantity2 = 0;
    shippingCheck();
    subtotalCheck();
    taxCheck();
    totalCheck();

   
})

removeButton3.addEventListener("click", () => {
    product3.style.display = "none";
    linePrice3.innerText = "0";
    quantity3 = 0;
    shippingCheck();
    subtotalCheck();
    taxCheck();
    totalCheck();
   
})

function shippingCheck (){
    if (Number(quantity1.innerText) != 0 || Number(quantity2.innerText) != 0 || Number(quantity3.innerText) != 0 ){
        return shipping.innerText = 15;
    }else{
        return shipping.innerText = 0;
    }
}

function subtotalCheck (){
    return subtotal.innerText = (Number(linePrice1.innerText) + Number(linePrice2.innerText) +Number(linePrice3.innerText)).toFixed(2);
}

function taxCheck (){
    return tax.innerText = ((Number(subtotal.innerText)*18)/100).toFixed(2);  
}

function totalCheck(){
    return total.innerText = (Number(subtotal.innerText)+Number(shipping.innerText)+Number(tax.innerText)).toFixed(2); 
}


minesButton1.addEventListener("click", () => {
    if(quantity1Num != 0){ 
        quantity1Num--;
        quantity1.innerText = quantity1Num;
        linePrice1.innerText = (Number(linePrice1.innerText) - price1Num).toFixed(2);
    }
    shippingCheck()
    subtotalCheck()
    taxCheck()
    totalCheck()
})
minesButton2.addEventListener("click", () => {
    if(quantity2Num != 0){ 
        quantity2Num--;
        quantity2.innerText = quantity2Num;
        linePrice2.innerText = (Number(linePrice2.innerText) - price2Num).toFixed(2);               
    }
    shippingCheck()
    subtotalCheck()
    taxCheck()
    totalCheck()

})
minesButton3.addEventListener("click", () => {
    if(quantity3Num != 0){ 
        quantity3Num--;
        quantity3.innerText = quantity3Num;
        linePrice3.innerText = (Number(linePrice3.innerText) - price3Num).toFixed(2);               
    }
    shippingCheck()
    subtotalCheck()
    taxCheck()
    totalCheck()
})
plusButton1.addEventListener("click", () => {
    quantity1Num++;
    quantity1.innerText = quantity1Num;
    linePrice1.innerText = (Number(linePrice1.innerText) + price1Num).toFixed(2);
    shippingCheck()
    subtotalCheck()
    taxCheck()
    totalCheck()
    
                      
})
plusButton2.addEventListener("click", () => {       
    quantity2Num++;
    quantity2.innerText = quantity2Num;
    linePrice2.innerText = (Number(linePrice2.innerText) + price2Num).toFixed(2); 
    shippingCheck()
    subtotalCheck()
    taxCheck()
    totalCheck()              
})
plusButton3.addEventListener("click", () => {
    quantity3Num++;
    quantity3.innerText = quantity3Num;
    linePrice3.innerText = (Number(linePrice3.innerText) + price3Num).toFixed(2);
    shippingCheck()
    subtotalCheck()
    taxCheck()
    totalCheck()                
})







