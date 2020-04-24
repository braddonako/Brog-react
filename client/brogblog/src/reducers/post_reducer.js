import {
   ADD_POST,
   GET_ALL_POSTS
} from '../actions/types';

export default function(state={}, action){
    switch(action.type){
        case ADD_POST:
            return {...state, addPost: action.payload}
        case GET_ALL_POSTS:
            return{...state, getAllPosts: action.payload}
        default: 
            return state; 
    }
}