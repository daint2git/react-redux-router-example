import * as Types from 'ConstantsPath/ActionTypes';

var initialState = [];

const products = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_PRODUCTS:
      state = action.products;
      return [...state];
    default: return [...state];
  }
};

export default products;