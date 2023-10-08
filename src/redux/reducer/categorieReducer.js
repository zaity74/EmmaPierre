const categorieInitialState = {
    categorie : [],
    loading : false,
    error : null
}
export const categorieReducer = (state = categorieInitialState, action) => {
    switch (action.type) {
        case 'ADD_CATEGORIES_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'ADD_CATEGORIES_SUCCESS':
            return {
                ...state,
                loading: false,
                categorie : action.payload
            }
        case 'ADD_CATEGORIES_FAIL':
            return {
                ...state,
                loading: false,
                error : action.payload
            }
        default:
            return state
    }
}