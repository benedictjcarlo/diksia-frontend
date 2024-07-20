import { combineReducers } from 'redux';
import { registerReducer } from './auth';
import { globalReducer } from './global';
import { homeReducer } from './home';
import { categoryReducer } from './category';
import { aktivitasReducer } from './donasi';

const reducer = combineReducers({
    auth: registerReducer, 
    global: globalReducer, 
    home: homeReducer,
    category: categoryReducer,
    donasi: aktivitasReducer,
});

export default reducer;
