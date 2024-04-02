import kitchenImg from "/assets/Image 11.png";
import healthBeautyImg from "/assets/Image 12.png";
import electronicImg from "/assets/Image 14.png";
import toysImg from "/assets/Image 15.png";
import sportsImg from "/assets/Image 17.png";
import clearnceImg from "/assets/Image 19.png";

export const heroCardData = [
  {
    id: 1,
    heroCardImg: kitchenImg,
    heroCardName: "Home & Kitchen",
    heroCardUrl: "/product-list",
  },
  {
    id: 2,
    heroCardImg: healthBeautyImg,
    heroCardName: "Healthy & Beauty",
    heroCardUrl: "/product-detail",
  },
  {
    id: 3,
    heroCardImg: electronicImg,
    heroCardName: "Electronics",
    heroCardUrl: "/",
  },
  {
    id: 4,
    heroCardImg: toysImg,
    heroCardName: "Toys & Carfts",
    heroCardUrl: "/",
  },
  {
    id: 5,
    heroCardImg: sportsImg,
    heroCardName: "Sports & Leisure",
    heroCardUrl: "/",
  },
  {
    id: 6,
    heroCardImg: clearnceImg,
    heroCardName: "Clearance",
    heroCardUrl: "/",
  },
];

export const filterDiscountNames = [
  {
    label: "90% off or more",
  },
  {
    label: "80% off or more",
  },
  {
    label: "70% off or more",
  },
  {
    label: "60% off or more",
  },
  {
    label: "50% off or more",
  },
  {
    label: "40% off or more",
  },
];

export const filterPriceNames = [
  {
    label: "Under $10",
  },
  {
    label: "$10 - $25",
  },
  {
    label: "$25 - $50",
  },
  {
    label: "$50 - $100",
  },
  {
    label: "Over $100",
  },
];

export const filterCategoryNames = [
  {
    label: "Brand New",
  },
  {
    label: "Open Box",
  },
  {
    label: "Like New",
  },
  {
    label: "Very Good",
  },
  {
    label: "Good",
  },
  {
    label: "Acceptable",
  },
];
