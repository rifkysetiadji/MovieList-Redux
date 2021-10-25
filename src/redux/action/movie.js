import * as actionType from '../constant/movie'
import {setLoading,setLoadingSkeleton} from './general'
import { get } from "lodash";
import {apiCall} from 'services/apiCall'
export const getMovie=(slug='',forSearch)=>async dispatch=>{
    dispatch(setLoadingSkeleton(true))
    let dataReq={
        url:slug,
        method:'GET'
    }
    let res=await dispatch(apiCall(dataReq))
    if(res.data.Response==="True"){
        dispatch(setLoadingSkeleton(false))
        dispatch({
            type:forSearch?actionType.SET_MOVIE_FOR_SEARCH:actionType.GET_MOVIE,
            payload:res.data.Search
        })
        return res
    }else{
        alert(res.data.Error)
        dispatch(setLoadingSkeleton(false))
    }
}
export const getDetailMovie=(slug='')=>async dispatch=>{
    dispatch(setLoading(true))
    let dataReq={
        url:slug,
        method:'GET'
    }
    let res=await dispatch(apiCall(dataReq))
    if(res.data.Response==="True"){
        dispatch(setLoading(false))
        dispatch({
            type:actionType.SET_MOVIE,
            payload:res.data
        })
        return res
    }else{
        dispatch(setLoading(false))
    }
}