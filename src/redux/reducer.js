import { combineReducers } from 'redux'



const dishreducer = (state = { Loading: false, dishes: [], error: null }, action) => {

    switch (action.type) {
        case 'LOADING':
            return {
                ...state,
                Loading: true

            }
        case 'LOADED':
            return {
                ...state,
                Loading: false,
                dishes: action.payload
            }
        case 'ERR':
            return {
                ...state,
                Loading: false,
                error: action.payload

            }
        default: return state;
    }
}
const commentreducer = (Commentstate = { isLoading: false, comments: [], error: null }, action) => {

    let comm = action.payload
    switch (action.type) {
        case "LOADING_COM":
            return {
                ...Commentstate,
                isLoading: true
            }
        case "LOAD_COM":
            return {
                ...Commentstate,
                isLoading: false,
                comments: action.payload
            }
        case "ERR_COM":
            return {
                ...Commentstate,
                isLoading: false,
                error: action.payload
            }
        default: return Commentstate
    }

}
export const reducer = combineReducers({


    dish: dishreducer,
    comments: commentreducer
})