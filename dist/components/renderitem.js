import { tShirt, hat, hoodle, watch, bag, belt } from "../data/item.js";
import { calculateDiscount, userListItems } from "../discount.js";
import { onchangeDiscount } from "./price/renderdiscount.js";
import { onchangePrice } from "./price/renderprice.js";
import { onchangeTotalPrice } from "./price/rendertotalprice.js";
const allItems = [tShirt, hat, hoodle, watch, bag, belt];
const cart = document.getElementById("cart");
if (cart) {
    cart.innerHTML = allItems.map((item, index) => `<div>
      <div>Name: ${item.name}</div>
      <div>Price: ${item.price}</div>
      <div>Category: ${item.category.toLowerCase()}</div>
      <button style="font-size:18px" id="${index}"> Add this Item to your cart! </button>
      <br><br>
    </div>`).join('');
}
document.addEventListener("DOMContentLoaded", () => {
    allItems.map((item, index) => {
        const btn = document.getElementById(index.toString());
        if (btn) {
            btn.addEventListener('click', () => {
                userListItems.push(item);
                calculateDiscount();
                onchangePrice();
                onchangeTotalPrice();
                onchangeDiscount();
            });
        }
        ;
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("show-items");
    if (btn) {
        btn.addEventListener('click', () => {
            console.log("Your Items: ", userListItems);
        });
    }
});
