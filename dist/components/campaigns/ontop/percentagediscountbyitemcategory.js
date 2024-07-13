import { amountCategory, calculateDiscount, category, discount, flagOnTop, userListItems } from "../../../discount.js";
document.addEventListener("DOMContentLoaded", () => {
    const checkBoxPrimary = document.getElementById("percentage-discount-by-item-category");
    const checkBoxSecondary = document.getElementById("discount-by-points");
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
                flagOnTop.flagPercentageDiscountByItemCategory = true;
                discount.percentageDiscountByItemCategoryType = category;
                discount.percentageDiscountByItemCategoryValue = amountCategory;
            }
            else {
                checkBoxSecondary.disabled = false;
                flagOnTop.flagPercentageDiscountByItemCategory = false;
                discount.percentageDiscountByItemCategoryType = "";
                discount.percentageDiscountByItemCategoryValue = 0;
            }
            calculateDiscount();
        });
    }
});
