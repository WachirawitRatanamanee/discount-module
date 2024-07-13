# Author: Wachirawit Ratanamanee

![image](https://github.com/user-attachments/assets/80831d30-f443-4092-acc6-f707b13e020f)

## Rules 
Users can apply multiple discount campaigns in an order. However, there are rules for applying as below:

● Apply only one campaign from the same category, i.e. users have to choose either Fixed amount or Percentage discount.

● The order of applying campaigns is Coupon > On Top > Seasonal.

## Run with Live server
```
run cart.html
```

## You can change discount in file discount.ts
```
export const amount = 100;                             # Used for Fixed Amount Discount                 (Coupon Category)
export const percentage = 10;                          # Used for Percentage Discount                   (Coupon Category)
export const category: categoryItem = "CLOTHING";      # Used for Percentage Discount By Item Category  (On Top Category)
export const amountCategory = 20;                      # Used for Percentage Discount By Item Category  (On Top Category)
export const customerPoint = 500;                      # Used for Discount By Points                    (On Top Category)
export const everyXThb = 300;                          # Used for Special Campaigns                     (Seasonal Category)
export const everyYThb = 100;                          # Used for Special Campaigns                     (Seasonal Category)
```

### Files and Folders stucture
---
```bash
│   cart.html                                                                # Main page, Display all components
│
└───src
    │   discount.ts                                                          # Main Logic to calculated discount
    │
    ├───components
    │   │   renderitem.ts                                                    # Render Item to Add to cart
    │   │
    │   ├───campaigns
    │   │   ├───coupon                                                       # Render Coupon Category Discount and Logic to checked
    │   │   │       fixedamount.ts                                            
    │   │   │       percentagediscount.ts
    │   │   │
    │   │   ├───ontop                                                        # Render On Top Category Discount and Logic to checked
    │   │   │       discountbypoints.ts
    │   │   │       percentagediscountbyitemcategory.ts
    │   │   │
    │   │   └───seasonal                                                     # Render Seasonal Category Discount and Logic to checked
    │   │           specialcampaigns.ts
    │   │
    │   └───price                                                            # Render Price, Total Discount and Total Price
    │           renderdiscount.ts
    │           renderprice.ts
    │           rendertotalprice.ts
    │
    ├───data                                                                 # Store All Items that have name, price, category
    │       item.ts
    │
    └───types                                                                # All types for TypeScript
            dto.d.ts
