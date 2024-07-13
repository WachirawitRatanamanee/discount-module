import { calculateDiscount, customerPoint, discount, flagOnTop, userListItems } from "../../../discount.js";

document.addEventListener("DOMContentLoaded", () => {
  const checkBoxPrimary = <HTMLInputElement>document.getElementById("discount-by-points");
  const checkBoxSecondary = <HTMLInputElement>document.getElementById("percentage-discount-by-item-category");

  if (checkBoxPrimary && checkBoxSecondary) {
    checkBoxPrimary.addEventListener("click", () => {
      const checked = checkBoxPrimary.checked;

      if (userListItems.length === 0) {
        alert("You must have at least one item in the cart");
        checkBoxPrimary.checked = false;
        return;
      }

      if (checked) {
        checkBoxSecondary.disabled = true;
        flagOnTop.flagDiscountByPoints = true;
        discount.discountByPointsValue = customerPoint;
      } else {
        checkBoxSecondary.disabled = false;
        flagOnTop.flagDiscountByPoints = false;
        discount.discountByPointsValue = 0;
      }
      calculateDiscount();
    });
  }
});
