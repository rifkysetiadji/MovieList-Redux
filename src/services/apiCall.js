import axios from 'axios'
import {URL,API_KEY} from './base_url'

export const apiCall=({method,url,data=''})=>async(dispatch)=>{
    try {
        const response=await axios({
            method:method,
            url:URL+`?apikey=${API_KEY}`+url,
        })
        return response
    } catch (error) {
        alert('error')
    }
}