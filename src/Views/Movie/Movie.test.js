import { render,fireEvent,waitFor } from '@testing-library/react';
import Movie from './index'
import rootReducer from '../../redux/reducer/index'
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';

let component;
let store;
let initialState={
    movie:{
        movie_list:[
            {
                Poster: "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
                Title: "Batman Begins",
                Type: "movie",
                Year: "2005",
                imdbID: "tt0372784"
            }
        ],
    }
    
}
beforeEach(() => {
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });
beforeEach(()=>{
    const middleware=[thunk];
    store=createStore(rootReducer,initialState,applyMiddleware(...middleware))
})
beforeEach(()=>{
    component=render(
        <Provider store={store}>
            <Movie/>
        </Provider>
    )
})
test("render page movie",()=>{
    let wrapperEl= component.getByTestId('movie-container')
    expect(wrapperEl).toBeTruthy()
})
test("render list section",()=>{
    let wrapperEl= component.getByTestId('list-container')
    expect(wrapperEl).toBeTruthy()
})
test("render list card movie",()=>{
    let wrapperEl= component.getByTestId('card-container')
    expect(wrapperEl.length).not.toBe(0)
})
test("render detail section if click title", async ()=>{
    let wrapperEl= component.getByTestId('card-title')
    fireEvent.click(wrapperEl)
    await waitFor(() => {
        expect(component.getByTestId('detail-container')).toBeTruthy();
      });
})
test("render list section if click back",async ()=>{
    let wrapperEl= component.getByTestId('card-title')
    fireEvent.click(wrapperEl)
    await waitFor(() => {
        expect(component.getByTestId('back-btn')).toBeTruthy();
      });
    fireEvent.click(component.getByTestId('back-btn'))
    let listEl= component.getByTestId('list-container')
    expect(listEl).toBeTruthy()

})