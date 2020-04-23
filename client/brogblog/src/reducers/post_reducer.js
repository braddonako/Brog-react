import {
   ADD_POST
} from '../actions/types';

export default function(state={}, action){
    switch(action.type){
        case ADD_POST:
            return {...state, addPost: action.payload}
        default: 
            return state; 
    }
}