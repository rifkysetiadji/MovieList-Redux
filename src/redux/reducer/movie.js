import * as actionType from '../constant/movie'

const initialState={
    movie_list:[],
    movie_detail:null
}

export default (state=initialState,action)=>{
    switch (action.type) {
        case actionType.GET_MOVIE:
            return{
                ...state,
                movie_list:[...state.movie_list,...action.payload]
            }
        case actionType.SET_MOVIE_FOR_SEARCH:
            return{
                ...state,
                movie_list:action.payload
            }
        case actionType.SET_MOVIE:
            return{
                ...state,
                movie_detail:action.payload
            }
        default:
            return state;
    }
}