import React from 'react'
import SkeletonLoader from 'components/Loading/skeleton'
export default function List(props) {
    let {movies,searchToggle,isLoadingSkeleton,onClickDetail,onClickPoster}=props
    return (
        <div data-testid="list-container">
            <input onChange={(e)=>searchToggle(e.target.value)} placeholder="search movie"/>
            <br/><br/>
            {isLoadingSkeleton&&<SkeletonLoader/>}
            {movies.map((d,i)=>(
                <div data-testid="card-container" className="card-container" key={i}>
                    <img onClick={()=>onClickPoster(d.Poster)} src={d.Poster}/>
                    <div className="card-info">
                        <h1 onClick={()=>onClickDetail(d.imdbID)} data-testid="card-title" >{d.Title}</h1>
                        <p>Year : {d.Year}</p>
                        <p>IMBD Id : {d.imdbID}</p>
                    </div>
                </div>
            ))}
            
            {isLoadingSkeleton&&<SkeletonLoader/>}
        </div>
    )
}
