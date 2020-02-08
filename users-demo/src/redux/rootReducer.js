import { combineReducers } from 'redux';
import UserReducer from './users/userReducer';

const rootReducer = combineReducers({
    users: UserReducer
})

export default rootReducer;