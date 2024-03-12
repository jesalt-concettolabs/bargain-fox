import flowerImg from "/assets/flowers.png";

export const silderSetting = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: false,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const producrDesc = [
  "Stylish design: Fashionable lapel coat with a solid color that will never go out of style",
  "Versatile: Perfect for fall and winter, suitable for both casual and formal occasions",
  "Comfortable: Made of high-quality materials that are soft and cozy to wear",
  "Convenient: Equipped with pockets to keep your hands warm or store small items",
  "Easy to match: V-neck design makes it easy to match with different outfits",
];

export const ratingDetails = [
  {
    id: "1",
    ratingStar: "5",
    totalRating: "2546",
  },
  {
    id: "2",
    ratingStar: "4",
    totalRating: "5238",
  },
  {
    id: "3",
    ratingStar: "3",
    totalRating: "8232",
  },
  {
    id: "4",
    ratingStar: "2",
    totalRating: "3124",
  },
  {
    id: "5",
    ratingStar: "1",
    totalRating: "2145",
  },
];

export const customerImages = [flowerImg, flowerImg, flowerImg, flowerImg];

export const customerReviews = [
  {
    id: 1,
    imgUrl: flowerImg,
    custName: "Celina Peterburg",
    ratingDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sed atque, impedit modi veniam sunt corrupti earum perspiciatis, aliquam natus esse cupiditate quia libero blanditiis, omnis fugiat similique in ducimu",
    ratingDate: "10 July 2021",
  },
  {
    id: 2,
    imgUrl: flowerImg,
    custName: "loremhkjhk",
    ratingDesc:
      "A very good quality fabric top. Same as shown. Fitting is just perfect. And as expected. All over I liked this top very much. Low price . Love it !",
    ratingDate: "10 July 2021",
  },
  {
    id: 3,
    imgUrl: flowerImg,
    custName: "ewgfnlanfclknc",
    ratingDesc:
      "A very good quality fabric top. Same as shown. Fitting is just perfect. And as expected. All over I liked this top very much. Low price . Love it !",
    ratingDate: "10 July 2021",
  },
];

export const colors = ["#F76F3D", "#000000", "#327E07", "#8185E8", "#1B3497"];

export const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
