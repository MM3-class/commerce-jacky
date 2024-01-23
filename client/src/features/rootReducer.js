import { combineReducers } from "redux";
import flashSaleReducer from "../features/products/flashSale/flashSaleSlice";
import bestSellingReducer from "../features/products/bestSelling/bestSellingSlice";
import exploreProductsReducer from "../features/products/exploreProducts/exploreProductsSlice";
import filterReducer from "../features/filter/filterSlice";
import singleProductReducer from "../features/singleProduct/singleProductSlice";
import cartReducer from "./cart/cartSlice";
import personalFormReducer from "./personalForm/personalFormSlice";
import couponFormReducer from "./couponForm/couponFormSlice";
import favoriteReducer from "./favorite/favoriteSlice";
import buyNowReducer from "./buyNow/buyNowSlice";
import searchTermReducer from "./searchTerm/searchTermSlice";
const rootReducer = combineReducers({
  flashSale: flashSaleReducer,
  bestSelling: bestSellingReducer,
  exploreProducts: exploreProductsReducer,
  filter: filterReducer,
  singleProduct: singleProductReducer,
  cart: cartReducer,
  personalForm: personalFormReducer,
  couponForm: couponFormReducer,
  favorite: favoriteReducer,
  buyNow: buyNowReducer,
  searchTerm: searchTermReducer
});

export default rootReducer;
