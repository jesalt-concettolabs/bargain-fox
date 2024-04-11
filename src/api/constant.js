export const Base_url = import.meta.env.VITE_BASE_URL;

export const sendOTP = `${Base_url}/send-otp`;
export const verifyOTP = `${Base_url}/verify-otp`;
export const registerUser = `${Base_url}/register`;
export const categoryList = `${Base_url}/category-list`;
export const currentUser = `${Base_url}/user-detail`;
export const logoutUser = `${Base_url}/logout`;
export const productList = `${Base_url}/product/list`;
export const newsletter = `${Base_url}/add-newsletter`;
export const productDetail = `${Base_url}/product/detail`;
export const addToCart = `${Base_url}/add-to-cart`;
export const shoppingCartAPI = `${Base_url}/my-cart`;
export const deleteCartProduct = `${Base_url}/remove-from-cart`;
export const currentCartDetail = `${Base_url}/cart-item-count`;
