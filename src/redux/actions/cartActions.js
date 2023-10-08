import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../../constante/cartConstante";
import axios from "axios";

import { getCookie } from "../../utils/getCookie";

export const addToCart = (slug, qty) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post(`/api/add-to-cart/${slug}`,
        { qty });
        console.log(data, 'addCart')
        dispatch({ 
            type: 'ADD_TO_CART_SUCCESS', 
            payload: {
                ...data,
                qty: Number(data.qty),
            }
        });
        localStorage.setItem('cartItems', JSON.stringify(getState().addToCart.cartItems));
      } catch (error) {
        dispatch({ type: 'ADD_TO_CART_FAIL', payload: error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message, 
        });
      }
  };

  
  export const removeCart = (id) => async (dispatch, getState) => {
    const csrftoken = getCookie('csrftoken');
    const headers = {
      'X-CSRFToken': csrftoken
    };
    try {
      await axios.delete(`/api/remove-from-cart/${id}`, { headers });
      dispatch({ 
          type: 'REMOVE_FROM_CART_SUCCESS', 
          payload: id,
      });
      localStorage.setItem('cartItems', JSON.stringify(getState().addToCart.cartItems.filter(item => item.id !== id)));
    } catch (error) {
      dispatch({ 
          type: 'REMOVE_FROM_CART_FAIL', 
          payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };
  