import * as actionType from '../constant/general'

export const setLoading=(data)=>dispatch=>{
    dispatch({
        type:actionType.SET_LOADING,
        payload:data
    })
}
export const setLoadingSkeleton=(data)=>dispatch=>{
    dispatch({
        type:actionType.SET_LOADING_SKELETON,
        payload:data
    })
}

export const modalToggle=(obj)=>dispatch=>{
    dispatch({
        type:actionType.SET_MODAL,
        payload:obj
    })
}

export const modalToggleReset=(obj)=>dispatch=>{
    dispatch({
        type: actionType.MODAL_RESET,
        payload: obj
      });
}