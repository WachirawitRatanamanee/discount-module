import { calculateDiscount, discount, flagCoupon, percentage, userListItems } from "../../../discount.js";
document.addEventListener("DOMContentLoaded", () => {
    const checkBoxPrimary = document.getElementById("percentage-discount");
    const checkBoxSecondary = document.getElementById("fixed-amount");
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
                flagCoupon.flagPercentageDiscount = true;
                discount.percentageDiscountValue = percentage;
            }
            else {
                checkBoxSecondary.disabled = false;
                flagCoupon.flagPercentageDiscount = false;
                discount.percentageDiscountValue = 0;
            }
            calculateDiscount();
        });
    }
});
