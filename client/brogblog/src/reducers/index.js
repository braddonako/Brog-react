import { combineReducers } from 'redux';
import user from './user_reducer';
import article from './post_reducer'

const rootReducer = combineReducers({
    user,
    article
})

export default rootReducer;