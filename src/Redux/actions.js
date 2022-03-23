import { SELECTED_PRODUCT, GET_PRODUCT } from "../Redux/actionTypes";
import axios from "axios";
// action for get products request
const getProductsReq = () => ({

});

// action for get products success

const getProductsSuccess = (getproductsData) => ({
  type: SELECTED_PRODUCT,
  payload: getproductsData.response,
});

// action for get products failure

const getProductsFailure = () => ({});

// thunk call to fetch products  list
export const getproductsData =  () => {
    return async function (dispatch){
 const response = await axios.get(
   "https://movie-fake-server.herokuapp.com/products"
 );
 dispatch({ type: GET_PRODUCT, payload: response });
    }
   
 
};

// action object for sort  feature

const sortProducts = () => ({});
