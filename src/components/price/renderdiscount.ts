import { sumPrice } from "./renderprice.js";
import { totalPrice } from "./rendertotalprice.js";

let sumDiscount = 0;

const renderDiscount = () => {
  const itemsElement = document.getElementById("sum-discount");
  if (itemsElement) {
    itemsElement.innerHTML =
      `<div>
      <br>
        <div>your Discount: ${sumDiscount}</div>
      <br>
    </div>`;
  }
};

renderDiscount();

export const onchangeDiscount = () => {
  sumDiscount = sumPrice - totalPrice;
  renderDiscount();
};
