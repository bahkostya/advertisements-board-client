import { combineReducers } from 'redux';
import advertisements from './advertisements';
import user from './user';

export default combineReducers({
    advertisements,
    user,
});
