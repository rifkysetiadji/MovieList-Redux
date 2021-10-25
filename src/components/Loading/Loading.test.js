import { render,fireEvent } from '@testing-library/react';
import Loading from './index'
import rootReducer from '../../redux/reducer/index'
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';

let component;
let store;
let initialSate={
    general:{
        isLoading:true,
    }
}
beforeEach(()=>{
    const middleware=[thunk];
    store=createStore(rootReducer,initialSate,applyMiddleware(...middleware))
})
beforeEach(()=>{
    component=render(
        <Provider store={store}>
            <Loading/>
        </Provider>
    )
})

test("render loading if state isLoading True",()=>{
    let wrapperEl= component.getByTestId('loading-container')
    expect(wrapperEl).toBeTruthy()
})