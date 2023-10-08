import { 
    FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS,
    FETCH_DETAILS_PRODUCT_FAILURE, FETCH_DETAILS_PRODUCT_REQUEST, FETCH_DETAILS_PRODUCT_SUCCESS,

} from "../../constante/data";
import { getCookie } from "../../utils/getCookie";

// Library
import axios from 'axios';

// Redux import 
import { userLogin } from "./userAction";

export const listViewedProduct = (slug)  => async (dispatch,getState) => {
  // COOKIES VARIABLE
  const { authToken } = getState().userLogin;
  const csrftoken = getCookie('csrftoken');
  const headers = {
    'X-CSRFToken': csrftoken,
    'Authorization': `Bearer ${authToken.access}`,
  };
  try {
      // Obtenez la nouvelle valeur du jeton d'authentification à partir de l'état
      // Get the data from the api product
      const { data } = await axios.post(`api/recently-view-product/${slug}`,{}, { headers });
      
      // Success, return data into action.payload
      dispatch({
          type: 'FETCH_RECENTLY_VIEWED_SUCCESS',
          payload: data
       });
      localStorage.setItem('recentP', JSON.stringify(getState().listViewedProduct.recentP));
  } catch (error) {
    console.log('ERROR RECENTLY VIEWED : ',error)
      // Error, can't return data
      dispatch({
          type: 'FETCH_RECENTLY_VIEWED_FAILURE',
          payload: error.message
      })
  }
}
export const removeListViewedProduct = () => async (dispatch) =>{
  localStorage.removeItem('recentP')
  dispatch({
    type: 'REMOVE_VIEWED_PRODUCT'
  })
}

// On utilise dispatch pour des appels asynchrones à des API externes.
// Le dispatch permet d'envoyer une action à tous les reducers qui se trouvent dans le store
export const listeProduit = (page) => async (dispatch) => {
    try {
      // Get the data from the api product
      dispatch({ type: FETCH_PRODUCTS_REQUEST })
  
      const { data } = await axios.get(`/api/v1/products?page=${page}`)
      // Success, return data into action.payload
      dispatch({
        type: FETCH_PRODUCTS_SUCCESS,
        payload: {
            ...data,
            page: Number(data.page)
        }
      })
    } catch (error) {
      // Error, can't return data
      dispatch({
        type: FETCH_PRODUCTS_FAILURE,
        payload: error.message
      })
    }
  }
  

export const produitDetails = (slug)  => async (dispatch,getState) => {
    try {
        // Get the data from the api product
        dispatch({ type: FETCH_DETAILS_PRODUCT_REQUEST })
        const { data } = await axios.get(`/api/product/${slug}`)
        // Success, return data into action.payload
        dispatch({
            type: FETCH_DETAILS_PRODUCT_SUCCESS,
            payload: data
        })
    } catch (error) {
        // Error, can't return data
        dispatch({
            type: FETCH_DETAILS_PRODUCT_FAILURE,
            payload: error.message
        })
    }
}

export const orderByLowerPrice = () => async (dispatch) => {
    const csrftoken = getCookie('csrftoken');
    const headers = {
      'X-CSRFToken': csrftoken
    };
    try {
        const { data } = await axios.get(`/api/order-product-by-lower-price/`,
        { headers });
        dispatch({ 
            type: 'ORDER_PRODUCT_LOWER_PRICE_SUCCESS', 
            payload: data
        });
      } catch (error) {
        dispatch({ type: 'ORDER_PRODUCT_LOWER_PRICE_FAIL', payload: error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
        });
      }
  };

export const listFavoris = (slug)  => async (dispatch,getState) => {
    // COOKIES VARIABLE
    const csrftoken = getCookie('csrftoken');
    const headers = {
      'X-CSRFToken': csrftoken,
      //'Authorization': `Bearer ${authToken}`,
    };
    try {
        // Obtenez la nouvelle valeur du jeton d'authentification à partir de l'état
        //const { authToken } = getState().userLogin;
        // Get the data from the api product
        const { data } = await axios.post(`/api/add-favorites-item/${slug}`, { headers });

        dispatch({
            type: 'FETCH_FAVORIS_SUCCESS',
            payload: data
         });
         localStorage.setItem('favorisItem', JSON.stringify(getState().listeFavoris.favorisItem));
    } catch (error) {
      console.log('ERROR FAVORIS : ',error)
        // Error, can't return data
        dispatch({
            type: 'FETCH_FAVORIS_FAILURE',
            payload: error.message
        })
    }
  }