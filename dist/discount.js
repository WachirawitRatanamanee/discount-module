import { onchangeTotalPrice } from "./components/price/rendertotalprice.js";
// Define discount
export const amount = 100;
export const percentage = 10;
export const category = "CLOTHING";
export const amountCategory = 20;
export const customerPoint = 5000;
export const everyXThb = 300;
export const everyYThb = 100;
export let userListItems = [];
export let updatedItems = [];
export const flagCoupon = {
    flagFixAmount: false,
    flagPercentageDiscount: false,
};
export const flagOnTop = {
    flagPercentageDiscountByItemCategory: false,
    flagDiscountByPoints: false,
};
export const flagSpecialCampaigns = {
    flagSpecialCampaigns: false,
};
export const discount = {
    fixedAmountValue: 0,
    percentageDiscountValue: 0,
    percentageDiscountByItemCategoryType: "",
    percentageDiscountByItemCategoryValue: 0,
    discountByPointsValue: 0,
    specialCampaignsXValue: 0,
    specialCampaignsYValue: 0,
};
export const fixedAmount = (amount) => {
    const numItem = updatedItems.length;
    const newItems = updatedItems.map(item => {
        const updatedItem = Object.assign(Object.assign({}, item), { price: item.price - (amount / numItem) });
        return updatedItem;
    });
    return newItems;
};
export const percentageDiscount = (percentage) => {
    const newItems = updatedItems.map(item => {
        const updatedItem = Object.assign(Object.assign({}, item), { price: item.price * (100 - percentage) / 100 });
        return updatedItem;
    });
    return newItems;
};
export const percentageDiscountByItemCategory = (category, amount) => {
    if (category === "") {
        return updatedItems;
    }
    const newItems = updatedItems.map(item => {
        if (item.category == category) {
            const updatedItem = Object.assign(Object.assign({}, item), { price: item.price * (100 - amount) / 100 });
            return updatedItem;
        }
        return item;
    });
    return newItems;
};
export const discountByPoints = (customerPoint) => {
    const numItem = updatedItems.length;
    const totalPrice = updatedItems.reduce((acc, item) => acc + item.price, 0);
    const capped = totalPrice * (20 / 100);
    if (customerPoint > capped) {
        customerPoint = capped;
    }
    const newItems = updatedItems.map(item => {
        const updatedItem = Object.assign(Object.assign({}, item), { price: item.price - customerPoint / numItem });
        return updatedItem;
    });
    return newItems;
};
export const specialCampaigns = (everyXThb, discountYThb) => {
    const numItem = updatedItems.length;
    const totalPrice = updatedItems.reduce((acc, item) => acc + item.price, 0);
    const discount = Math.floor(totalPrice / everyXThb) * discountYThb;
    const newItems = updatedItems.map(item => {
        const updatedItem = Object.assign(Object.assign({}, item), { price: item.price - discount / numItem });
        return updatedItem;
    });
    return newItems;
};
export const calculateDiscount = () => {
    updatedItems = userListItems;
    checkErrorCategory(flagCoupon, "You can't use both Fixed Amount and Percentage Discount at the same time");
    if (flagCoupon.flagFixAmount) {
        updatedItems = fixedAmount(discount.fixedAmountValue);
    }
    if (flagCoupon.flagPercentageDiscount) {
        updatedItems = percentageDiscount(discount.percentageDiscountValue);
    }
    checkErrorCategory(flagOnTop, "You can't use both Percentage Discount By Item Category and Discount By Points at the same time");
    if (flagOnTop.flagPercentageDiscountByItemCategory) {
        updatedItems = percentageDiscountByItemCategory(discount.percentageDiscountByItemCategoryType, discount.percentageDiscountByItemCategoryValue);
    }
    if (flagOnTop.flagDiscountByPoints) {
        updatedItems = discountByPoints(discount.discountByPointsValue);
    }
    if (flagSpecialCampaigns.flagSpecialCampaigns) {
        updatedItems = specialCampaigns(discount.specialCampaignsXValue, discount.specialCampaignsYValue);
    }
    onchangeTotalPrice();
};
const checkErrorCategory = (flag, message) => {
    if ((flag == flagCoupon && flag.flagFixAmount && flag.flagPercentageDiscount) ||
        (flag == flagOnTop && flag.flagPercentageDiscountByItemCategory && flag.flagDiscountByPoints)) {
        setFlagFalse(flag);
        checkCheckBox(flag);
        alert(message);
    }
};
const setFlagFalse = (flag) => {
    if (flag == flagCoupon) {
        flag.flagFixAmount = false;
        flag.flagPercentageDiscount = false;
    }
    if (flag == flagOnTop) {
        flag.flagPercentageDiscountByItemCategory = false;
        flag.flagDiscountByPoints = false;
    }
};
const checkCheckBox = (flag) => {
    let checkBoxPrimary = null;
    let checkBoxSecondary = null;
    if (flag == flagCoupon) {
        checkBoxPrimary = document.getElementById("fixed-amount");
        checkBoxSecondary = document.getElementById("percentage-discount");
    }
    if (flag == flagOnTop) {
        checkBoxPrimary = document.getElementById("percentage-discount-by-item-category");
        checkBoxSecondary = document.getElementById("discount-by-points");
    }
    if (checkBoxPrimary && checkBoxSecondary) {
        resetCheckBox(checkBoxPrimary, checkBoxSecondary);
    }
};
const resetCheckBox = (checkboxPrimary, checkboxSecondary) => {
    checkboxPrimary.checked = false;
    checkboxSecondary.checked = false;
    checkboxPrimary.disabled = false;
    checkboxSecondary.disabled = false;
};
