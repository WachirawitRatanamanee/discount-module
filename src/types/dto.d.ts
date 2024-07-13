type categoryItem = "CLOTHING" | "ACCESSORIES" | "ELECTRONICS";
type item = {
  name: string;
  price: number;
  category: categoryItem;
};

type discount = {
  fixedAmountValue: number;
  percentageDiscountValue: number;
  percentageDiscountByItemCategoryType: categoryItem | "";
  percentageDiscountByItemCategoryValue: number;
  discountByPointsValue: number;
  specialCampaignsXValue: number;
  specialCampaignsYValue: number;
};

type flagCoupon = {
  flagFixAmount: boolean;
  flagPercentageDiscount: boolean;
};

type flagOnTop = {
  flagPercentageDiscountByItemCategory: boolean;
  flagDiscountByPoints: boolean;
};