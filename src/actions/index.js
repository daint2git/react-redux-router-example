import * as Types from 'ConstantsPath/ActionTypes';
import ApiCaller from 'ApiPath/ApiCaller';

export const actionFetchProductsRequest = () => {
  return (dispatch) => {
    ApiCaller('products', 'get', null).then(response => {
      dispatch(actionFetchProducts(response.data));
    });
  }
};

export const actionFetchProducts = (products) => {
  return {
    type: Types.FETCH_PRODUCTS,
    products
  }
};