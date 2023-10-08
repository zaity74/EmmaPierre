const authTokenStorage = localStorage.getItem("authToken")
  ? JSON.parse(localStorage.getItem("authToken"))
  : [];


const userState = {
    authToken : authTokenStorage,
    loading : false,
    error : null,
    isLogin : false,

}

const registerTokenStorage = localStorage.getItem("registerToken")
  ? JSON.parse(localStorage.getItem("registerToken"))
  : [];


export const userLoginReducer = (state = userState, action) => {
    switch (action.type) {
        case 'LOGIN_REQUEST':
            return {
                ...state,
                loading: false
            }
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                loading: false,
                authToken : action.payload,
                isLogin : true, 
            }
        case 'LOGIN_FAILURE':
            return {
                ...state,
                loading: false,
                error : action.payload,
                isLogin : false, 
            }
        case 'USER_LOGOUT':
            return {
                ...state,
                loading: false,
                authToken : {},
                isLogin : false, 
            }
        default:
            return state
    }
}

const userRegisterState = {
    registerToken : registerTokenStorage,
    loading : false,
    error : null,
    isRegister : false,

}
export const userRegisterReducer = (state = userRegisterState, action) => {
    switch (action.type) {
        case 'REGISTER_REQUEST':
            return {
                ...state,
                loading: false
            }
        case 'REGISTER_SUCCESS':
            return {
                ...state,
                loading: false,
                registerToken : action.payload,
                isLogin : true, 
            }
        case 'REGISTER_FAILURE':
            return {
                ...state,
                loading: false,
                error : action.payload,
                isLogin : false, 
            }
        case 'REMOVE_REGISTER':
            return {
                ...state,
                loading: false,
                registerToken : {},
                isLogin : false, 
            }
        default:
            return state
    }
}