import axios from "axios";
import { getCookie } from "../../utils/getCookie"; 


export const userProductReview = (slug, rating, comment) => async (dispatch, getState) => {
    // COOKIES VARIABLE
    const { authToken } = getState().userLogin;
    const config = {
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${authToken.access}`
      }
    };
  
    try {
      dispatch({ type: 'FETCH_REVIEW_REQUEST' });
  
      const response = await axios.post(
        `/api/product/${slug}/reviews/`,{ rating,comment},config
      );
  
      dispatch({
        type: 'FETCH_REVIEW_SUCCESS',
        payload: response.data
      });
  
      localStorage.setItem('reviewItem', JSON.stringify(getState().userProductReview.reviewItem));
    } catch (error) {
      dispatch({
        type: 'FETCH_REVIEW_FAILURE',
        payload: error.message
      });
    }
  };

export const removeUserProductReview = (id) => async (dispatch,getState) =>{
    // COOKIES VARIABLE
    const { authToken } = getState().userLogin;
    const config = {
        headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${authToken.access}`
        }
    };
    try{
        const response = await axios.delete(`/api/product/reviews/${id}`,config);
        dispatch({
            type: 'REVIEW_REMOVE',
            payload: response.data
        });
    }catch(error){
        dispatch({
            type: 'REVIEW_REMOVE_FAILURE',
            payload: error.message
        });
    }

}