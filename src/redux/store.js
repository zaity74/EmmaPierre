import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk'; 
import { composeWithDevTools } from 'redux-devtools-extension';
import { productReducer, productDetailsReducer } from './reducer/productReducer';
import { cartReducer } from './reducer/cartReducer';
import { categorieReducer } from './reducer/categorieReducer';
import { recentlyViewedProductReducer } from './reducer/productReducer';
import { userLoginReducer } from './reducer/userReducer';
import { favorisReducer } from './reducer/productReducer';
import { userProductReviewReducer } from './reducer/reviewReducer';
import { userRegisterReducer } from './reducer/userReducer';

const rootReducer = combineReducers({
    listeProduit: productReducer,
    produitDetails: productDetailsReducer,
    addToCart: cartReducer, 
    listeCategorie: categorieReducer,
    listViewedProduct: recentlyViewedProductReducer,
    userLogin : userLoginReducer,
    listeFavoris : favorisReducer, 
    userProductReview : userProductReviewReducer,
    userRegister : userRegisterReducer
});

/* PULLING DATA OUT OF LOCAL STORAGE AND LOAD IT INTO INITIAL STATE */
const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

/* INITIAL STATE */
const initialState = {
    cartItems: cartItemsFromStorage
};

const middleware = [thunk];

const configureAppStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    initialState,
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
  });

  return store;
};

export default configureAppStore;






