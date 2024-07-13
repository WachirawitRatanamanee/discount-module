import { calculateDiscount, discount, everyXThb, everyYThb, flagSpecialCampaigns, userListItems } from "../../../discount.js";

document.addEventListener("DOMContentLoaded", () => {
  const checkBox = <HTMLInputElement>document.getElementById("special-campaigns");

  if (checkBox) {
    checkBox.addEventListener("click", () => {
      const checked = checkBox.checked;

      if (userListItems.length === 0) {
        alert("You must have at least one item in the cart");
        checkBox.checked = false;
        return;
      }

      if (checked) {
        flagSpecialCampaigns.flagSpecialCampaigns = true;
        discount.specialCampaignsXValue = everyXThb;
        discount.specialCampaignsYValue = everyYThb;
      } else {
        flagSpecialCampaigns.flagSpecialCampaigns = false;
        discount.specialCampaignsXValue = 0;
        discount.specialCampaignsYValue = 0;
      }
      calculateDiscount();
    });
  }
});
