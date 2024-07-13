import { userListItems } from "../../discount.js";

export let sumPrice = 0;

const renderPrice = () => {
  const itemsElement = document.getElementById("sum-price");
  if (itemsElement) {
    itemsElement.innerHTML =
      `<div>
      <br>
        <div>your Price: ${sumPrice}</div>
      <br>
    </div>`;
  }
};

renderPrice();

export const onchangePrice = () => {
  sumPrice = userListItems.reduce((acc, item) => acc + item.price, 0);
  renderPrice();
};
