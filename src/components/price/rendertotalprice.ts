import { updatedItems } from "../../discount.js";
import { onchangeDiscount } from "./renderdiscount.js";

export let totalPrice = 0;

const renderTotalPrice = () => {
  const itemsElement = document.getElementById("total-price");
  if (itemsElement) {
    itemsElement.innerHTML =
      `<div>
      <br>
        <div>Total Price: ${totalPrice}</div>
      <br>
    </div>`;
  }
};

renderTotalPrice();

export const onchangeTotalPrice = () => {
  totalPrice = Math.round(updatedItems.reduce((acc, item) => acc + item.price, 0));
  renderTotalPrice();
  onchangeDiscount();
};
