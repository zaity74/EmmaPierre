import { getCookie } from "../../utils/getCookie";
import axios from "axios";

export const listeCategorie = () => async (dispatch) => {
    const csrftoken = getCookie('csrftoken');
    const headers = {
      'X-CSRFToken': csrftoken
    };
    try {
        const { data } = await axios.get(`/api/categories/`,
        { headers });
        dispatch({ 
            type: 'ADD_CATEGORIES_SUCCESS', 
            payload: data
        });
      } catch (error) {
        dispatch({ type: 'ADD_CATEGORIES_FAIL', payload: error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
        });
      }
  };

export const filterProductByCategorie = (id) => async (dispatch) => {
    const csrftoken = getCookie('csrftoken');
    const headers = {
      'X-CSRFToken': csrftoken
    };
    try {
        const { data } = await axios.get(`/api/filter-product-by-categorie/${id}`,
        { headers });
        dispatch({ 
            type: 'FILTER_PRODUCT_SUCCESS', 
            payload: data
        });
      } catch (error) {
        dispatch({ type: 'FILTER_PRODUCT_FAIL', payload: error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
        });
      }
  };
