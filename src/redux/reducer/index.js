import { combineReducers } from 'redux';
import { registerReducer } from './auth';
import { globalReducer } from './global';
import { homeReducer } from './home';

const reducer = combineReducers({
    auth: registerReducer, 
    global: globalReducer, 
    home: homeReducer,
    
});

export default reducer;
