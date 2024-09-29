import { ADD_TO_CART, REMOVE_CART_ITEM, SAVE_SHIPPING_INFO } from "../constants/cartConstant";

export const cartReducer = (state = { cartItems: [], shippingInfo: {} }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newItem = action.payload;
      const existingItemIndex = state.cartItems.findIndex(item => 
        item.productId === newItem.productId && item.size === newItem.size
      );

      if (existingItemIndex !== -1) {
        // If item exists in cart, update it
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingItemIndex] = {
          ...updatedCartItems[existingItemIndex],
          quantity: updatedCartItems[existingItemIndex].quantity + newItem.quantity
        };
        return {
          ...state,
          cartItems: updatedCartItems
        };
      } else {
        // If item doesn't exist in cart, add it
        return {
          ...state,
          cartItems: [...state.cartItems, newItem]
        };
      }

    case REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.productId !== action.payload)
      };

    case SAVE_SHIPPING_INFO:
      return {
        ...state,
        shippingInfo: action.payload
      };

    default:
      return state;
  }
};