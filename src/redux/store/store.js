// store.ts

import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import locationsReducer from '../reducer/reducer';

const rootReducer = combineReducers({
  locations: locationsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
