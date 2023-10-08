import { CART_ADD_ITEM, CART_REMOVE_ITEM} from '../../constante/cartConstante'

/* PULLING DATA OUT OF LOCAL STORAGE AND LOAD IT INTO INITIAL STATE */
const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];



export const cartReducer = (state = { cartItems: cartItemsFromStorage }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existingItem = state.cartItems.find((x) => x.id === item.id);
      if (existingItem && state.cartItems) {
        existingItem.qty = existingItem.qty || 0 + item.qty || 1;
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.id === existingItem.id ? item : x
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }
    case 'ADD_TO_CART_FAIL':
        return { ...state, error: action.payload };
    case 'REMOVE_FROM_CART_SUCCESS':
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
        
    case 'REMOVE_FROM_CART_FAIL':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

