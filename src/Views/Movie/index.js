import React,{useState,useEffect,useRef} from 'react'
import List from './List'
import Detail from './Detail'
import './style.css'
import { useSelector,useDispatch } from 'react-redux'
import { getMovie,getDetailMovie } from 'redux/action/movie'
import { modalToggle } from 'redux/action/general'
import detectBottom from 'services/detectBottom';
import {debounce} from 'lodash'

export default function Index() {
    const ref = useRef()
    const isVisible = detectBottom(ref)
    const dispatch = useDispatch()
    const [tab, settab] = useState('list')
    const [search,setSearch]=useState('batman')
    const [page,setPage]=useState(1) 
    const movie = useSelector(state => state.movie)
    const general = useSelector(state => state.general)
    useEffect(() => {
        if(isVisible){
            setPage(page+1)
            dispatch(getMovie(`&s=${search}&page=${page}`,false))
        }
    }, [isVisible])
    const searchToggle=debounce(async (value)=>{
        setSearch(value)
        dispatch(getMovie(`&s=${value!==''?value:'batman'}&page=${1}`,true))
    },1000)
    const autoCompleteSearch=(value)=>{
        setSearch(value)

        dispatch(getMovie(`&s=${value!==''?value:'batman'}&page=${1}`,true))

    }
    const tabToggle=(key)=> settab(key)
    const onClickDetail=async (id)=>{
        let res=await dispatch(getDetailMovie(`&i=${id}`))
        if(res){
            tabToggle('detail')
        }
    }
    const onClickPoster=(url)=>{
        dispatch(modalToggle({
            modal_open:true,
            modal_title:'',
            modal_component:'poster_detail',
            modal_size:400,
            modal_data:url
        }))
    }
    return (
        <div data-testid="movie-container" className='movie-container'>
            {tab==="list"&&<List autoCompleteSearch={autoCompleteSearch}   searchToggle={searchToggle} isLoadingSkeleton={general.isLoadingSkeleton} movies={movie.movie_list} tabToggle={tabToggle} onClickDetail={onClickDetail} onClickPoster={onClickPoster}/>}
            <div ref={ref}></div>
            {tab==="detail"&&<Detail movie_detail={movie.movie_detail} tabToggle={tabToggle}/>}
        </div>
    )
}
