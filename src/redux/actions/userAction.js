// LIBRARY
import axios from 'axios';

export const userLogin = (username, password) => async (dispatch, getState) => {
  try {
    dispatch({ type: 'LOGIN_REQUEST'})
    const config = {
      headers: {
        'Content-type': 'application/json'
      }
    }
    const response = await axios.post('/api/login/', {
      username,
      password,
    }, config);
    // Récupérer le jeton d'authentification
    const { access, isAdmin, email } = response.data;
    console.log('USER TOKEN:', access, isAdmin, email, username);

    document.cookie = `authToken=${access}; path=/`;
    dispatch({
        type: 'LOGIN_SUCCESS',
        payload: {
          access : access,
          isAdmin : isAdmin,
          email : email,
          username : username
        }
      });
    localStorage.setItem('authToken', JSON.stringify(getState().userLogin.authToken));
    window.location.href = '/'
    

  } catch (error) {
    dispatch({
        type: 'LOGIN_FAILURE',
        payload: 'Votre mot de passe ou identifiant est incorrect'
    })
  }
};

export const userLogout = () => async (dispatch) =>{
    localStorage.removeItem('authToken')
    dispatch({
      type: 'USER_LOGOUT'
    })
}

export const userRegister = (username, password, email) => async (dispatch, getState) => {
  try {
    dispatch({ type: 'REGISTER_REQUEST'})
    const config = {
      headers: {
        'Content-type': 'application/json'
      }
    }
    const response = await axios.post('/api/register-user/', {
      username,
      password,
      email
    }, config);

    console.log(response.data)


    dispatch({
        type: 'REGISTER_SUCCESS',
        payload: response.data
      });
    

  } catch (error) {
    dispatch({
        type: 'REGISTER_FAILURE',
        payload: error.message
    })
  }
};