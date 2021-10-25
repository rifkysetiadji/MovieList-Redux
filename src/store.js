import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducer'

const initialSate={};

const middleware=[thunk];

const store= createStore(rootReducer,initialSate,applyMiddleware(...middleware));

export default store;