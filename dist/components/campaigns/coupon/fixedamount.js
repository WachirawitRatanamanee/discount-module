import { amount, calculateDiscount, discount, flagCoupon, userListItems } from "../../../discount.js";
document.addEventListener("DOMContentLoaded", () => {
    const checkBoxPrimary = document.getElementById("fixed-amount");
    const checkBoxSecondary = document.getElementById("percentage-discount");
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
                flagCoupon.flagFixAmount = true;
                discount.fixedAmountValue = amount;
            }
            else {
                checkBoxSecondary.disabled = false;
                flagCoupon.flagFixAmount = false;
                discount.fixedAmountValue = 0;
            }
            calculateDiscount();
        });
    }
});
