import axios from "axios"
import { base } from './baseUrl'

export const AddToStore = (dishId, author, rating, comment, date, idd) => {

    const newcomment = {
        dishId: dishId,
        rating: rating,
        comment: comment,
        author: author,
        date: date

    }
    axios.post(base + 'comments', newcomment)
}
export const commentconcat = (com) => {

    return {
        type: "ADD_STORE",
        payload: com
    }
}

export const loaddingdish = () => {
    return {
        type: "LOADING"
    }

}
export const loaded = (item) => {
    return {
        type: "LOADED",
        payload: item
    }

}
export const founderror = (err) => {
    return {
        type: "ERR",
        payload: err
    }

}
export const errorcomment = (err) => {
    return {
        type: "ERR_COM",
        payload: err
    }
}
export const loadingcom = () => {
    return {
        type: "LOADING_COM",
    }
}
export const loadcom = (item) => {
    return {
        type: "LOAD_COM",
        payload: item
    }
}
export let fetchdished = () => dispatch => {
    dispatch(loaddingdish());
    axios.get('http://localhost:3000/dishes')
        .then(response => response.data)
        .then(data => dispatch(loaded(data)))
        .catch(err => dispatch(founderror(err.message)))
}
export let fetchcomment = () => dispatch => {
    dispatch(loadingcom());
    axios.get('http://localhost:3000/comments')
        .then(response => response.data)
        .then(data => dispatch(loadcom(data)))
        .catch(err => dispatch(errorcomment(err.message)))
}