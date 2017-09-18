import { combineReducers } from 'redux';
import BoardReducer from './board/BoardReducer';
import LocationReducer from './location/LocationReducer';
import { reducer as formReducer } from 'redux-form';

const reducers = {
    boardStore: BoardReducer,
    locationStore: LocationReducer,
    form: formReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;