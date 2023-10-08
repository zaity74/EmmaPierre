// ========= LIST FAVORIS  ===============================
const reviewFromStorage = localStorage.getItem("reviewItem")
  ? JSON.parse(localStorage.getItem("reviewItem"))
  : [];

const reviewState = {
  loading: false,
  reviewItem: reviewFromStorage,
  error: null,
};

export const userProductReviewReducer = (state = reviewState, action) => {
    switch (action.type) {
        case 'FETCH_REVIEW_REQUEST':
            return {
            ...state,
            loading: false,
            };
        case 'FETCH_REVIEW_SUCCESS':
            return {
                ...state,
                reviewItem: action.payload,
                loading: true,
            };
 
        case 'FETCH_REVIEW_FAILURE':
            return {
            ...state,
            error: action.payload,
            };
        case 'REVIEW_REMOVE':
            return {};
        case 'REVIEW_REMOVE_FAILURE':
            return {
                ...state,
                error: action.payload
            };
      default:
        return state;
    }
  };
  
