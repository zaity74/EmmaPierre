// On définit ici les états initials de l'application pour le rendu des produits 
// Et ensuit les actions qui vont se lancer en fonction du type de l'action.
import {
    FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_REQUEST,
    FETCH_DETAILS_PRODUCT_FAILURE, FETCH_DETAILS_PRODUCT_REQUEST, FETCH_DETAILS_PRODUCT_SUCCESS,

}   from '../../constante/data'

// ============= STATE ==========================

const productInitialState = {
    produit : [],
    loading : false,
    error : null,

}

const productDetailsInitialState = {
    productDetails : {},
    loading : false,
    error : null,
    photos: null,
}

// ========= LIST PRODUCT ===============================

export const productReducer = (state = productInitialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                produit : action.payload.products,
                total_pages: action.payload.total_pages,
                total_products: action.payload.total_products,
                page: action.payload.page
            }
        case FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                loading: false,
                error : action.payload
            }
        case 'FILTER_PRODUCT_SUCCESS':
            return {
                ...state,
                produit: action.payload,
                loading: false,
                error: null,
            };
        case 'FILTER_PRODUCT_FAIL':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case 'ORDER_PRODUCT_LOWER_PRICE_SUCCESS':
            return {
                ...state,
                produit: action.payload,
                loading: false,
                error: null,
            };
        case 'ORDER_PRODUCT_LOWER_PRICE_FAIL':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state
    }
}

// ========= PRODUCT DETAILS ===============================

export const productDetailsReducer = (state = productDetailsInitialState, action) => {
    switch (action.type) {
        case FETCH_DETAILS_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_DETAILS_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                productDetails : action.payload,
                photos: action.payload.photos
            }
        case FETCH_DETAILS_PRODUCT_FAILURE:
            return {
                ...state,
                loading: false,
                error : action.payload
            }
        default:
            return state
    }
}

// ========= RECENTLY VIEWED PRODUCT ===============================

const recentPFromStorage = localStorage.getItem("recentP")
  ? JSON.parse(localStorage.getItem("recentP"))
  : [];

const viewedProduct = {
  loading: false,
  recentP: recentPFromStorage,
  error: null,
};

export const recentlyViewedProductReducer = (state = viewedProduct, action) => {
  switch (action.type) {
    case 'FETCH_RECENTLY_VIEWED_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_RECENTLY_VIEWED_SUCCESS':
      const item = action.payload;
      const existingItem = state.recentP.find((x) => x.id === item.id);
      if (existingItem && state.recentP) {
        return {
          ...state,
          recentP: state.recentP.map((x) =>
            x.id === existingItem.id ? item : x
          ),
        };
      } else {
        return { ...state, recentP: [...state.recentP, item] };
      }

    case 'FETCH_RECENTLY_VIEWED_FAILURE':
      return {
        ...state,
        error: action.payload,
      };
    case 'REMOVE_VIEWED_PRODUCT':
          return {
              ...state,
              loading: false,
              recentP : {},
          }
    default:
      return state;
  }
};


// ========= LIST FAVORIS  ===============================
const favorisFromStorage = localStorage.getItem("favorisItem")
  ? JSON.parse(localStorage.getItem("favorisItem"))
  : [];

const favorisState = {
  loading: false,
  favorisItem: favorisFromStorage,
  isLiked : false,
  error: null,
};

export const favorisReducer = (state = favorisState, action) => {
    switch (action.type) {
      case 'FETCH_FAVORIS_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'FETCH_FAVORIS_SUCCESS':
        const item = action.payload;
        const existingItem = state.favorisItem.find((x) => x.id === item.id);
        if (existingItem && state.favorisItem) {
          return {
            ...state,
            favorisItem: state.favorisItem.map((x) =>
              x.id === existingItem.id ? item : x
            ),
            isLiked: true
          };
        } else {
          return { 
            ...state, 
            favorisItem: [...state.favorisItem, item],
            isLiked : true };
        }
 
      case 'FETCH_FAVORIS_FAILURE':
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
